"use client";
import { BookOpen, Heart, Users, Globe, Briefcase, HandHeart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "Qur'an Academy", desc: "Structured Quran learning programs from basic recitation to advanced Tajweed, Tafsir, and Hifz (memorization) for all ages." },
  { icon: Globe, title: "Islamic Studies Institute", desc: "Comprehensive Islamic education covering Aqeedah, Fiqh, Hadith, Seerah, and Arabic language with qualified scholars." },
  { icon: Users, title: "Community School", desc: "Quality academic education following state curriculum with integrated Islamic values, character development, and extracurricular activities." },
  { icon: Heart, title: "Women's Empowerment", desc: "Tailored programs for women including literacy classes, vocational training, health awareness, and entrepreneurial skill development." },
  { icon: Briefcase, title: "Youth Skill Development", desc: "Career-oriented training programs, digital literacy, communication skills, and leadership development for the youth." },
  { icon: HandHeart, title: "Charity & Relief Services", desc: "Food distribution, financial assistance, medical support, and emergency relief for families and individuals in need." },
];

export default function ProgramsPreview() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading title="Our Programs" subtitle="Institutions & Initiatives" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.05}>
              <Card className="h-full group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-amber-100 dark:from-emerald-900/30 dark:to-amber-900/30 flex items-center justify-center mb-5">
                  <p.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} href="/programs">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
