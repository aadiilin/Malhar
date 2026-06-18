"use client";
import { MapPin, Users, GraduationCap, Heart, HandHeart, Award } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { icon: Users, value: "500+", label: "Students Educated" },
  { icon: GraduationCap, value: "50+", label: "Qualified Teachers" },
  { icon: Heart, value: "1000+", label: "Families Served" },
  { icon: HandHeart, value: "₹50L+", label: "Community Aid" },
  { icon: Award, value: "15+", label: "Years of Service" },
];

export default function LocationSection() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-full mb-4">
              About Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Serving the Community of <span className="text-emerald-600 dark:text-emerald-400">Vellamchira, Thodupuzha</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Nestled in the picturesque hills of the Idukki district, our academy serves the Vellamchira area of Thodupuzha 
              and surrounding regions. We are deeply rooted in the local community and committed to its development.
            </p>
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Malharul Islam Academy, Vellamchira, Thodupuzha, Idukki District, Kerala - 685584</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Why Choose Us?</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Holistic education combining academic excellence with Islamic values, dedicated faculty, and strong community connections.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Card key={s.label} className={`text-center ${i === stats.length - 1 ? "col-span-2" : ""}`}>
                  <s.icon className="w-8 h-8 mx-auto mb-2 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{s.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
