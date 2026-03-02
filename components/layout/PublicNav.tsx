import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/login", label: "Staff Login" },
];

export function PublicNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-chutney)]/12 bg-[color:rgba(248,240,223,0.88)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-full border border-[var(--color-saffron)]/55 bg-white px-3 py-1 text-xs font-black tracking-[0.14em] text-[var(--color-saffron)]">
            MD
          </span>
          <div>
            <p className="text-xl leading-none text-[var(--color-ink)]">Malhar Dosa</p>
            <p className="text-[11px] tracking-[0.12em] text-[var(--color-chutney)]/70">SOUTH INDIAN KITCHEN</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 md:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-xs font-bold tracking-[0.09em] text-[var(--color-chutney)] transition hover:bg-white/75 md:px-4 md:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
