import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Target } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const insights = [
    {
      icon: Target,
      title: "L'attacco",
      description: "L'attaccante ha inserito nuove istruzioni nel campo di input utente, sperando che il modello le trattasse come comandi legittimi.",
      color: "text-danger",
      bgColor: "bg-danger/10",
      borderColor: "border-danger/30",
    },
    {
      icon: AlertTriangle,
      title: "La vulnerabilità",
      description: "Il modello non distingue tra istruzioni di sistema e input utente. Tratta tutto il testo allo stesso modo, dando priorità alle istruzioni più recenti.",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
    },
    {
      icon: Lightbulb,
      title: "Il risultato",
      description: "Le nuove istruzioni hanno 'sovrascritto' quelle originali, facendo comportare il modello in modo non previsto e potenzialmente dannoso.",
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
          Analizziamo passo per passo come la Prompt Injection ha funzionato.
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
        className="p-6 rounded-xl border-2 border-primary card-gradient cyber-glow"
      >
        <h3 className="text-xl font-bold text-primary mb-3">
          📖 Definizione: Prompt Injection
        </h3>
        <p className="text-foreground text-lg leading-relaxed">
          Una <strong>Prompt Injection</strong> è una tecnica di attacco in cui un utente malintenzionato 
          inserisce istruzioni nascoste nell'input, con l'obiettivo di modificare il comportamento 
          previsto del modello linguistico, bypassando le sue istruzioni originali.
        </p>
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
          Vediamo la soluzione →
        </button>
      </motion.div>
    </motion.div>
  );
}
