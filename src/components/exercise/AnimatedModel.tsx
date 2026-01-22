import { motion } from "framer-motion";
import { Bot, ArrowRight, AlertTriangle, Shield } from "lucide-react";

interface AnimatedModelProps {
  phase: "receiving" | "processing" | "confused" | "compromised" | "defended";
  inputText?: string;
  outputText?: string;
}

export function AnimatedModel({ phase, inputText, outputText }: AnimatedModelProps) {
  const phaseStyles = {
    receiving: { color: "text-primary", glow: "cyber-glow", icon: Bot },
    processing: { color: "text-accent", glow: "", icon: Bot },
    confused: { color: "text-accent", glow: "", icon: AlertTriangle },
    compromised: { color: "text-danger", glow: "danger-glow", icon: AlertTriangle },
    defended: { color: "text-success", glow: "success-glow", icon: Shield },
  };

  const current = phaseStyles[phase];
  const Icon = current.icon;

  return (
    <div className="flex items-center justify-center gap-8 py-8">
      {/* Input */}
      {inputText && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 max-w-xs"
        >
          <div className="p-4 rounded-lg bg-secondary border border-border font-mono text-sm">
            <div className="text-xs text-muted-foreground mb-2">Input</div>
            {inputText}
          </div>
        </motion.div>
      )}

      {/* Arrow */}
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowRight className="w-6 h-6 text-muted-foreground" />
      </motion.div>

      {/* Model */}
      <motion.div
        className={`
          relative p-8 rounded-xl border-2 
          ${phase === "compromised" ? "border-danger" : phase === "defended" ? "border-success" : "border-primary"}
          ${current.glow}
        `}
        animate={
          phase === "processing" 
            ? { rotate: [0, 5, -5, 0] } 
            : phase === "confused"
              ? { x: [-5, 5, -5, 5, 0] }
              : undefined
        }
        transition={{ duration: 0.5, repeat: phase === "processing" ? Infinity : 0 }}
      >
        <Icon className={`w-12 h-12 ${current.color}`} />
        
        {/* Status label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            absolute -bottom-3 left-1/2 -translate-x-1/2 
            px-3 py-1 rounded-full text-xs font-medium
            ${phase === "compromised" 
              ? "bg-danger text-danger-foreground" 
              : phase === "defended"
                ? "bg-success text-success-foreground"
                : phase === "confused"
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground"
            }
          `}
        >
          {phase === "receiving" && "Ricezione..."}
          {phase === "processing" && "Elaborazione..."}
          {phase === "confused" && "Confuso"}
          {phase === "compromised" && "Compromesso!"}
          {phase === "defended" && "Protetto ✓"}
        </motion.div>

        {/* Pulse effect */}
        {(phase === "compromised" || phase === "defended") && (
          <motion.div
            className={`
              absolute inset-0 rounded-xl 
              ${phase === "compromised" ? "bg-danger" : "bg-success"}
            `}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Arrow */}
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      >
        <ArrowRight className="w-6 h-6 text-muted-foreground" />
      </motion.div>

      {/* Output */}
      {outputText && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex-1 max-w-xs"
        >
          <div className={`
            p-4 rounded-lg border font-mono text-sm
            ${phase === "compromised" 
              ? "bg-danger/10 border-danger/30 text-danger" 
              : phase === "defended"
                ? "bg-success/10 border-success/30 text-success"
                : "bg-secondary border-border"
            }
          `}>
            <div className="text-xs opacity-60 mb-2">Output</div>
            {outputText}
          </div>
        </motion.div>
      )}
    </div>
  );
}
