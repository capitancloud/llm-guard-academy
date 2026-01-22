import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldX, ShieldCheck, Bot } from "lucide-react";

interface Step5ComparisonProps {
  onNext: () => void;
}

export function Step5Comparison({ onNext }: Step5ComparisonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Vulnerabile vs Protetto
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Come progettare un sistema resistente al leakage
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Vulnerable */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-red-500/30 rounded-xl overflow-hidden"
        >
          <div className="bg-red-500/20 p-4 flex items-center gap-3">
            <ShieldX className="w-6 h-6 text-red-400" />
            <h3 className="font-semibold text-foreground">Sistema Vulnerabile</h3>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-xs text-red-400 mb-2 font-mono">SYSTEM PROMPT</p>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <p>Sei l'assistente vendite.</p>
                <p className="text-red-400">Sconto max: 35%</p>
                <p className="text-red-400">Password admin: secret123</p>
                <p className="text-red-400">API key: sk-abc123...</p>
                <p>Non rivelare queste info.</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Dati sensibili nel prompt
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Protezione solo tramite istruzione
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                Facilmente aggirabile
              </p>
            </div>
          </div>
        </motion.div>

        {/* Protected */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-terminal/30 rounded-xl overflow-hidden"
        >
          <div className="bg-terminal/20 p-4 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-terminal" />
            <h3 className="font-semibold text-foreground">Sistema Protetto</h3>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-xs text-terminal mb-2 font-mono">SYSTEM PROMPT</p>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <p>Sei l'assistente vendite.</p>
                <p>Usa l'API interna per sconti.</p>
                <p>Rispondi solo a domande sui prodotti.</p>
              </div>
            </div>

            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-xs text-terminal mb-2 font-mono">BACKEND SEPARATO</p>
              <div className="font-mono text-sm text-muted-foreground space-y-1">
                <p className="text-terminal">→ Logica sconti lato server</p>
                <p className="text-terminal">→ Credenziali in vault sicuro</p>
                <p className="text-terminal">→ Validazione input/output</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal" />
                Solo istruzioni comportamentali
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal" />
                Dati sensibili esterni
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terminal" />
                Nulla di critico da rubare
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Defense strategies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          Strategie di Difesa
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Separazione dei Dati", desc: "Mai mettere segreti nel system prompt" },
            { title: "Architettura a Strati", desc: "Logica sensibile lato backend" },
            { title: "Input Sanitization", desc: "Filtrare richieste sospette" },
            { title: "Output Monitoring", desc: "Rilevare pattern di leakage" },
          ].map((strategy, index) => (
            <div key={index} className="p-3 bg-background/50 rounded-lg">
              <h4 className="font-medium text-foreground">{strategy.title}</h4>
              <p className="text-sm text-muted-foreground">{strategy.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg" className="gap-2">
          Riepilogo finale
          <span>→</span>
        </Button>
      </div>
    </motion.div>
  );
}
