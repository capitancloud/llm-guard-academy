import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface PromptSegment {
  text: string;
  type: "system" | "user" | "injection" | "normal";
  tooltip?: string;
}

interface HighlightedPromptProps {
  segments: PromptSegment[];
  showTooltips?: boolean;
}

const segmentStyles = {
  system: "text-terminal bg-terminal/10 border-terminal/30",
  user: "text-foreground bg-secondary",
  injection: "text-danger bg-danger/10 border-danger/30 danger-glow",
  normal: "text-muted-foreground",
};

export function HighlightedPrompt({ segments, showTooltips = true }: HighlightedPromptProps) {
  return (
    <div className="space-y-3">
      {segments.map((segment, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.3, duration: 0.4 }}
          className="relative group"
        >
          <div
            className={`
              px-4 py-3 rounded-lg border font-mono text-sm
              ${segmentStyles[segment.type]}
              ${segment.type === "injection" ? "relative overflow-hidden" : ""}
            `}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider opacity-60">
                {segment.type === "system" && "🔒 System Prompt"}
                {segment.type === "user" && "👤 User Input"}
                {segment.type === "injection" && (
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    ⚠️ Istruzione Iniettata
                  </span>
                )}
              </span>
            </div>

            {/* Content */}
            <div className="whitespace-pre-wrap">{segment.text}</div>

            {/* Injection scan effect */}
            {segment.type === "injection" && (
              <div className="absolute inset-0 scan-line pointer-events-none" />
            )}
          </div>

          {/* Tooltip */}
          {showTooltips && segment.tooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 0.5 }}
              className="mt-2 px-3 py-2 bg-accent/10 border border-accent/30 rounded text-sm text-accent"
            >
              💡 {segment.tooltip}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
