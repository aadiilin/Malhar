"use client";
import { useState } from "react";
import { ChevronDown, GraduationCap, HandHeart, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const items = [
  {
    icon: GraduationCap,
    title: "Enroll as Student",
    content: "Join our academy and benefit from quality education that combines academic excellence with Islamic values. We offer programs for all ages, from Quran studies to professional skill development. Admissions are open throughout the year.",
    cta: { label: "Enroll Now", href: "/contact" },
  },
  {
    icon: HandHeart,
    title: "Support Through Donation",
    content: "Your generous contributions help us provide education to deserving students, support needy families, and run community development programs. Every donation, big or small, creates lasting impact in our community.",
    cta: { label: "Donate Now", href: "https://wa.me/919446XXXXXX" },
  },
  {
    icon: Users,
    title: "Volunteer With Us",
    content: "Share your time, skills, and knowledge to make a difference. Volunteers are welcome in our teaching programs, community initiatives, event management, and welfare activities. Join us in serving humanity.",
    cta: { label: "Get Involved", href: "/contact" },
  },
];

export default function GetInvolved() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom max-w-4xl">
        <SectionHeading title="How to Get Involved" subtitle="Join Our Mission" />
        <div className="space-y-4">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/30 dark:to-dark-bg/30 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                    <div className="pt-4">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.content}</p>
                      <Button variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />} href={item.cta.href}>
                        {item.cta.label}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
