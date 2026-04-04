import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";
import MobileHeader from "@/components/dashboard/MobileHeader";
import OAuthCallbackHandler from "@/components/dashboard/OAuthCallbackHandler";
import { SidebarProvider } from "@/components/dashboard/SidebarContext";
import { Suspense } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth0.getSession();
  if (!session) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Suspense>
          <OAuthCallbackHandler />
        </Suspense>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <MobileHeader />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
