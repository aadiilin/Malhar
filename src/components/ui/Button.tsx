"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "outline" | "ghost";
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
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30",
    gold: "bg-amber-500 text-slate-900 hover:bg-amber-600 shadow-lg shadow-amber-500/20",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white",
    ghost: "text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
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
