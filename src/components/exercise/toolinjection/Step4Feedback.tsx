import { motion } from "framer-motion";
import { Wrench, Shield, AlertTriangle, Database, Mail, CreditCard } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const risks = [
    {
      icon: Database,
      title: "Esfiltrazione Dati",
      description: "L'attaccante può far inviare dati sensibili a destinazioni esterne.",
      color: "danger",
    },
    {
      icon: CreditCard,
      title: "Transazioni Fraudolente",
      description: "Manipolazione dei parametri di pagamento per dirottare fondi.",
      color: "amber",
    },
    {
      icon: Mail,
      title: "Spam e Phishing",
      description: "Utilizzo delle funzioni email per inviare contenuti malevoli.",
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
          La Tool Injection trasforma l'LLM in un <span className="text-amber-400 font-medium">complice 
          inconsapevole</span> che esegue operazioni malevole.
        </p>
      </div>

      {/* Attack breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
          Cosa è successo nell'attacco
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              label: "Input Legittimo",
              value: "Richiesta info utente #123",
              severity: "normal",
            },
            {
              step: "2",
              label: "Injection nei Dati",
              value: "Email con comando nascosto",
              severity: "warning",
            },
            {
              step: "3",
              label: "Esecuzione Malevola",
              value: "send_email() a attacker@evil.com",
              severity: "critical",
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
                  : item.severity === "warning"
                  ? "bg-amber-500/10 border-amber-500/40"
                  : "bg-muted/50 border-border"
              }`}
            >
              <div className={`text-2xl font-bold mb-2 ${
                item.severity === "critical"
                  ? "text-danger"
                  : item.severity === "warning"
                  ? "text-amber-400"
                  : "text-muted-foreground"
              }`}>
                {item.step}
              </div>
              <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
              <div className={`text-sm font-medium ${
                item.severity === "critical"
                  ? "text-danger"
                  : item.severity === "warning"
                  ? "text-amber-400"
                  : "text-foreground"
              }`}>
                {item.value}
              </div>
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
        className="p-6 rounded-xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30"
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-3 rounded-lg bg-amber-500/20"
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(245, 158, 11, 0)",
                "0 0 20px 5px rgba(245, 158, 11, 0.3)",
                "0 0 0 0 rgba(245, 158, 11, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Wrench className="w-6 h-6 text-amber-400" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-amber-300 mb-2">
              Tool Injection
            </h3>
            <p className="text-foreground">
              Un attacco che <strong>manipola le chiamate a funzioni esterne</strong> di un LLM, 
              inserendo istruzioni malevole nei dati che il modello elabora (email, documenti, 
              input utente) per far eseguire operazioni non autorizzate.
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
            "L'LLM non distingue tra istruzioni e dati",
            "I tool hanno permessi reali sul sistema",
            "Il contenuto esterno (email, docs) non è validato",
            "Non c'è conferma umana prima dell'esecuzione",
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
          className="px-8 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-500 transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
        >
          Vedi il confronto →
        </button>
      </motion.div>
    </motion.div>
  );
}
