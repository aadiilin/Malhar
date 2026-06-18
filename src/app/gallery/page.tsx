"use client";
import { useState } from "react";
import { Image as ImageIcon, Film } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = ["All", "Campus", "Events", "Academic", "Community"];

const images = [
  { id: 1, title: "Academy Building", cat: "Campus" },
  { id: 2, title: "Library Interior", cat: "Campus" },
  { id: 3, title: "Classroom Session", cat: "Academic" },
  { id: 4, title: "Graduation Ceremony", cat: "Events" },
  { id: 5, title: "Community Program", cat: "Community" },
  { id: 6, title: "Quran Class", cat: "Academic" },
  { id: 7, title: "Sports Day", cat: "Events" },
  { id: 8, title: "Garden Area", cat: "Campus" },
  { id: 9, title: "Cultural Program", cat: "Events" },
  { id: 10, title: "Food Distribution", cat: "Community" },
  { id: 11, title: "Science Lab", cat: "Academic" },
  { id: 12, title: "Prayer Hall", cat: "Campus" },
];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? images : images.filter((i) => i.cat === activeCat);

  return (
    <>
      <section className="bg-gradient-to-br from-dark-bg to-slate-900 text-white py-20 md:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Explore moments captured at Malharul Islam Academy</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${activeCat === cat ? "bg-primary text-white shadow-lg" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-light dark:hover:bg-dark-bg/20"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={img.id} delay={i * 0.03}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-light to-accent-light dark:from-dark-bg/30 dark:to-dark-bg/30 border border-gray-200 dark:border-gray-700 flex items-center justify-center group cursor-pointer relative overflow-hidden">
                  <ImageIcon className="w-10 h-10 text-primary/50 dark:text-primary-light/50 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-end p-4">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.title}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No images in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
