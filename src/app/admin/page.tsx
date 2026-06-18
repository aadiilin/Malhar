import Link from "next/link";
import { Settings, Image, MessageSquare } from "lucide-react";
import Card from "@/components/ui/Card";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Website Content", href: "/admin/content", icon: Settings, desc: "Edit all website text and content" },
          { name: "Manage Gallery", href: "/admin/gallery", icon: Image, desc: "Upload and manage gallery images" },
          { name: "Contact Messages", href: "/admin/contact", icon: MessageSquare, desc: "View messages from contact form" },
        ].map((item) => (
          <Link key={item.name} href={item.href}>
            <Card className="h-full hover:border-primary cursor-pointer">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
