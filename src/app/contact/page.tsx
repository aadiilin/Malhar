"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const contactInfo = [
  { icon: MapPin, title: "Address", details: ["Malharul Islam Academy", "Vellamchira, Thodupuzha", "Idukki District, Kerala", "India - 685584"] },
  { icon: Phone, title: "Phone", details: ["+91 9446XXXXXX", "+91 9447XXXXXX"] },
  { icon: Mail, title: "Email", details: ["info@malharulislamacademy.com"] },
  { icon: Clock, title: "Office Hours", details: ["Mon - Fri: 8:00 AM - 4:00 PM", "Sat: 8:00 AM - 1:00 PM", "Sun: Closed"] },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      setError("");
      form.reset();
    } catch {
      setError("Failed to send. Please try again.");
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-dark-bg to-slate-900 text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Get in touch with Malharul Islam Academy</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/30 dark:to-dark-bg/30 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary dark:text-primary-light" />
                  </div>
                  <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  {item.details.map((line) => (
                    <p key={line} className="text-gray-600 dark:text-gray-400 text-sm">{line}</p>
                  ))}
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
              {submitted ? (
                <Card className="text-center py-12 bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/20 dark:to-dark-bg/20">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">Thank you. We will get back to you soon.</p>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-xl text-red-600 text-sm">{error}</div>}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="name" placeholder="Your Name *" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary/50" />
                    <input name="email" type="email" placeholder="Your Email *" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="phone" type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary/50" />
                    <input name="subject" placeholder="Subject *" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <textarea name="message" rows={5} placeholder="Your Message *" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                  <Button type="submit" variant="primary" size="lg" icon={<Send className="w-5 h-5" />}>Send Message</Button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full min-h-[400px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Malharul Islam Academy</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Vellamchira, Thodupuzha</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Idukki District, Kerala</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">India - 685584</p>
                  <a href="https://maps.google.com/?q=Vellamchira+Thodupuzha+Kerala" target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary text-sm hover:underline">
                    <MapPin className="w-4 h-4" /> View on Google Maps
                  </a>
                  <div className="mt-6">
                    <Button variant="accent" size="md" icon={<MessageCircle className="w-5 h-5" />} href="https://wa.me/919446XXXXXX">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
