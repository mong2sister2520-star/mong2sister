"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

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

const labels = {
  name: "\uC774\uB984",
  userId: "\uC544\uC774\uB514",
  password: "\uBE44\uBC00\uBC88\uD638",
  phone: "\uC804\uD654\uBC88\uD638",
  submit: "\uD68C\uC6D0\uAC00\uC785",
  submitting: "\uAC00\uC785 \uC911...",
  required: "\uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
  success: "\uD68C\uC6D0\uAC00\uC785\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4",
  fail: "\uD68C\uC6D0\uAC00\uC785\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4",
};

export function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      name: form.name.trim(),
      userId: form.userId.trim(),
      password: form.password.trim(),
      phone: form.phone.trim(),
    };

    if (!payload.name || !payload.userId || !payload.password || !payload.phone) {
      alert(labels.required);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || labels.fail);
      }

      alert(result.message || labels.success);
      setForm(initialForm);
      router.push("/");
    } catch (error) {
      alert(error instanceof Error ? error.message : labels.fail);
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
        {labels.name}
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => updateField("name", event.target.value)}
          placeholder={labels.name}
          type="text"
          value={form.name}
        />
      </label>

      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        {labels.userId}
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => updateField("userId", event.target.value)}
          placeholder={labels.userId}
          type="text"
          value={form.userId}
        />
      </label>

      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        {labels.password}
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => updateField("password", event.target.value)}
          placeholder={labels.password}
          type="password"
          value={form.password}
        />
      </label>

      <label className="flex flex-col gap-2 font-label-md text-label-md text-on-surface">
        {labels.phone}
        <input
          className="rounded-lg border border-outline-variant bg-surface px-4 py-3 font-body-md text-body-md outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="01012345678"
          type="tel"
          value={form.phone}
        />
      </label>

      <button
        className="mt-2 rounded-full bg-primary px-6 py-4 font-headline-md text-headline-md text-on-primary shadow-lg shadow-primary/20 transition hover:bg-primary-container disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? labels.submitting : labels.submit}
      </button>
    </form>
  );
}
