import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "danger" | "success";
}

export function TerminalWindow({ title, children, variant = "default" }: TerminalWindowProps) {
  const borderColors = {
    default: "border-border",
    danger: "border-danger/50 danger-glow",
    success: "border-success/50 success-glow",
  };

  const headerColors = {
    default: "bg-muted",
    danger: "bg-danger/10",
    success: "bg-success/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`rounded-lg border overflow-hidden terminal-bg ${borderColors[variant]}`}
    >
      {/* Terminal header */}
      <div className={`flex items-center gap-2 px-4 py-2 ${headerColors[variant]}`}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
          <div className="w-3 h-3 rounded-full bg-terminal/80" />
        </div>
        <span className="text-xs font-mono text-muted-foreground ml-2">{title}</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </motion.div>
  );
}
