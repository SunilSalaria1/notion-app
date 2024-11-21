import * as React from "react";
import { GalleryVerticalEnd, HistoryIcon, Twitter } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Bell,
  Check,
  Globe,
  Home,
  Keyboard,
  Link as ConnectedLink,
  Lock,
  Menu,
  MessageCircle,
  Paintbrush,
  Settings,
  Video,
} from "lucide-react";

// This is sample data.
const data = {
  nav: [
    { id: 1, name: "Audit logs", url: "/audit-logs", icon: HistoryIcon },
    {
      id: 2,
      name: "Notification settings",
      url: "/notification-settings",
      icon: Bell,
    },
    { id: 3, name: "Social accounts", url: "/social-accounts", icon: Twitter },
    { id: 4, name: "Profile settings", url: "/profile-settings", icon: Settings },
    { id: 5, name: "Messages & media", url: "", icon: MessageCircle },
    { id: 6, name: "Language & region", url: "", icon: Globe },
    { id: 7, name: "Accessibility", url: "", icon: Keyboard },
    { id: 8, name: "Mark as read", url: "", icon: Check },
    { id: 9, name: "Audio & video", url: "", icon: Video },
    { id: 10, name: "Connected accounts", url: "", icon: ConnectedLink },
    { id: 11, name: "Privacy & visibility", url: "", icon: Lock },
    { id: 12, name: "Advanced", url: "", icon: Settings },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">App</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.nav.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  isActive={item.name === "Messages & media"}
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
