"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNav } from "@/lib/data";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen border-r border-[var(--color-chutney)]/15 bg-[color:rgba(255,248,235,0.8)] px-3 py-6 backdrop-blur">
      <div className="mb-8 px-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-chutney)]/70 md:hidden">MD</p>
        <h1 className="hidden text-2xl text-[var(--color-ink)] md:block">Malhar Dosa</h1>
        <p className="mt-1 hidden text-xs text-[var(--color-chutney)]/70 md:block">Kitchen Dashboard</p>
      </div>

      <nav className="space-y-2">
        {dashboardNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 transition ${
                isActive
                  ? "bg-[var(--color-saffron)] text-white"
                  : "text-[var(--color-chutney)] hover:bg-[var(--color-card)]"
              }`}
            >
              <span>{item.icon}</span>
              <span className="hidden text-sm font-semibold md:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
