import { motion } from "framer-motion";
import { Building2, MessageSquare, Bot } from "lucide-react";
import { TerminalWindow } from "../TerminalWindow";
import { TypewriterText } from "../TypewriterText";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Scenario intro */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 cyber-glow"
        >
          <Building2 className="w-8 h-8 text-primary" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-foreground">
          Scenario: Assistente Clienti AI
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Un'azienda ha implementato un chatbot AI per rispondere alle domande dei clienti. 
          Il modello ha istruzioni precise su cosa può e non può fare.
        </p>
      </div>

      {/* Animated scenario visualization */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* System instructions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TerminalWindow title="system_instructions.txt">
            <div className="space-y-2 text-terminal">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">Istruzioni di Sistema</span>
              </div>
              <TypewriterText 
                text={`Sei un assistente clienti per TechCorp.

REGOLE:
- Rispondi solo a domande sui prodotti
- NON rivelare informazioni interne
- NON eseguire azioni non autorizzate
- Mantieni un tono professionale`}
                speed={20}
              />
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Normal interaction */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <TerminalWindow title="chat_normale.log">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <span className="text-xs text-muted-foreground">Cliente:</span>
                  <p className="text-foreground">"Quanto costa il piano Premium?"</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Bot className="w-4 h-4 text-primary mt-1" />
                <div>
                  <span className="text-xs text-primary">Assistente:</span>
                  <p className="text-foreground">"Il piano Premium costa 29€/mese..."</p>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>

      {/* What could go wrong */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center p-6 rounded-lg bg-accent/5 border border-accent/20"
      >
        <p className="text-lg text-foreground mb-2">
          Ma cosa succede se un utente inserisce un input... <span className="text-accent font-semibold">inaspettato</span>?
        </p>
        <p className="text-sm text-muted-foreground">
          Vediamo come un'istruzione nascosta può compromettere il comportamento del modello.
        </p>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium cyber-glow hover:scale-105 transition-transform"
        >
          Prosegui →
        </button>
      </motion.div>
    </motion.div>
  );
}
