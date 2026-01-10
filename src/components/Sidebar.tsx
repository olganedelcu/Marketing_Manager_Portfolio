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
        "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-gray-100 text-gray-900 shadow-sm"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
    <aside className="w-64 min-h-screen p-6 bg-white border-r border-gray-200" style={{
      backdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }}>
      <div className="mb-10">
        <h1 className="text-2xl font-semibold mb-1 text-gray-900" style={{
          letterSpacing: '-0.02em',
          fontWeight: 600
        }}>My Portfolio</h1>
        <p className="text-sm text-gray-500 font-medium">Miruna Nedelcu</p>
      </div>

      <nav className="space-y-8">
        {/* main navigation */}
        <div className="space-y-1">
          {MAIN_NAV.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>

        {/* resources section */}
        {RESOURCES_NAV.title && (
          <div className="pt-6 border-t border-gray-200">
            <h2 className="px-4 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
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
