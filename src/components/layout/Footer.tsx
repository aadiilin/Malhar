import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Globe, ExternalLink, Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-xl">م</div>
              <div>
                <p className="font-bold text-lg leading-tight">Malharul Islam</p>
                <p className="text-emerald-300 text-sm">Academy</p>
              </div>
            </div>
            <p className="text-emerald-100/70 text-sm leading-relaxed mb-6">
              Empowering the community through quality education, Islamic values, and social development since our establishment in Vellamchira, Thodupuzha.
            </p>
            <div className="flex gap-3">
              {[
                { icon: MessageCircle, href: "https://wa.me/919446XXXXXX", label: "WhatsApp" },
                { icon: Globe, href: "https://facebook.com/malharulislam", label: "Facebook" },
                { icon: ExternalLink, href: "https://instagram.com/malharulislam", label: "Instagram" },
                { icon: Play, href: "https://youtube.com/@malharulislam", label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Programs", href: "/programs" },
                { name: "Community", href: "/community" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-emerald-100/70 hover:text-amber-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-3">
              {[
                "Qur'an Academy",
                "Islamic Studies",
                "Community School",
                "Women's Empowerment",
                "Skill Development",
                "Charity & Relief",
              ].map((p) => (
                <li key={p} className="text-emerald-100/70 text-sm">{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-emerald-100/70 text-sm">Malharul Islam Academy, Vellamchira, Thodupuzha, Idukki District, Kerala - 685584</span>
              </li>
              <li>
                <a href="mailto:info@malharulislamacademy.com" className="flex items-center gap-3 text-emerald-100/70 hover:text-amber-400 transition-colors text-sm">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  info@malharulislamacademy.com
                </a>
              </li>
              <li>
                <a href="tel:+919446XXXXXX" className="flex items-center gap-3 text-emerald-100/70 hover:text-amber-400 transition-colors text-sm">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  +91 9446XXXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-emerald-100/50 text-sm">© {new Date().getFullYear()} Malharul Islam Academy. All rights reserved.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-emerald-100/50 hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-emerald-100/50 hover:text-amber-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
