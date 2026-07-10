import { createClient } from "@libsql/client";
import { pbkdf2Sync, randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

type SignupRequest = {
  name?: string;
  userId?: string;
  password?: string;
  phone?: string;
};

const messages = {
  missingEnv: "Turso environment variables are not configured.",
  required: "\uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
  success: "\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
  duplicate: "\uC774\uBBF8 \uC0AC\uC6A9 \uC911\uC778 \uC544\uC774\uB514 \uB610\uB294 \uC804\uD654\uBC88\uD638\uC785\uB2C8\uB2E4",
  fail: "\uD68C\uC6D0\uAC00\uC785 \uC800\uC7A5 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4",
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
    return NextResponse.json({ message: messages.missingEnv }, { status: 500 });
  }

  const body = (await request.json()) as SignupRequest;
  const name = getText(body.name);
  const userId = getText(body.userId);
  const password = getText(body.password);
  const phone = normalizePhone(getText(body.phone));

  if (!name || !userId || !password || !phone) {
    return NextResponse.json({ message: messages.required }, { status: 400 });
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

    return NextResponse.json({ message: messages.success }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";

    if (message.includes("UNIQUE")) {
      return NextResponse.json({ message: messages.duplicate }, { status: 409 });
    }

    return NextResponse.json({ message: messages.fail }, { status: 500 });
  }
}
