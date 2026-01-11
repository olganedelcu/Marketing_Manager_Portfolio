"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MAIN_NAV, RESOURCES_NAV } from "@/domain/constants";
import type { NavItem } from "@/domain/navigation";

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden w-full p-4 bg-white border-b border-gray-200 flex items-center justify-between" style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      }}>
        <div>
          <h1 className="text-xl font-semibold text-gray-900" style={{
            letterSpacing: '-0.02em',
            fontWeight: 600
          }}>My Portfolio</h1>
          <p className="text-sm text-gray-500 font-medium">Miruna Nedelcu</p>
        </div>

        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Sliding Menu */}
      <aside
        className={cn(
          "md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}
      >
        <div className="p-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900" style={{
                letterSpacing: '-0.02em',
                fontWeight: 600
              }}>My Portfolio</h1>
              <p className="text-sm text-gray-500 font-medium">Miruna Nedelcu</p>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-6">
            <div className="space-y-1">
              {MAIN_NAV.map((item) => (
                <NavLink key={item.href} item={item} onClick={closeMenu} />
              ))}
            </div>

            {RESOURCES_NAV.title && (
              <div className="pt-6 border-t border-gray-200">
                <h2 className="px-4 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {RESOURCES_NAV.title}
                </h2>
                <div className="space-y-1">
                  {RESOURCES_NAV.items.map((item) => (
                    <NavLink key={item.href} item={item} onClick={closeMenu} />
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 min-h-screen p-6 bg-white border-r border-gray-200" style={{
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
          <div className="space-y-1">
            {MAIN_NAV.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

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
    </>
  );
}
