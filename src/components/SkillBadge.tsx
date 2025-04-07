
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillBadgeProps {
  name: string;
  icon?: ReactNode;
  level?: number; // 1-5 skill level
  className?: string;
}

const SkillBadge = ({ name, icon, level = 3, className }: SkillBadgeProps) => {
  const getSkillColor = (level: number) => {
    switch (level) {
      case 5: return "border-primary text-primary bg-primary/5";
      case 4: return "border-primary/80 text-primary/80 bg-primary/5";
      case 3: return "border-secondary text-secondary bg-secondary/5";
      default: return "border-gray-400 text-gray-600 bg-gray-100";
    }
  };

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-full border flex items-center gap-2 transition-all hover:scale-105",
        getSkillColor(level),
        className
      )}
    >
      {icon}
      <span className="font-medium">{name}</span>
      <div className="flex ml-2 space-x-1">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`block w-1 h-1 rounded-full ${
              i < level ? 'bg-current' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;
