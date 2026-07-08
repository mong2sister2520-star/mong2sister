import { createClient } from "@libsql/client";
import { pbkdf2Sync, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

type SignupRequest = {
  name?: string;
  userId?: string;
  password?: string;
  phone?: string;
};

function getText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(value: string) {
  return value.replace(/[\s-]/g, "");
}

function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");

  return { hash, salt };
}

export async function POST(request: Request) {
  const tursoUrl = process.env.TURSO_KEY_URL;
  const tursoToken = process.env.TURSO_KET_TOKEN;

  if (!tursoUrl || !tursoToken) {
    return NextResponse.json(
      { message: "Turso 환경변수가 설정되지 않았습니다." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as SignupRequest;
  const name = getText(body.name);
  const userId = getText(body.userId);
  const password = getText(body.password);
  const phone = normalizePhone(getText(body.phone));

  if (!name || !userId || !password || !phone) {
    return NextResponse.json(
      { message: "이름, 아이디, 비밀번호, 전화번호를 모두 입력하세요." },
      { status: 400 },
    );
  }

  if (userId.length < 4 || userId.length > 40) {
    return NextResponse.json(
      { message: "아이디는 4자 이상 40자 이하로 입력하세요." },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { message: "비밀번호는 8자 이상 입력하세요." },
      { status: 400 },
    );
  }

  if (!/^\d{9,15}$/.test(phone)) {
    return NextResponse.json(
      { message: "전화번호는 숫자만 9자 이상 15자 이하로 입력하세요." },
      { status: 400 },
    );
  }

  const client = createClient({
    url: tursoUrl,
    authToken: tursoToken,
  });

  const { hash, salt } = hashPassword(password);

  try {
    await client.execute({
      sql: `
        INSERT INTO users (name, user_id, phone, password_hash, password_salt)
        VALUES (?, ?, ?, ?, ?)
      `,
      args: [name, userId, phone, hash, salt],
    });

    return NextResponse.json(
      { message: "회원가입이 완료되었습니다." },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "";

    if (message.includes("UNIQUE")) {
      return NextResponse.json(
        { message: "이미 사용 중인 아이디 또는 전화번호입니다." },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { message: "회원가입 저장 중 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}
