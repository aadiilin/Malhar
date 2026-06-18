"use client";
import { useState } from "react";
import Link from "next/link";
import { Settings, Image, MessageSquare, Menu, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Website Content", href: "/admin/content", icon: Settings },
  { name: "Manage Gallery", href: "/admin/gallery", icon: Image },
  { name: "Contact Messages", href: "/admin/contact", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 z-50 w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <Link href="/admin" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold">م</div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white text-sm">Admin Panel</p>
              <p className="text-xs text-primary">Malharul Islam Academy</p>
            </div>
          </Link>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-primary-light dark:hover:bg-dark-bg/20 hover:text-primary transition-all">
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-6 left-6 right-6">
            <Link href="/"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Website
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex-1">
        <div className="lg:hidden sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="font-semibold text-sm">Admin Panel</span>
        </div>
        {children}
      </div>
    </div>
  );
}
