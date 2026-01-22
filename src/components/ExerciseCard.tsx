import { motion } from "framer-motion";
import { Lock, ChevronRight } from "lucide-react";
import type { Exercise } from "@/data/exercises";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
  onSelect: (exercise: Exercise) => void;
}

const difficultyColors = {
  beginner: "text-terminal",
  intermediate: "text-accent",
  advanced: "text-danger",
};

const difficultyLabels = {
  beginner: "Principiante",
  intermediate: "Intermedio",
  advanced: "Avanzato",
};

export function ExerciseCard({ exercise, index, onSelect }: ExerciseCardProps) {
  const Icon = exercise.icon;
  const isAvailable = exercise.available;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={isAvailable ? { scale: 1.02, y: -4 } : undefined}
      className={`
        relative overflow-hidden rounded-lg border 
        ${isAvailable 
          ? "card-gradient cyber-border cursor-pointer hover:cyber-glow" 
          : "bg-card/50 border-border/50 cursor-not-allowed"
        }
        transition-all duration-300
      `}
      onClick={() => isAvailable && onSelect(exercise)}
    >
      {/* Locked overlay */}
      {!isAvailable && (
        <div className="absolute inset-0 locked-overlay flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Lock className="w-8 h-8" />
            <span className="text-sm font-medium">In Arrivo</span>
          </div>
        </div>
      )}

      <div className={`p-6 ${!isAvailable ? "opacity-40" : ""}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`
            p-3 rounded-lg 
            ${isAvailable ? "bg-cyber/10 text-primary" : "bg-muted text-muted-foreground"}
          `}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium ${difficultyColors[exercise.difficulty]}`}>
              {difficultyLabels[exercise.difficulty]}
            </span>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
              #{exercise.id}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {exercise.title}
        </h3>
        <p className="text-sm text-primary/80 font-medium mb-3">
          {exercise.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {exercise.description}
        </p>

        {/* Footer */}
        {isAvailable && (
          <motion.div 
            className="flex items-center gap-2 mt-4 text-primary font-medium text-sm"
            whileHover={{ x: 4 }}
          >
            <span>Inizia esercizio</span>
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        )}
      </div>

      {/* Decorative elements for available cards */}
      {isAvailable && (
        <>
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-full" />
        </>
      )}
    </motion.div>
  );
}
