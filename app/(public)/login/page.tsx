import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function LoginPage() {
  return (
    <Container className="flex min-h-[calc(100vh-11rem)] items-center justify-center py-10">
      <section className="card-surface noise-overlay relative w-full max-w-md overflow-hidden rounded-[2rem] p-7 md:p-8">
        <div className="relative z-10">
          <p className="pill text-[var(--color-leaf)]">Staff Portal</p>
          <h1 className="mt-4 text-4xl leading-tight text-[var(--color-ink)]">Welcome Back</h1>
          <p className="mt-2 text-sm text-[var(--color-chutney)]/85">
            Use this single-login interface for kitchen and service operations.
          </p>

          <form className="mt-7 space-y-4">
            <label className="block space-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-chutney)]/80">Email</span>
              <input
                type="email"
                placeholder="staff@malhardosa.com"
                className="w-full rounded-xl border border-[var(--color-chutney)]/22 bg-white/75 px-3 py-3 text-sm outline-none transition focus:border-[var(--color-saffron)]"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-chutney)]/80">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-[var(--color-chutney)]/22 bg-white/75 px-3 py-3 text-sm outline-none transition focus:border-[var(--color-saffron)]"
              />
            </label>

            <button
              type="button"
              className="mt-1 w-full rounded-xl bg-[var(--color-saffron)] px-4 py-3 text-sm font-black uppercase tracking-[0.1em] text-white"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-[var(--color-chutney)]/75">
            Demo only. No backend authentication configured.
          </p>
          <p className="mt-2 text-center text-xs text-[var(--color-chutney)]/80">
            Need operations view?{" "}
            <Link href="/dashboard" className="font-black text-[var(--color-saffron)]">
              Open dashboard
            </Link>
          </p>
        </div>
      </section>
    </Container>
  );
}
