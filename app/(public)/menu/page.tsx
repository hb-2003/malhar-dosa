import { Container } from "@/components/layout/Container";
import { MenuCard } from "@/components/ui/MenuCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { menuItems } from "@/lib/data";

export default function MenuPage() {
  return (
    <Container className="space-y-7 pb-12 pt-10 md:pt-12">
      <SectionTitle
        eyebrow="Our Menu"
        title="Signature Dosas And House Specials"
        subtitle="A static menu preview for now. These items are rendered from reusable dummy data."
      />
      <section className="grid gap-5 md:grid-cols-2">
        {menuItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </section>
    </Container>
  );
}
