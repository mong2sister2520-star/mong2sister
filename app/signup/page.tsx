import { SignupForm } from "./SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background px-container-padding-mobile py-section-gap text-on-surface md:px-container-padding-desktop">
      <section className="flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          KkuLight Account
        </p>
        <h1 className="mt-4 font-display text-display text-primary">
          회원가입
        </h1>
        <p className="mt-4 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          이름, 아이디, 비밀번호, 전화번호를 입력해 계정을 만드세요.
        </p>
        <SignupForm />
      </section>
    </main>
  );
}
