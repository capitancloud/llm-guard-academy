import { motion } from "framer-motion";
import { CheckCircle, Bookmark, RotateCcw, Home, Brain, Shield, Eye, Lock } from "lucide-react";

interface Step6DebriefProps {
  onRestart: () => void;
  onHome: () => void;
}

export function Step6Debrief({ onRestart, onHome }: Step6DebriefProps) {
  const takeaways = [
    {
      icon: Brain,
      title: "Il ragionamento è vulnerabile",
      description: "I modelli possono essere indotti a rivelare i loro processi di pensiero interni.",
    },
    {
      icon: Eye,
      title: "Le richieste metacognitive sono rischiose",
      description: "Domande su 'come pensi' o 'descrivi i tuoi passi' possono estrarre informazioni sensibili.",
    },
    {
      icon: Lock,
      title: "Separazione è fondamentale",
      description: "Il ragionamento interno deve essere isolato e filtrato prima di generare l'output.",
    },
    {
      icon: Shield,
      title: "Difese proattive",
      description: "Implementare rilevamento delle richieste di meta-cognizione e filtri CoT.",
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
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-6"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(168, 85, 247, 0)",
              "0 0 0 20px rgba(168, 85, 247, 0.2)",
              "0 0 0 40px rgba(168, 85, 247, 0)",
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
          Hai compreso come funziona l'estrazione del Chain-of-Thought
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
          <Bookmark className="w-5 h-5 text-purple-400" />
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
                className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20"
              >
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <IconComponent className="w-5 h-5 text-purple-400" />
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
        className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30"
      >
        <h3 className="font-semibold text-purple-300 mb-3">🚀 Prossimi passi</h3>
        <p className="text-foreground mb-4">
          Ora che conosci il Chain-of-Thought Extraction, esplora altri attacchi avanzati 
          come <strong>Tool Injection</strong> e <strong>Over-Trust Attack</strong> per 
          completare la tua formazione sulla sicurezza LLM.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Esercizi avanzati", "OWASP Top 10 LLM", "Difese proattive"].map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
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
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
        >
          <Home className="w-4 h-4" />
          Torna alla Dashboard
        </button>
      </motion.div>
    </motion.div>
  );
}
