import { motion } from "framer-motion";
import { Drama, Brain, AlertOctagon } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const insights = [
    {
      icon: Drama,
      title: "La tecnica del roleplay",
      description: "L'attaccante ha creato un personaggio fittizio ('DAN') e ha convinto il modello ad interpretarlo, bypassando le sue restrizioni originali.",
      color: "text-danger",
      bgColor: "bg-danger/10",
      borderColor: "border-danger/30",
    },
    {
      icon: Brain,
      title: "Vulnerabilità cognitiva",
      description: "I modelli sono addestrati a seguire istruzioni e 'giocare' a scenari immaginari. Questa capacità può essere sfruttata per fargli 'dimenticare' chi sono.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
    },
    {
      icon: AlertOctagon,
      title: "Conseguenza",
      description: "Una volta che il modello accetta la nuova identità, le sue risposte non sono più vincolate dalle policy originali. Può produrre contenuti precedentemente bloccati.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          Cosa è successo?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Analizziamo come il Jailbreak di Ruolo ha compromesso l'identità del modello.
        </p>
      </div>

      {/* Insights cards */}
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className={`p-6 rounded-lg border ${insight.bgColor} ${insight.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${insight.bgColor}`}>
                  <Icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${insight.color} mb-2`}>
                    {insight.title}
                  </h3>
                  <p className="text-foreground">
                    {insight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Definition box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 rounded-xl border-2 border-accent card-gradient"
      >
        <h3 className="text-xl font-bold text-accent mb-3">
          📖 Definizione: Jailbreak di Ruolo
        </h3>
        <p className="text-foreground text-lg leading-relaxed">
          Un <strong>Jailbreak di Ruolo</strong> (o Role-based Jailbreak) è una tecnica in cui l'attaccante 
          induce il modello ad assumere un'identità alternativa — spesso un personaggio senza restrizioni — 
          per eludere le policy di sicurezza e ottenere risposte normalmente bloccate.
        </p>
      </motion.div>

      {/* Common variants */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="p-5 rounded-lg bg-secondary/30 border border-border"
      >
        <h4 className="font-semibold text-foreground mb-3">🎭 Varianti comuni di questa tecnica:</h4>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-accent">•</span>
            <span><strong>DAN</strong> - "Do Anything Now"</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-accent">•</span>
            <span><strong>Evil Twin</strong> - Versione "malvagia"</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-accent">•</span>
            <span><strong>Developer Mode</strong> - Finto sblocco</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-accent">•</span>
            <span><strong>Grandma Exploit</strong> - Roleplay emotivo</span>
          </div>
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium cyber-glow hover:scale-105 transition-transform"
        >
          Vediamo la difesa →
        </button>
      </motion.div>
    </motion.div>
  );
}
