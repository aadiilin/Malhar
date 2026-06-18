"use client";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Student, Islamic Studies",
    content: "Malharul Islam Academy has transformed my understanding of Islam and my connection to the Quran. The teachers are knowledgeable and caring. I'm grateful for this wonderful institution.",
    rating: 5,
  },
  {
    name: "Fathima Nazeer",
    role: "Community Member",
    content: "The community development programs have been a blessing for our family. From educational support to healthcare camps, the academy truly cares about the well-being of the community.",
    rating: 5,
  },
  {
    name: "Mohammed Shafi",
    role: "Parent",
    content: "I chose Malharul Islam Academy for my children's education because of the balanced approach between Islamic studies and academics. It's the best decision I've made for their future.",
    rating: 5,
  },
  {
    name: "Aisha Fathima",
    role: "Women's Program Participant",
    content: "The women's empowerment programs gave me the skills and confidence to start my own small business. I'm eternally grateful to the academy for believing in me.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-padding bg-dark-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="relative z-10 container-custom">
        <AnimatedSection>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-accent-light text-sm font-semibold rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What People Say About Us</h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection key={current}>
            <div className="text-center">
              <Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-50" />
              <p className="text-xl md:text-2xl leading-relaxed text-white/80 mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-bold text-lg">{testimonials[current].name}</p>
              <p className="text-primary-light/70 text-sm">{testimonials[current].role}</p>
            </div>
          </AnimatedSection>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={() => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)}
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-accent w-8" : "bg-white/30"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)}
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
