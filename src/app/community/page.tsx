"use client";
import { GraduationCap, Star, Users, HandHeart, Heart, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const initiatives = [
  { icon: GraduationCap, title: "Educational Support", desc: "Providing scholarships, tuition assistance, and educational materials for underprivileged students to ensure no child is left behind." },
  { icon: Star, title: "Scholarship Programs", desc: "Merit-based and need-based scholarships enabling deserving students to pursue quality education regardless of financial circumstances." },
  { icon: Users, title: "Youth Development", desc: "Leadership training workshops, career guidance, mentorship programs, and recreational activities for holistic youth development." },
  { icon: HandHeart, title: "Women's Empowerment", desc: "Literacy programs, vocational training, health awareness camps, and entrepreneurship support for economic independence of women." },
  { icon: Heart, title: "Charity Projects", desc: "Food distribution drives, healthcare camps, financial assistance for families, and support for widows and orphans in the community." },
  { icon: Briefcase, title: "Welfare Programs", desc: "Comprehensive welfare initiatives including housing assistance, job placement support, and community infrastructure development." },
];

const impactStats = [
  { label: "Families Supported", value: "500+" },
  { label: "Students Scholarship", value: "200+" },
  { label: "Youth Trained", value: "300+" },
  { label: "Women Empowered", value: "150+" },
];

export default function CommunityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dark-bg to-slate-900 text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Community Development</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Serving humanity through compassion, action, and sustainable community programs</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Initiatives</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/30 dark:to-dark-bg/30 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get Involved</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Community development is a collective responsibility. Through volunteering, donations, or partnerships, your support makes a meaningful difference in the lives of those we serve.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} href="https://wa.me/919446XXXXXX">Support Our Programs</Button>
                <Button variant="outline" size="lg" href="/contact">Partner With Us</Button>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Card className="bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/20 dark:to-dark-bg/20 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Impact</h3>
                <div className="space-y-4">
                  {impactStats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl">
                      <span className="text-gray-600 dark:text-gray-400">{stat.label}</span>
                      <span className="font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
