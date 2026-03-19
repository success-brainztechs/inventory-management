import {
  LayoutDashboard, Package, Users, UserCheck, MapPin, ArrowRightLeft,
  Warehouse, FileText, CreditCard, BookOpen, BarChart3, Settings, ShoppingCart, Calculator, UsersRound
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink } from "./NavLink";

const mainItems = [
  { title: "Dashboard", url: "/dashboard/main", icon: LayoutDashboard },
  { title: "Products", url: "/dashboard/main/products", icon: Package },
  { title: "Vendors", url: "/dashboard/main/vendors", icon: Users },
  { title: "Customers", url: "/dashboard/main/customers", icon: UserCheck },
  { title: "Locations", url: "/dashboard/main/locations", icon: MapPin },
];

const operationItems = [
  { title: "Purchases", url: "/dashboard/operations/purchases", icon: ShoppingCart },
  { title: "Daily Transactions", url: "/dashboard/operations/daily-transactions", icon: ArrowRightLeft },
  { title: "Inventory", url: "/dashboard/operations/inventory", icon: Warehouse },
  { title: "Invoices", url: "/dashboard/operations/invoices", icon: FileText },
  { title: "Payments", url: "/dashboard/operations/payments", icon: CreditCard },
];

const reportItems = [
  { title: "Reports", url: "/dashboard/reports", icon: BarChart3 },
  { title: "Ledger", url: "/dashboard/reports/ledger", icon: BookOpen },
  { title: "Finance", url: "/dashboard/reports/finance", icon: Calculator },
];

const SettingItems = [
  { title: "Settings", url: "/dashboard/users", icon: Settings },
]

const UserItems = [
   { title: "Users", url: "/dashboard/settings", icon: UsersRound },
]

function NavSection({ label, items }: { label: string; items: typeof mainItems }) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs uppercase tracking-wider">
        {!collapsed && label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  end={item.url === "/"}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <div className="flex items-center gap-2 px-4 py-5 border-b border-sidebar-border">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold shrink-0">
          IV
        </div>
        {!collapsed && (
          <div>
            <h1 className="text-sm font-semibold text-sidebar-accent-foreground">InvenTrack</h1>
            <p className="text-[10px] text-sidebar-foreground/50">Inventory & Billing</p>
          </div>
        )}
      </div>
      <SidebarContent className="pt-2">
        <NavSection label="Main" items={mainItems} />
        <NavSection label="Operations" items={operationItems} />
        <NavSection label="Reports" items={reportItems} />
        <NavSection label="Users" items={UserItems}/>
        <NavSection label="Settings" items={SettingItems}/>
      </SidebarContent>
    </Sidebar>
  );
}
