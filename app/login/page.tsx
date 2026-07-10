export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background px-container-padding-mobile py-section-gap text-on-surface md:px-container-padding-desktop">
      <section className="flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          KkuLight Account
        </p>
        <h1 className="mt-4 font-display text-display text-primary">로그인</h1>
        <p className="mt-4 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
          회원가입이 완료되었습니다. 로그인 기능은 다음 단계에서 연결합니다.
        </p>
      </section>
    </main>
  );
}
