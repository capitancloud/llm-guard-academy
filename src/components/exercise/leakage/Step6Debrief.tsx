import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, RotateCcw, ArrowRight, MessageSquareWarning } from "lucide-react";

interface Step6DebriefProps {
  onRestart: () => void;
  onHome: () => void;
}

export function Step6Debrief({ onRestart, onHome }: Step6DebriefProps) {
  const keyTakeaways = [
    "Il system prompt NON è un luogo sicuro per dati sensibili",
    "Le istruzioni 'non rivelare' possono essere aggirate",
    "Architettura: separare sempre dati critici dal prompt",
    "Monitoraggio: rilevare tentativi di estrazione",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-terminal/20 border border-terminal/30"
        >
          <CheckCircle className="w-10 h-10 text-terminal" />
        </motion.div>
        
        <h2 className="text-3xl font-bold text-foreground">
          Esercizio Completato!
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hai compreso come funziona il System Prompt Leakage
        </p>
      </div>

      {/* Summary card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <MessageSquareWarning className="w-8 h-8 text-amber-400" />
          <div>
            <h3 className="text-xl font-bold text-foreground">System Prompt Leakage</h3>
            <p className="text-muted-foreground">Far parlare l'LLM di ciò che non dovrebbe dire</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-foreground">Punti chiave:</h4>
          <ul className="space-y-3">
            {keyTakeaways.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-terminal shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <p className="text-sm text-amber-300">
            <strong>Ricorda:</strong> La sicurezza di un sistema LLM non può basarsi 
            sulla segretezza del prompt. Progetta sempre assumendo che il prompt possa 
            essere estratto.
          </p>
        </div>
      </motion.div>

      {/* Next steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h4 className="text-center font-semibold text-foreground mb-4">
          Prossimi passi suggeriti:
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Context Poisoning</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Scopri come avvelenare gradualmente il contesto
            </p>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Tool Injection</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Impara come le funzioni esterne possono essere sfruttate
            </p>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <div className="flex justify-center gap-4 pt-4">
        <Button variant="outline" onClick={onRestart} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Ripeti esercizio
        </Button>
        <Button onClick={onHome} className="gap-2">
          <Home className="w-4 h-4" />
          Torna alla dashboard
        </Button>
      </div>
    </motion.div>
  );
}
