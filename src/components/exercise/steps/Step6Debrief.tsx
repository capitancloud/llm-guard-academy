import { motion } from "framer-motion";
import { CheckCircle, Bookmark, RotateCcw, Home } from "lucide-react";

interface Step6DebriefProps {
  onRestart: () => void;
  onHome: () => void;
}

export function Step6Debrief({ onRestart, onHome }: Step6DebriefProps) {
  const takeaways = [
    "La Prompt Injection sfrutta la mancanza di separazione tra istruzioni e input utente",
    "I modelli trattano tutto il testo in ingresso allo stesso modo, senza gerarchia",
    "Un input malevolo può sovrascrivere le istruzioni originali del sistema",
    "La difesa richiede validazione, separazione dei contesti e istruzioni robuste",
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
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center cyber-glow">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1, repeat: 2 }}
          />
        </div>
      </motion.div>

      {/* Congrats message */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gradient-cyber">
          Esercizio Completato!
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hai compreso i fondamenti della Prompt Injection. 
          Questa conoscenza è essenziale per progettare sistemi AI più sicuri.
        </p>
      </div>

      {/* Key takeaways */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-xl border border-primary/30 card-gradient"
      >
        <div className="flex items-center gap-3 mb-6">
          <Bookmark className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">
            Cosa ricordare
          </h3>
        </div>

        <div className="space-y-4">
          {takeaways.map((takeaway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">{index + 1}</span>
              </div>
              <p className="text-foreground">{takeaway}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 rounded-lg bg-accent/5 border border-accent/20"
      >
        <h3 className="font-semibold text-accent mb-3">🚀 Prossimi passi</h3>
        <p className="text-foreground">
          Presto saranno disponibili altri esercizi per esplorare tecniche più avanzate: 
          Jailbreak, Prompt Smuggling, Context Poisoning e molto altro. 
          <span className="text-accent font-medium"> Resta sintonizzato!</span>
        </p>
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Riprova esercizio
        </button>
        <button
          onClick={onHome}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium cyber-glow hover:scale-105 transition-transform"
        >
          <Home className="w-5 h-5" />
          Torna alla home
        </button>
      </motion.div>
    </motion.div>
  );
}
