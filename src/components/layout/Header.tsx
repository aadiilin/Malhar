"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail, MapPin, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Community", href: "/community" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="hidden md:block bg-emerald-800 text-white text-sm">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Vellamchira, Thodupuzha</span>
            <a href="mailto:info@malharulislamacademy.com" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> info@malharulislamacademy.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/919446XXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">WhatsApp</a>
            <span className="text-white/30">|</span>
            <a href="/contact" className="hover:text-amber-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-bold text-lg">
              م
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-900 dark:text-white leading-tight">Malharul Islam</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Academy</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="/contact"
              className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
              Enroll Now
            </a>
            <a href="https://wa.me/919446XXXXXX" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 bg-amber-500 text-slate-900 text-sm font-semibold rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">
              Donate
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 transition-all">
                {link.name}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <a href="/contact" onClick={() => setOpen(false)}
                className="block text-center px-4 py-3 bg-emerald-600 text-white font-semibold rounded-xl">Enroll Now</a>
              <a href="https://wa.me/919446XXXXXX" target="_blank" rel="noopener noreferrer"
                className="block text-center px-4 py-3 bg-amber-500 text-slate-900 font-semibold rounded-xl">Donate</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
