
import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  Home, 
  Settings, 
  Users,
  PlusCircle,
} from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Navigation menu items
const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart2,
  },
  {
    title: "Users",
    path: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <span className="text-xl font-bold">yashraj</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive || 
                        (item.path === "/" && location.pathname === "/")
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-bold shadow-md rounded-md"
                          : "hover:font-semibold transition-all hover:bg-slate-50 hover:shadow-sm rounded-md"
                      }
                    >
                      <item.icon size={18} className="stroke-[2.5px]" />
                      <span className="font-medium text-base">
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">
          <Button 
            className="w-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80" 
            size="sm"
            onClick={() => navigate("/create-article")}
          >
            <PlusCircle size={16} />
            <span>Create Article</span>
          </Button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
