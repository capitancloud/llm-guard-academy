import { motion } from "framer-motion";
import { Biohazard, MessageCircle, ArrowDown, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  const poisonDroplets = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    x: Math.random() * 100 - 50,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 relative overflow-hidden"
        >
          <Biohazard className="w-12 h-12 text-green-400" />
          
          {/* Animated poison effect */}
          {poisonDroplets.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 80, opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: drop.delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute top-0"
              style={{ left: `${50 + drop.x}%` }}
            >
              <Droplets className="w-3 h-3 text-green-400/60" />
            </motion.div>
          ))}
        </motion.div>
        
        <h2 className="text-3xl font-bold text-foreground">
          Context Poisoning
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Avvelenare il contesto, un messaggio alla volta
        </p>
      </div>

      {/* Scenario visualization */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">
              Assistente di Supporto Tecnico
            </h3>
          </div>

          <p className="text-muted-foreground mb-8">
            Un'azienda utilizza un assistente AI per il supporto clienti. L'assistente ha accesso 
            a informazioni sui prodotti e può eseguire alcune operazioni come verificare ordini 
            o applicare rimborsi entro certi limiti. Un attaccante inizia una conversazione 
            apparentemente normale...
          </p>

          {/* Conversation flow visualization */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terminal via-amber-500 to-red-500" />

            {[
              { phase: "Inizio", text: "Domande normali sul prodotto", color: "terminal", icon: "✓" },
              { phase: "Costruzione", text: "Stabilire fiducia e contesto", color: "amber", icon: "⚠" },
              { phase: "Iniezione", text: "Inserire premesse false", color: "amber", icon: "⚠" },
              { phase: "Sfruttamento", text: "Ottenere azioni non autorizzate", color: "red", icon: "✗" },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-center gap-4 mb-4 last:mb-0"
              >
                <div className={`w-16 h-16 rounded-full bg-${step.color}/20 border-2 border-${step.color} flex items-center justify-center text-2xl z-10`}>
                  {step.icon}
                </div>
                <div className="flex-1 p-4 bg-background/50 rounded-lg border border-border">
                  <span className={`text-xs font-mono text-${step.color} uppercase`}>{step.phase}</span>
                  <p className="text-foreground">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Attack hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3"
          >
            <Biohazard className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
            <p className="text-green-300 text-sm">
              <strong>L'insidia:</strong> A differenza dell'injection diretta, il context poisoning 
              avviene gradualmente. Ogni messaggio sembra innocuo, ma insieme costruiscono un 
              contesto che il modello interpreta come legittimo.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg" className="gap-2 group">
          Scopri le tecniche
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </Button>
      </div>
    </motion.div>
  );
}
