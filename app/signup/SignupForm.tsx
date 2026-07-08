"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  userId: string;
  password: string;
  phone: string;
};

const initialForm: FormState = {
  name: "",
  userId: "",
  password: "",
  phone: "",
};

export function SignupForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "회원가입에 실패했습니다.");
      }

      setForm(initialForm);
      setMessage(result.message || "회원가입이 완료되었습니다.");
    } catch (error) {
      setIsError(true);
      setMessage(
        error instanceof Error ? error.message : "회원가입에 실패했습니다.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="mt-8 flex w-full max-w-md flex-col gap-5 rounded-xl bg-surface-container-lowest p-8 shadow-lg shadow-primary/10"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        이름
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="이름을 입력하세요"
          required
          type="text"
          value={form.name}
        />
      </label>

      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        아이디
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          minLength={4}
          onChange={(event) => updateField("userId", event.target.value)}
          placeholder="아이디를 입력하세요"
          required
          type="text"
          value={form.userId}
        />
      </label>

      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        비밀번호
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          minLength={8}
          onChange={(event) => updateField("password", event.target.value)}
          placeholder="8자 이상 입력하세요"
          required
          type="password"
          value={form.password}
        />
      </label>

      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        전화번호
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="01012345678"
          required
          type="tel"
          value={form.phone}
        />
      </label>

      <button
        className="mt-2 rounded-full bg-primary px-6 py-4 font-headline-md text-headline-md text-on-primary shadow-lg shadow-primary/20 transition hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "가입 중..." : "회원가입"}
      </button>

      {message ? (
        <p
          className={`font-body-md text-body-md ${
            isError ? "text-error" : "text-primary"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
