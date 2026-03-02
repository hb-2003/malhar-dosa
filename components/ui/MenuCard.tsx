import { MenuItem } from "@/lib/data";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="card-surface noise-overlay relative overflow-hidden rounded-3xl p-5 md:p-6">
      <div className="relative z-10 space-y-4">
        <span className="pill text-[var(--color-leaf)]">{item.tag}</span>
        <h3 className="text-2xl leading-tight text-[var(--color-ink)]">{item.name}</h3>
        <p className="text-sm text-[var(--color-chutney)]/90 md:text-base">{item.description}</p>
        <p className="text-lg font-extrabold text-[var(--color-saffron)]">{item.price}</p>
      </div>
    </article>
  );
}
