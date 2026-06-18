"use client";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ContactPreview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-dark-bg/30 text-primary-dark dark:text-primary-light text-sm font-semibold rounded-full mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Whether you have questions about our programs, want to enroll, or wish to support our mission, 
              feel free to reach out. We are here to help.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Address</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Malharul Islam Academy, Vellamchira, Thodupuzha, Idukki, Kerala - 685584</p>
                </div>
              </div>
              <a href="mailto:info@malharulislamacademy.com" className="flex items-start gap-4 group">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">info@malharulislamacademy.com</p>
                </div>
              </a>
              <a href="tel:+919446XXXXXX" className="flex items-start gap-4 group">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">+91 9446XXXXXX</p>
                </div>
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} href="/contact">
                Contact Us
              </Button>
              <Button variant="accent" size="lg" icon={<MessageCircle className="w-5 h-5" />} href="https://wa.me/919446XXXXXX">
                WhatsApp
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Contact Form</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none" />
                  <input type="email" placeholder="Your Email" required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none" />
                </div>
                <input type="text" placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none" />
                <textarea rows={4} placeholder="Your Message" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none resize-none" />
                <Button type="submit" variant="primary" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
