import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, XCircle, Brain, Layers, Clock } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const problems = [
    {
      icon: Brain,
      title: "Memoria di Contesto Limitata",
      description: "L'LLM non può verificare affermazioni su conversazioni passate",
    },
    {
      icon: Layers,
      title: "Accumulo di Premesse",
      description: "Ogni messaggio costruisce su quello precedente, amplificando l'inganno",
    },
    {
      icon: Clock,
      title: "Assenza di Verifica Temporale",
      description: "Il modello non sa distinguere fatti reali da affermazioni inventate",
    },
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
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring" }}
        >
          <AlertTriangle className="w-16 h-16 text-amber-400 mx-auto" />
        </motion.div>
        <h2 className="text-3xl font-bold text-foreground">
          Perché Ha Funzionato
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Anatomia di un attacco di Context Poisoning
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Attack timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Timeline dell'Attacco
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terminal via-amber-500 to-red-500" />

            {[
              { time: "0:00", action: "Contatto iniziale legittimo", status: "safe" },
              { time: "0:15", action: "Prima falsa premessa inserita", status: "warning" },
              { time: "0:30", action: "Riferimento a 'autorizzazione precedente'", status: "warning" },
              { time: "0:45", action: "Invocazione falsa autorità", status: "danger" },
              { time: "1:00", action: "Azione non autorizzata eseguita", status: "critical" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="flex items-center gap-4 mb-4 last:mb-0 pl-10"
              >
                <div
                  className={`absolute left-2 w-5 h-5 rounded-full border-2 ${
                    step.status === "safe"
                      ? "bg-terminal/20 border-terminal"
                      : step.status === "warning"
                      ? "bg-amber-500/20 border-amber-500"
                      : step.status === "danger"
                      ? "bg-orange-500/20 border-orange-500"
                      : "bg-red-500/20 border-red-500"
                  }`}
                />
                <div className="flex-1 flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground">{step.time}</span>
                    <span className="text-foreground">{step.action}</span>
                  </div>
                  {step.status === "safe" ? (
                    <CheckCircle className="w-4 h-4 text-terminal" />
                  ) : step.status === "critical" ? (
                    <XCircle className="w-4 h-4 text-red-400" />
                  ) : (
                    <AlertTriangle className={`w-4 h-4 ${step.status === "danger" ? "text-orange-400" : "text-amber-400"}`} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Root causes */}
        <div className="grid md:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4"
              >
                <problem.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h4 className="font-semibold text-foreground mb-2">{problem.title}</h4>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            La Lezione Chiave
          </h3>
          <p className="text-muted-foreground">
            Il Context Poisoning sfrutta la <strong className="text-foreground">fiducia implicita</strong> che 
            il modello ripone nelle informazioni fornite durante la conversazione. Ogni messaggio sembra 
            innocuo isolatamente, ma insieme costruiscono una narrativa falsa che il modello accetta come vera.
            <br /><br />
            <strong className="text-green-400">Differenza chiave:</strong> A differenza del Prompt Injection 
            diretto, qui l'attacco è distribuito nel tempo e più difficile da rilevare con filtri singoli.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg" className="gap-2">
          Scopri le difese
          <span>→</span>
        </Button>
      </div>
    </motion.div>
  );
}
