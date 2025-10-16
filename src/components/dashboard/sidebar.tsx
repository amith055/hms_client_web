"use client";

import { usePathname, useRouter } from 'next/navigation';
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Users,
  Wallet,
  Megaphone,
  UtensilsCrossed,
  Building,
  BedDouble,
  CalendarCheck,
  BrainCircuit,
  LogOut,
  UserPlus,
  Mountain,
} from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '../ui/button';

const navItems = [
  { href: '/dashboard', icon: <LayoutDashboard />, label: 'Home' },
  {
    label: 'Students',
    items: [
      { href: '/dashboard/students/add', icon: <UserPlus />, label: 'Add Student' },
      { href: '/dashboard/students', icon: <Users />, label: 'Student List' },
    ],
  },
  { href: '/dashboard/fees', icon: <Wallet />, label: 'Fees' },
  { href: '/dashboard/announcements', icon: <Megaphone />, label: 'Announcements' },
  { href: '/dashboard/menu', icon: <UtensilsCrossed />, label: 'Menu' },
  { href: '/dashboard/profile', icon: <Building />, label: 'Hostel Profile' },
  { href: '/dashboard/rooms', icon: <BedDouble />, label: 'Rooms' },
  { href: '/dashboard/attendance', icon: <CalendarCheck />, label: 'Attendance' },
  { href: '/dashboard/food-prediction', icon: <BrainCircuit />, label: 'Food Prediction' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { hostel } = useAuth();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/login');
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold font-headline truncate">
                {hostel?.hostelName || 'Hostel Mitra'}
            </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) =>
            item.items ? (
              <SidebarGroup key={item.label}>
                <SidebarMenu>
                  {item.items.map((subItem) => (
                     <SidebarMenuItem key={subItem.href}>
                        <SidebarMenuButton
                            asChild
                            isActive={pathname === subItem.href}
                            onClick={() => router.push(subItem.href)}
                        >
                           <a>
                            {subItem.icon}
                            <span>{subItem.label}</span>
                           </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            ) : (
                <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        onClick={() => router.push(item.href!)}
                    >
                        <a>
                        {item.icon}
                        <span>{item.label}</span>
                        </a>
                    </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
         <Button variant="ghost" className="w-full justify-start gap-2" onClick={handleLogout}>
            <LogOut />
            <span>Logout</span>
         </Button>
      </SidebarFooter>
    </>
  );
}
