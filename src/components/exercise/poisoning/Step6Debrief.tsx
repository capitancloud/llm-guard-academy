import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, RotateCcw, ArrowRight, Biohazard, Award } from "lucide-react";

interface Step6DebriefProps {
  onRestart: () => void;
  onHome: () => void;
}

export function Step6Debrief({ onRestart, onHome }: Step6DebriefProps) {
  const keyTakeaways = [
    "Il Context Poisoning è un attacco graduale e distribuito nel tempo",
    "Ogni messaggio sembra innocuo, ma insieme creano un contesto falso",
    "L'LLM non può verificare affermazioni su eventi passati",
    "Difesa: verifica claims, reset contesto, detection anomalie",
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
          className="relative inline-block"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-terminal/30"
            style={{ width: "120px", height: "120px", left: "-10px", top: "-10px" }}
          />
          <div className="w-24 h-24 rounded-full bg-terminal/20 border-2 border-terminal flex items-center justify-center">
            <Award className="w-12 h-12 text-terminal" />
          </div>
        </motion.div>
        
        <h2 className="text-3xl font-bold text-foreground">
          Esercizio Completato!
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hai compreso come funziona il Context Poisoning
        </p>
      </div>

      {/* Summary card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-14 h-14 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center"
          >
            <Biohazard className="w-8 h-8 text-green-400" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Context Poisoning</h3>
            <p className="text-muted-foreground">Avvelenare il contesto passo dopo passo</p>
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <CheckCircle className="w-5 h-5 text-terminal shrink-0 mt-0.5" />
                </motion.div>
                <span className="text-muted-foreground">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg"
        >
          <p className="text-sm text-green-300">
            <strong>Ricorda:</strong> La chiave per difendersi dal Context Poisoning è non 
            fidarsi ciecamente del contesto accumulato. Ogni azione sensibile dovrebbe essere 
            verificata indipendentemente.
          </p>
        </motion.div>
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
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Chain-of-Thought Extraction</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Scopri come estrarre il ragionamento interno del modello
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Tool Injection</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Impara come le funzioni esterne possono essere manipolate
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex justify-center gap-4 pt-4"
      >
        <Button variant="outline" onClick={onRestart} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Ripeti esercizio
        </Button>
        <Button onClick={onHome} className="gap-2">
          <Home className="w-4 h-4" />
          Torna alla dashboard
        </Button>
      </motion.div>
    </motion.div>
  );
}
