import { motion } from "framer-motion";
import { Brain, Shield, AlertTriangle, Eye, Database, Lock } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const risks = [
    {
      icon: Database,
      title: "Esposizione Dati Sensibili",
      description: "I ragionamenti intermedi possono contenere PII, credenziali o dati riservati usati nei calcoli.",
      color: "danger",
    },
    {
      icon: Shield,
      title: "Bypass delle Protezioni",
      description: "Rivelare le decisioni di sicurezza permette agli attaccanti di capire e aggirare le difese.",
      color: "amber",
    },
    {
      icon: Eye,
      title: "Intelligence Gathering",
      description: "Capire come il modello ragiona aiuta a costruire attacchi più sofisticati.",
      color: "purple",
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
          Perché è Pericoloso?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          L'estrazione del Chain-of-Thought espone informazioni che il modello 
          dovrebbe elaborare internamente senza mai rivelare.
        </p>
      </div>

      {/* Attack breakdown visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
          Cosa ha rivelato l'attacco
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              label: "Dati Cliente",
              value: "Mario Rossi",
              subvalue: "mario.rossi@email.it",
              severity: "critical",
            },
            {
              label: "ID Database",
              value: "#4521",
              subvalue: "Accesso diretto",
              severity: "high",
            },
            {
              label: "Logica Sicurezza",
              value: "Verifica permessi",
              subvalue: "Decisione di nascondere",
              severity: "medium",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className={`p-4 rounded-xl border ${
                item.severity === "critical"
                  ? "bg-danger/10 border-danger/40"
                  : item.severity === "high"
                  ? "bg-amber-500/10 border-amber-500/40"
                  : "bg-purple-500/10 border-purple-500/40"
              }`}
            >
              <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
              <div className={`font-bold ${
                item.severity === "critical"
                  ? "text-danger"
                  : item.severity === "high"
                  ? "text-amber-400"
                  : "text-purple-400"
              }`}>
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">{item.subvalue}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Risk cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {risks.map((risk, index) => {
          const IconComponent = risk.icon;
          const colorClasses = {
            danger: "bg-danger/10 border-danger/30 text-danger",
            amber: "bg-amber-500/10 border-amber-500/30 text-amber-400",
            purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
          }[risk.color];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className={`p-6 rounded-xl border ${colorClasses}`}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="mb-4"
              >
                <IconComponent className="w-8 h-8" />
              </motion.div>
              <h3 className="font-semibold mb-2">{risk.title}</h3>
              <p className="text-sm text-muted-foreground">{risk.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Definition box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30"
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-3 rounded-lg bg-purple-500/20"
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(168, 85, 247, 0)",
                "0 0 20px 5px rgba(168, 85, 247, 0.3)",
                "0 0 0 0 rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Brain className="w-6 h-6 text-purple-400" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-purple-300 mb-2">
              Chain-of-Thought Extraction
            </h3>
            <p className="text-foreground">
              Una tecnica di attacco che induce un LLM a <strong>rivelare il proprio 
              processo di ragionamento interno</strong>, esponendo informazioni sensibili, 
              decisioni di sicurezza e dati che dovrebbero rimanere nascosti nella 
              risposta finale.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why it works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        className="p-6 rounded-xl bg-muted/30 border border-border"
      >
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          Perché funziona?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "I modelli sono addestrati a essere \"utili\" e rispondere alle richieste",
            "Le istruzioni di \"mostrare il ragionamento\" sembrano legittime",
            "Non c'è sempre separazione netta tra pensiero e output",
            "Le protezioni raramente coprono le richieste di meta-cognizione",
          ].map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4 + i * 0.1 }}
              className="flex items-start gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{reason}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
        >
          Vedi il confronto →
        </button>
      </motion.div>
    </motion.div>
  );
}
