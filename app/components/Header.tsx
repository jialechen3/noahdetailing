import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "/noahdetailing.png";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Noah's Mobile Detailing"
            className="h-10 w-auto sm:h-12"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-900">
              NOAH'S MOBILE
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Detailing
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
            <a href="tel:5551234567">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700">
              <a href="tel:5551234567">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
