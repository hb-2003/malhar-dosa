import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dash-grid min-h-screen">
      <Sidebar />
      <main className="p-5 md:p-7">{children}</main>
    </div>
  );
}
