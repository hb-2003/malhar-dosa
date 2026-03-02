import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function AboutPage() {
  return (
    <Container className="space-y-8 pb-12 pt-10 md:pt-12">
      <SectionTitle
        eyebrow="About Malhar Dosa"
        title="A Neighborhood Kitchen Built Around The Tawa"
        subtitle="We started with one cast-iron tawa, one family recipe, and a mission to serve comforting South Indian food with precision and warmth."
      />

      <section className="grid gap-5 md:grid-cols-2">
        <article className="card-surface rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl text-[var(--color-ink)]">Our Philosophy</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-chutney)]/90 md:text-base">
            Every batter batch is fermented in-house and monitored through the day for texture and flavor. Chutneys are prepared in short cycles so they stay bright and balanced.
          </p>
        </article>

        <article className="card-surface rounded-3xl p-6 md:p-8">
          <h3 className="text-2xl text-[var(--color-ink)]">The Experience</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-chutney)]/90 md:text-base">
            The open kitchen lets guests watch each dosa spread, fold, and plate. We blend traditional methods with a clean, modern service style for weekday lunches and family dinners.
          </p>
        </article>
      </section>

      <section className="card-surface rounded-[2rem] p-7 md:p-10">
        <h3 className="text-3xl text-[var(--color-ink)]">What Makes Us Different</h3>
        <div className="mt-5 grid gap-4 text-sm text-[var(--color-chutney)]/90 md:grid-cols-3 md:text-base">
          <p>Stone-ground rice and lentils for natural texture.</p>
          <p>Six rotating chutneys using seasonal ingredients.</p>
          <p>Consistent prep standards across every service window.</p>
        </div>
      </section>
    </Container>
  );
}
