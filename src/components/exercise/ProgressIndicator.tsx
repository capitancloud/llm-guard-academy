import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function ProgressIndicator({ currentStep, totalSteps, stepTitles }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Steps */}
        {stepTitles.map((title, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="relative flex flex-col items-center">
              <motion.div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  font-medium text-sm z-10 transition-colors duration-300
                  ${isCompleted 
                    ? "bg-primary text-primary-foreground" 
                    : isCurrent 
                      ? "bg-primary text-primary-foreground cyber-glow" 
                      : "bg-muted text-muted-foreground"
                  }
                `}
                animate={isCurrent ? { scale: [1, 1.1, 1] } : undefined}
                transition={{ duration: 0.5, repeat: isCurrent ? Infinity : 0, repeatDelay: 2 }}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
              </motion.div>
              <span className={`
                mt-2 text-xs text-center max-w-[80px] leading-tight
                ${isCurrent ? "text-primary font-medium" : "text-muted-foreground"}
              `}>
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
