"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MAIN_NAV, RESOURCES_NAV } from "@/domain/constants";
import type { NavItem } from "@/domain/navigation";

function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={cn(
        "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
    >
      {item.label}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-1">Marketing Portfolio</h1>
        <p className="text-sm text-muted-foreground">Miruna Nedelcu</p>
      </div>

      <nav className="space-y-6">
        {/* main navigation */}
        <div className="space-y-1">
          {MAIN_NAV.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>

        {/* resources section */}
        {RESOURCES_NAV.title && (
          <div className="pt-4 border-t">
            <h2 className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {RESOURCES_NAV.title}
            </h2>
            <div className="space-y-1">
              {RESOURCES_NAV.items.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>
          </div>
        )}
      </nav>
    </aside>
  );
}
