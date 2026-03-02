import { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function SectionTitle({ eyebrow, title, subtitle, action }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <span className="pill text-[var(--color-chutney)]">{eyebrow}</span>
        <h2 className="text-3xl leading-tight text-[var(--color-ink)] md:text-4xl">{title}</h2>
        {subtitle ? <p className="max-w-2xl text-sm text-[var(--color-chutney)]/85 md:text-base">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
