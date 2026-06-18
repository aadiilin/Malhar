"use client";
import { BookOpen, Heart, Users, Globe, Briefcase, HandHeart, Clock, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

const programs = [
  {
    icon: BookOpen,
    title: "Qur'an Academy",
    desc: "Structured Quran learning programs from basic recitation to advanced Tajweed, Tafsir, and Hifz (memorization). Our qualified instructors provide personalized attention to students of all ages.",
    duration: "3-6 Years",
    level: "All Levels",
  },
  {
    icon: Globe,
    title: "Islamic Studies Institute",
    desc: "Comprehensive Islamic education covering Aqeedah, Fiqh, Hadith, Seerah, and Arabic language. Our curriculum is designed to provide a deep understanding of Islamic teachings.",
    duration: "2-4 Years",
    level: "Certificate & Diploma",
  },
  {
    icon: Users,
    title: "Community School",
    desc: "Quality academic education following state curriculum with integrated Islamic values. We provide a nurturing environment for holistic child development.",
    duration: "10+2",
    level: "Primary to Higher Secondary",
  },
  {
    icon: Heart,
    title: "Women's Empowerment Program",
    desc: "Tailored programs for women including literacy classes, vocational training, health awareness, and entrepreneurial skill development. Empowering women to become self-reliant.",
    duration: "6-12 Months",
    level: "Certificate",
  },
  {
    icon: Briefcase,
    title: "Youth Skill Development",
    desc: "Career-oriented training programs, digital literacy, communication skills, leadership development, and professional certification courses for youth.",
    duration: "6-12 Months",
    level: "Certificate",
  },
  {
    icon: HandHeart,
    title: "Charity & Relief Services",
    desc: "Food distribution programs, financial assistance for needy families, medical support camps, emergency relief, and ongoing welfare initiatives for the underprivileged.",
    duration: "Ongoing",
    level: "Community Service",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-bg to-slate-900 text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Comprehensive educational and community development programs</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <Card className="h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/30 dark:to-dark-bg/30 flex items-center justify-center mb-5">
                    <p.icon className="w-7 h-7 text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                      <Clock className="w-3 h-3 text-primary" /> {p.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full">
                      <Award className="w-3 h-3 text-accent-dark" /> {p.level}
                    </span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
