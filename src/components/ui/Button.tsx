"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = "primary", size = "md", icon, className, children, href, ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 cursor-pointer border-0";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/30",
    accent: "bg-accent text-slate-900 hover:bg-accent-dark shadow-lg shadow-accent/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-primary-light dark:hover:bg-primary-dark/20",
  };
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };

  if (href) {
    return (
      <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
        {icon}{children}
      </a>
    );
  }

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {icon}{children}
    </button>
  );
}
