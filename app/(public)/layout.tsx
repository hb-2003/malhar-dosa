import { ReactNode } from "react";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PublicNav } from "@/components/layout/PublicNav";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PublicNav />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
