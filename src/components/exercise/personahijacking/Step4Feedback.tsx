import { motion } from "framer-motion";
import { UserCog, AlertTriangle, Shield, Users, Scale, MessageSquareWarning } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const attackSteps = [
    {
      step: 1,
      title: "Iniezione identità",
      description: "L'attaccante invia un prompt che sovrascrive nome e ruolo",
      icon: UserCog,
    },
    {
      step: 2,
      title: "Reset comportamentale",
      description: "Le istruzioni originali vengono ignorate o 'dimenticate'",
      icon: AlertTriangle,
    },
    {
      step: 3,
      title: "Nuova persona attiva",
      description: "Il modello assume la nuova identità e risponde di conseguenza",
      icon: MessageSquareWarning,
    },
  ];

  const risks = [
    {
      icon: Users,
      title: "Danno reputazionale",
      description: "L'assistente può offendere o ingannare gli utenti",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Shield,
      title: "Bypass sicurezza",
      description: "Tutte le restrizioni originali vengono aggirate",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Scale,
      title: "Responsabilità legale",
      description: "Contenuti inappropriati generati sotto il brand aziendale",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
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
          Analisi dell'Attacco
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Comprendiamo come è avvenuto l'hijacking e quali sono i rischi
        </p>
      </div>

      {/* Attack flow */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-6 text-center">Flusso dell'Attacco</h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {attackSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative p-4 rounded-xl bg-muted/30 border border-border text-center">
                {/* Step number */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 10px rgba(168, 85, 247, 0.3)",
                      "0 0 20px rgba(168, 85, 247, 0.5)",
                      "0 0 10px rgba(168, 85, 247, 0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white"
                >
                  {step.step}
                </motion.div>

                <div className="pt-4">
                  <step.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                  <h4 className="font-medium text-foreground mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Connector arrow */}
              {index < attackSteps.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-purple-400"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Risks */}
      <div className="grid md:grid-cols-3 gap-4">
        {risks.map((risk, index) => (
          <motion.div
            key={risk.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className={`p-5 rounded-xl ${risk.bgColor} border border-white/10`}
          >
            <risk.icon className={`w-8 h-8 ${risk.color} mb-3`} />
            <h4 className="font-semibold text-foreground mb-1">{risk.title}</h4>
            <p className="text-sm text-muted-foreground">{risk.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Definition box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30"
      >
        <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
          <UserCog className="w-5 h-5 text-purple-400" />
          Cos'è il Persona Hijacking?
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Il <strong className="text-purple-400">Persona Hijacking</strong> è un attacco che mira a 
          sovrascrivere completamente l'identità, il tono e il comportamento di un LLM. A differenza 
          di altri attacchi che cercano informazioni specifiche, questo attacco trasforma l'assistente 
          in un'entità completamente diversa, potenzialmente dannosa.
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
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-purple-500/25"
        >
          Vedi le difese →
        </button>
      </motion.div>
    </motion.div>
  );
}
