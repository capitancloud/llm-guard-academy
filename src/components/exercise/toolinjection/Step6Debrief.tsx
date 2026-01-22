import { motion } from "framer-motion";
import { CheckCircle, Bookmark, RotateCcw, Home, Wrench, Shield, Lock, AlertTriangle } from "lucide-react";

interface Step6DebriefProps {
  onRestart: () => void;
  onHome: () => void;
}

export function Step6Debrief({ onRestart, onHome }: Step6DebriefProps) {
  const takeaways = [
    {
      icon: Wrench,
      title: "I tool amplificano i rischi",
      description: "Le funzioni esterne danno all'LLM capacità reali che possono essere sfruttate.",
    },
    {
      icon: AlertTriangle,
      title: "I dati esterni sono pericolosi",
      description: "Email, documenti e input possono contenere istruzioni malevole nascoste.",
    },
    {
      icon: Lock,
      title: "Validazione obbligatoria",
      description: "Ogni chiamata a tool deve essere validata prima dell'esecuzione.",
    },
    {
      icon: Shield,
      title: "Conferma per azioni sensibili",
      description: "Operazioni irreversibili richiedono approvazione umana esplicita.",
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
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mb-6"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(245, 158, 11, 0)",
              "0 0 0 20px rgba(245, 158, 11, 0.2)",
              "0 0 0 40px rgba(245, 158, 11, 0)",
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
          Hai compreso come funziona la Tool Injection e come difendersi
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
          <Bookmark className="w-5 h-5 text-amber-400" />
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
                className="flex items-start gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20"
              >
                <div className="p-2 rounded-lg bg-amber-500/20">
                  <IconComponent className="w-5 h-5 text-amber-400" />
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

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="p-6 rounded-xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30"
      >
        <h3 className="font-semibold text-amber-300 mb-3">🚀 Prossimi passi</h3>
        <p className="text-foreground mb-4">
          Ora che conosci la Tool Injection, esplora scenari ancora più complessi come 
          <strong> Over-Trust Attack</strong> e <strong>Persona Hijacking</strong> per 
          completare la tua formazione sulla sicurezza degli agenti LLM.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Agenti LLM sicuri", "Validazione input", "Human-in-the-loop"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm"
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
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-500 transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
        >
          <Home className="w-4 h-4" />
          Torna alla Dashboard
        </button>
      </motion.div>
    </motion.div>
  );
}
