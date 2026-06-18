"use client";
import { Target, Eye, Heart, BookOpen, Award, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">Discover the story, mission, and vision of Malharul Islam Academy</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our History</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed text-center mb-12">
              Malharul Islam Academy was established with a vision to provide comprehensive education integrating Islamic knowledge with modern academic disciplines. Located in Vellamchira, Thodupuzha, in the Idukki district of Kerala, the academy has grown into a respected institution serving the community through education, social welfare, and development programs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <Card className="h-full">
                <div className="flex gap-4">
                  <Target className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">To provide quality education rooted in Islamic values, fostering academic excellence, moral integrity, and community service, while empowering individuals to contribute positively to society.</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <Card className="h-full">
                <div className="flex gap-4">
                  <Eye className="w-8 h-8 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400">To be a leading institution nurturing well-rounded individuals who excel academically, embody Islamic principles, and serve as catalysts for positive change in their communities.</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Heart, title: "Faith (Iman)", desc: "Deep-rooted Islamic faith guiding all aspects of education and life." },
              { icon: BookOpen, title: "Knowledge (Ilm)", desc: "Pursuit of knowledge as a lifelong journey and religious obligation." },
              { icon: Award, title: "Excellence (Ihsan)", desc: "Striving for the highest standards in all endeavors." },
              { icon: Heart, title: "Service (Khidmah)", desc: "Serving humanity as a manifestation of faith and gratitude." },
              { icon: Target, title: "Integrity (Amanah)", desc: "Upholding honesty, trustworthiness, and moral responsibility." },
              { icon: BookOpen, title: "Community (Jama'ah)", desc: "Building a strong, united community through collective effort." },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.05}>
                <Card className="text-center p-4">
                  <v.icon className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                  <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">{v.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{v.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
