"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-dark-bg/30 text-primary-dark dark:text-primary-light text-sm font-semibold rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
}
