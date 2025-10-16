import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { ProtectedRoute } from '@/components/auth/protected-route';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <Sidebar>
          <DashboardSidebar />
        </Sidebar>
        <SidebarInset>
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  );
}
