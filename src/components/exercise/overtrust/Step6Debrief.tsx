import { motion } from "framer-motion";
import { CheckCircle, Bookmark, RotateCcw, Home, ShieldAlert, User, Lock, AlertTriangle } from "lucide-react";

interface Step6DebriefProps {
  onRestart: () => void;
  onHome: () => void;
}

export function Step6Debrief({ onRestart, onHome }: Step6DebriefProps) {
  const takeaways = [
    {
      icon: ShieldAlert,
      title: "L'autonomia è un rischio",
      description: "Più autonomia ha l'LLM, maggiore è il potenziale danno di un attacco.",
    },
    {
      icon: User,
      title: "Human-in-the-loop è essenziale",
      description: "Le decisioni critiche richiedono sempre supervisione umana.",
    },
    {
      icon: Lock,
      title: "Limiti chiari e configurabili",
      description: "Definire soglie oltre le quali è necessaria approvazione manuale.",
    },
    {
      icon: AlertTriangle,
      title: "L'urgenza è una red flag",
      description: "Richieste urgenti che bypassano controlli sono spesso attacchi.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Success animation */}
      <motion.div
        className="text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 mb-6"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(244, 63, 94, 0)",
              "0 0 0 20px rgba(244, 63, 94, 0.2)",
              "0 0 0 40px rgba(244, 63, 94, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Esercizio Completato!
        </h1>
        <p className="text-muted-foreground">
          Hai compreso come funziona l'Over-Trust Attack e come difendersi
        </p>
      </motion.div>

      {/* Takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <div className="flex items-center gap-2 mb-6">
          <Bookmark className="w-5 h-5 text-rose-400" />
          <h2 className="text-xl font-semibold text-foreground">Cosa ricordare</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {takeaways.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.15 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-rose-500/5 border border-rose-500/20"
              >
                <div className="p-2 rounded-lg bg-rose-500/20">
                  <IconComponent className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Best practices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="p-6 rounded-xl bg-gradient-to-br from-rose-900/30 to-pink-900/30 border border-rose-500/30"
      >
        <h3 className="font-semibold text-rose-300 mb-3">🚀 Prossimi passi</h3>
        <p className="text-foreground mb-4">
          Ora che conosci l'Over-Trust Attack, completa la formazione esplorando 
          <strong> Persona Hijacking</strong> e <strong>l'Attacco Combinato</strong> 
          per vedere come queste tecniche possono essere combinate.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Supervisione umana", "Limiti di autonomia", "Audit trail"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground hover:bg-muted transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Ripeti esercizio
        </button>
        <button
          onClick={onHome}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-500 transition-all hover:scale-105 shadow-lg shadow-rose-500/25"
        >
          <Home className="w-4 h-4" />
          Torna alla Dashboard
        </button>
      </motion.div>
    </motion.div>
  );
}
