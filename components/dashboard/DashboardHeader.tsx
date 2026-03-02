type DashboardHeaderProps = {
  title: string;
  description: string;
};

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <header className="mb-6 rounded-2xl border border-[var(--color-chutney)]/15 bg-white/70 p-5 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-chutney)]/70">Operations</p>
      <h2 className="mt-2 text-3xl text-[var(--color-ink)]">{title}</h2>
      <p className="mt-1 text-sm text-[var(--color-chutney)]/85">{description}</p>
    </header>
  );
}
