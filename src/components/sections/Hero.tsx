"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-dark-bg via-dark-bg to-slate-900">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light0/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-accent-light text-sm font-medium mb-6 border border-white/10">
              <BookOpen className="w-4 h-4" /> Educational Excellence Since Establishment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Malharul Islam Academy
              <span className="block text-accent mt-2">Empowering Community Through Education</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              A premier institution at Vellamchira, Thodupuzha, dedicated to educational excellence, Islamic values, community development, and social welfare.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />} href="/contact">
                Enroll Now
              </Button>
              <Button variant="outline" size="lg" icon={<BookOpen className="w-5 h-5" />} href="/programs">
                Our Programs
              </Button>
              <Button variant="ghost" size="lg" icon={<Heart className="w-5 h-5" />} href="https://wa.me/919446XXXXXX">
                Support Us
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" /> Quality Education</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full" /> Islamic Values</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full" /> Community Service</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center text-white text-4xl font-bold">م</div>
                  <p className="text-white/80 text-xl font-semibold mb-2">Malharul Islam Academy</p>
                  <p className="text-primary-light/60">Vellamchira, Thodupuzha, Idukki, Kerala</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-light0/20 rounded-3xl blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
