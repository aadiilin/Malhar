import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-6",
        hover && "hover:shadow-lg hover:border-primary-light dark:hover:border-dark-bg transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
