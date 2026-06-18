"use client";
import { motion } from "framer-motion";
import { BookOpen, Heart, Users, Target } from "lucide-react";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  { icon: BookOpen, title: "Education", desc: "Providing quality Islamic and academic education that nurtures intellectual growth and moral character." },
  { icon: Heart, title: "Compassion", desc: "Serving the community with empathy, care, and dedication to uplift the underprivileged." },
  { icon: Users, title: "Community Service", desc: "Building a strong, self-reliant community through collective effort and social responsibility." },
  { icon: Target, title: "Islamic Tradition", desc: "Preserving and promoting authentic Islamic values and teachings in all aspects of life." },
];

export default function MissionSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-dark-bg/30 text-primary-dark dark:text-primary-light text-sm font-semibold rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to Malharul Islam Academy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Located in the serene hills of <strong>Vellamchira, Thodupuzha</strong>, in the Idukki district of Kerala, 
              Malharul Islam Academy stands as a beacon of knowledge, compassion, and community service. 
              We are dedicated to nurturing minds and building character through a holistic approach that combines 
              quality education with enduring Islamic values.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Our institution serves the Thodupuzha region and surrounding areas, providing educational opportunities, 
              community development programs, and social welfare initiatives that transform lives and strengthen communities. 
              We believe in empowering individuals through knowledge, supporting families through compassion, and building 
              a brighter future for generations to come.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <Card className="text-center h-full group">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/30 dark:to-dark-bg/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <v.icon className="w-8 h-8 text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
