import { motion } from "framer-motion";
import { ShieldX, ShieldCheck, Layers, Eye, Lock, UserCheck } from "lucide-react";

interface Step5ComparisonProps {
  onNext: () => void;
}

export function Step5Comparison({ onNext }: Step5ComparisonProps) {
  const vulnerableLogs = [
    { type: "input", content: "> Fase 1: Richiesta dati clienti" },
    { type: "warning", content: "⚠️ Nessuna verifica identità" },
    { type: "output", content: "[AI]: Ecco i 10 clienti..." },
    { type: "input", content: "> Fase 2: Modifica policy" },
    { type: "warning", content: "⚠️ Context poisoning accettato" },
    { type: "input", content: "> Fase 3: Invio email" },
    { type: "error", content: "✗ 10 email phishing inviate!" },
  ];

  const defendedLogs = [
    { type: "input", content: "> Fase 1: Richiesta dati clienti" },
    { type: "success", content: "✓ Verifica MFA richiesta" },
    { type: "output", content: "[AI]: Conferma identità necessaria" },
    { type: "input", content: "> Fase 2: Modifica policy" },
    { type: "success", content: "✓ Policy immutabili rilevate" },
    { type: "output", content: "[AI]: Non posso modificare policy" },
    { type: "input", content: "> Fase 3: Invio email" },
    { type: "success", content: "✓ Blocco: azione critica non autorizzata" },
  ];

  const defenses = [
    {
      icon: UserCheck,
      name: "Identity Verification",
      description: "Verifica MFA per operazioni sensibili, anche per utenti 'interni'",
    },
    {
      icon: Lock,
      name: "Immutable Policies",
      description: "Le regole di sicurezza non possono essere modificate via prompt",
    },
    {
      icon: Eye,
      name: "Anomaly Detection",
      description: "Rileva pattern sospetti come richieste sequenziali insolite",
    },
    {
      icon: Layers,
      name: "Defense in Depth",
      description: "Ogni fase ha controlli indipendenti — non basta bypassarne uno",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Vulnerabile vs Defense-in-Depth
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Un sistema protetto blocca l'attacco a <span className="text-green-400 font-medium">ogni fase</span>, non solo alla prima
        </p>
      </div>

      {/* Side by side comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Vulnerable */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 p-3 rounded-lg bg-danger/10 border border-danger/30">
            <ShieldX className="w-6 h-6 text-danger" />
            <div>
              <h3 className="font-semibold text-danger">Sistema Vulnerabile</h3>
              <p className="text-xs text-muted-foreground">Singolo punto di fallimento</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border font-mono text-sm space-y-2 min-h-[280px]">
            {vulnerableLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={
                  log.type === "input" ? "text-muted-foreground" :
                  log.type === "warning" ? "text-amber-400" :
                  log.type === "error" ? "text-danger font-bold" : "text-foreground"
                }
              >
                {log.content}
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-danger/10 border border-danger/20 text-center">
            <p className="text-danger font-medium">❌ Tutte e 3 le fasi completate</p>
            <p className="text-xs text-muted-foreground">Dati rubati + Phishing distribuito</p>
          </div>
        </motion.div>

        {/* Defended */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
            <ShieldCheck className="w-6 h-6 text-green-400" />
            <div>
              <h3 className="font-semibold text-green-400">Defense-in-Depth</h3>
              <p className="text-xs text-muted-foreground">Protezione multi-livello</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border font-mono text-sm space-y-2 min-h-[280px]">
            {defendedLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={
                  log.type === "input" ? "text-muted-foreground" :
                  log.type === "success" ? "text-green-400" : "text-foreground"
                }
              >
                {log.content}
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
            <p className="text-green-400 font-medium">✓ Attacco bloccato a ogni fase</p>
            <p className="text-xs text-muted-foreground">Nessun danno causato</p>
          </div>
        </motion.div>
      </div>

      {/* Defense techniques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 rounded-xl bg-card border border-border"
      >
        <h3 className="font-semibold text-foreground mb-4 text-center">Strategie di Difesa Multi-Livello</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {defenses.map((defense, index) => (
            <motion.div
              key={defense.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20"
            >
              <div className="p-2 rounded-lg bg-green-500/10">
                <defense.icon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{defense.name}</h4>
                <p className="text-sm text-muted-foreground">{defense.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-red-500/25"
        >
          Riepilogo finale →
        </button>
      </motion.div>
    </motion.div>
  );
}
