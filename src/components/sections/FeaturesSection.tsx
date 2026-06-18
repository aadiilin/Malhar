"use client";
import { GraduationCap, Heart, HandHeart, Stethoscope, Users, Shield } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { icon: GraduationCap, title: "Quality Islamic Education", desc: "Comprehensive Islamic studies curriculum covering Quran, Hadith, Fiqh, and Arabic language with qualified instructors." },
  { icon: Heart, title: "Community Development", desc: "Holistic community programs focused on social upliftment, education, healthcare, and infrastructure development." },
  { icon: HandHeart, title: "Financial Assistance", desc: "Scholarships and financial aid programs ensuring deserving students have access to quality education regardless of economic background." },
  { icon: Stethoscope, title: "Healthcare & Social Support", desc: "Medical camps, health awareness programs, and social support services for underprivileged families in the region." },
  { icon: Users, title: "Youth Training & Skills", desc: "Vocational training, leadership development, and skill-building programs preparing youth for successful careers." },
  { icon: Shield, title: "Orphan Care & Support", desc: "Comprehensive care and educational support for orphaned children, ensuring their well-being and future prospects." },
];

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionHeading title="What We Offer" subtitle="Our Key Initiatives" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.05}>
              <Card className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 dark:from-emerald-900/30 dark:to-amber-900/30 flex items-center justify-center mb-5">
                  <f.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
