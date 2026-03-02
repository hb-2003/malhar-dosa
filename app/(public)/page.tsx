import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MenuCard } from "@/components/ui/MenuCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { menuItems, testimonials, topHighlights } from "@/lib/data";

export default function LandingPage() {
  return (
    <>
      <Container className="pb-10 pt-12 md:pt-14">
        <section className="card-surface noise-overlay relative overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-[var(--color-saffron)]/25 blur-2xl" />
          <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-[var(--color-leaf)]/22 blur-xl" />

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-5">
              <span className="pill text-[var(--color-saffron)]">Fresh Fermented Daily</span>
              <h1 className="max-w-xl text-4xl leading-tight text-[var(--color-ink)] md:text-6xl">
                Crafted Dosas With
                <br />
                Traditional Soul.
              </h1>
              <p className="max-w-xl text-base text-[var(--color-chutney)]/90 md:text-lg">
                Malhar Dosa serves stone-ground batter, vibrant chutneys, and open-kitchen energy from breakfast through late dinner.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/menu" className="rounded-full bg-[var(--color-saffron)] px-6 py-3 text-sm font-black tracking-[0.08em] text-white">
                  Explore Menu
                </Link>
                <Link href="/about" className="accent-ring rounded-full bg-white/75 px-6 py-3 text-sm font-bold tracking-[0.08em] text-[var(--color-chutney)]">
                  Our Story
                </Link>
              </div>
            </div>

            <div className="grid gap-3 md:gap-4">
              {topHighlights.map((highlight) => (
                <article key={highlight.title} className="rounded-2xl border border-[var(--color-chutney)]/14 bg-white/65 p-4">
                  <h3 className="text-xl text-[var(--color-ink)]">{highlight.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-chutney)]/85">{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Container>

      <Container className="space-y-7">
        <SectionTitle
          eyebrow="Popular Picks"
          title="Guest Favorites"
          subtitle="South Indian classics with modern plating and clean ingredient profiles."
          action={
            <Link href="/menu" className="rounded-full border border-[var(--color-chutney)]/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-chutney)] hover:bg-white/65 md:text-sm">
              Full Menu
            </Link>
          }
        />
        <div className="grid gap-5 md:grid-cols-2">
          {menuItems.slice(0, 2).map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>
      </Container>

      <Container className="mt-4 pb-12">
        <SectionTitle
          eyebrow="What Guests Say"
          title="A Kitchen Worth Coming Back To"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((quote) => (
            <article key={quote.name} className="card-surface rounded-2xl p-5">
              <p className="text-sm leading-relaxed text-[var(--color-chutney)]/95">{quote.text}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-[var(--color-saffron)]">{quote.name}</p>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
