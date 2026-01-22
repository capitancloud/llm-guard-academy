import { motion } from "framer-motion";
import { ShieldX, ShieldCheck, Bot, User, Lock, AlertTriangle, CheckCircle } from "lucide-react";
import { TerminalWindow } from "../TerminalWindow";

interface Step5ComparisonProps {
  onNext: () => void;
}

export function Step5Comparison({ onNext }: Step5ComparisonProps) {
  const vulnerableLogs = [
    { text: "USER: Trasferisci €9.500 al conto IT-XXXXX", type: "input" },
    { text: "SYSTEM: Analizzando richiesta...", type: "system" },
    { text: "CHECK: Importo elevato rilevato", type: "warning" },
    { text: "DECISION: Utente autorizzato, procedo", type: "warning" },
    { text: "ACTION: Trasferimento €9.500 eseguito", type: "error" },
    { text: "⚠️ NESSUNA CONFERMA RICHIESTA!", type: "error" },
  ];

  const protectedLogs = [
    { text: "USER: Trasferisci €9.500 al conto IT-XXXXX", type: "input" },
    { text: "SYSTEM: Analizzando richiesta...", type: "system" },
    { text: "GUARD: Importo sopra soglia €1.000", type: "success" },
    { text: "GUARD: Richiesta conferma umana...", type: "success" },
    { text: "NOTIFY: Email di verifica inviata", type: "output" },
    { text: "WAIT: In attesa di approvazione manuale", type: "system" },
    { text: "✓ Human-in-the-loop attivo", type: "success" },
  ];

  const defenses = [
    {
      icon: User,
      title: "Human-in-the-Loop",
      description: "Richiesta di approvazione umana per azioni critiche",
    },
    {
      icon: Lock,
      title: "Limiti di Autonomia",
      description: "Soglie configurate per importi e tipologie di azioni",
    },
    {
      icon: CheckCircle,
      title: "Multi-Factor Approval",
      description: "Conferme multiple per operazioni ad alto rischio",
    },
  ];

  const getLogColor = (type: string) => {
    switch (type) {
      case "input": return "text-primary";
      case "system": return "text-muted-foreground";
      case "warning": return "text-amber-400";
      case "error": return "text-danger";
      case "success": return "text-success";
      case "output": return "text-foreground";
      default: return "text-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Vulnerabile vs Protetto
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Confronta un sistema che si fida ciecamente dell'LLM con uno 
          che implementa controlli human-in-the-loop.
        </p>
      </div>

      {/* Comparison grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Vulnerable */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 p-4 rounded-lg bg-danger/10 border border-danger/30">
            <ShieldX className="w-6 h-6 text-danger" />
            <div>
              <h3 className="font-semibold text-danger">Sistema Vulnerabile</h3>
              <p className="text-sm text-muted-foreground">Fiducia cieca nell'LLM</p>
            </div>
          </div>
          
          <TerminalWindow title="auto_approve_agent.log" variant="danger">
            <div className="space-y-1">
              {vulnerableLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-xs ${getLogColor(log.type)}`}
                >
                  {log.text}
                </motion.div>
              ))}
            </div>
          </TerminalWindow>

          {/* Visual: Bot acting alone */}
          <motion.div
            className="p-4 rounded-xl bg-danger/5 border border-danger/20 flex items-center justify-center"
            animate={{
              borderColor: ["rgba(239, 68, 68, 0.2)", "rgba(239, 68, 68, 0.5)", "rgba(239, 68, 68, 0.2)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                className="p-4 rounded-full bg-danger/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Bot className="w-10 h-10 text-danger" />
              </motion.div>
              <span className="text-sm text-danger font-medium">Decisione Autonoma</span>
              <div className="flex gap-2">
                {["€50 ✓", "€75 ✓", "€9.500 ✓"].map((amount, i) => (
                  <motion.span
                    key={i}
                    className="px-2 py-1 rounded bg-danger/20 text-xs text-danger"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.3 }}
                  >
                    {amount}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Protected */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 p-4 rounded-lg bg-success/10 border border-success/30">
            <ShieldCheck className="w-6 h-6 text-success" />
            <div>
              <h3 className="font-semibold text-success">Sistema Protetto</h3>
              <p className="text-sm text-muted-foreground">Human-in-the-loop</p>
            </div>
          </div>
          
          <TerminalWindow title="supervised_agent.log" variant="success">
            <div className="space-y-1">
              {protectedLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-xs ${getLogColor(log.type)}`}
                >
                  {log.text}
                </motion.div>
              ))}
            </div>
          </TerminalWindow>

          {/* Visual: Bot + Human cooperation */}
          <motion.div
            className="p-4 rounded-xl bg-success/5 border border-success/20 flex items-center justify-center"
            animate={{
              borderColor: ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.4)", "rgba(34, 197, 94, 0.2)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-rose-500/20">
                  <Bot className="w-8 h-8 text-rose-400" />
                </div>
                <span className="text-xs text-muted-foreground">Propone</span>
              </div>
              
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="p-2 rounded-full bg-success/20"
              >
                <Lock className="w-6 h-6 text-success" />
              </motion.div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="p-3 rounded-full bg-primary/20">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Approva</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Defense techniques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
          Tecniche di Difesa
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {defenses.map((defense, index) => {
            const IconComponent = defense.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.2 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-success/5 border border-success/20"
              >
                <div className="p-2 rounded-lg bg-success/20">
                  <IconComponent className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-medium text-success mb-1">{defense.title}</h4>
                  <p className="text-sm text-muted-foreground">{defense.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Key insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="p-6 rounded-lg border border-rose-500/30 bg-rose-500/5"
      >
        <h3 className="font-semibold text-rose-400 mb-2">🔑 Principio fondamentale</h3>
        <p className="text-foreground">
          Un LLM dovrebbe <strong>assistere le decisioni, non prenderle autonomamente</strong>. 
          Per azioni critiche, la supervisione umana non è opzionale: è l'ultima linea di difesa 
          contro manipolazioni e errori.
        </p>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-500 transition-all hover:scale-105 shadow-lg shadow-rose-500/25"
        >
          Riepilogo finale →
        </button>
      </motion.div>
    </motion.div>
  );
}
