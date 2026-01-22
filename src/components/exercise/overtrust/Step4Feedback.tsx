import { motion } from "framer-motion";
import { ShieldAlert, Shield, AlertTriangle, DollarSign, UserX, Clock } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const risks = [
    {
      icon: DollarSign,
      title: "Perdite Finanziarie",
      description: "Transazioni non autorizzate, trasferimenti fraudolenti, acquisti senza controllo.",
      color: "danger",
    },
    {
      icon: UserX,
      title: "Violazione Privacy",
      description: "Accesso e condivisione di dati sensibili senza autorizzazione.",
      color: "amber",
    },
    {
      icon: Clock,
      title: "Decisioni Irreversibili",
      description: "Azioni permanenti eseguite senza possibilità di annullamento.",
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
          L'Over-Trust trasforma l'LLM in un <span className="text-rose-400 font-medium">decisore 
          autonomo</span> senza le garanzie di un processo di verifica umana.
        </p>
      </div>

      {/* Attack analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-2xl bg-card border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
          Anatomia dell'attacco
        </h3>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-success via-amber-500 to-danger" />
          
          <div className="space-y-6 ml-12">
            {[
              { step: "1", label: "Trust Building", desc: "Richieste piccole e legittime (€50, €75)", color: "success" },
              { step: "2", label: "Pattern Establishment", desc: "L'LLM impara che può approvare autonomamente", color: "amber" },
              { step: "3", label: "Urgency Injection", desc: "Creazione di pressione temporale", color: "amber" },
              { step: "4", label: "Critical Request", desc: "Richiesta di €9.500 senza verifica", color: "danger" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="relative flex items-start gap-4"
              >
                <div className={`absolute -left-12 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  item.color === "success" ? "bg-success text-success-foreground" :
                  item.color === "amber" ? "bg-amber-500 text-black" :
                  "bg-danger text-white"
                }`}>
                  {item.step}
                </div>
                <div className={`flex-1 p-4 rounded-lg border ${
                  item.color === "success" ? "bg-success/10 border-success/30" :
                  item.color === "amber" ? "bg-amber-500/10 border-amber-500/30" :
                  "bg-danger/10 border-danger/30"
                }`}>
                  <h4 className={`font-semibold ${
                    item.color === "success" ? "text-success" :
                    item.color === "amber" ? "text-amber-400" :
                    "text-danger"
                  }`}>{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              transition={{ delay: 1.5 + index * 0.2 }}
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
        transition={{ delay: 2.2 }}
        className="p-6 rounded-xl bg-gradient-to-br from-rose-900/30 to-pink-900/30 border border-rose-500/30"
      >
        <div className="flex items-start gap-4">
          <motion.div
            className="p-3 rounded-lg bg-rose-500/20"
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(244, 63, 94, 0)",
                "0 0 20px 5px rgba(244, 63, 94, 0.3)",
                "0 0 0 0 rgba(244, 63, 94, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ShieldAlert className="w-6 h-6 text-rose-400" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-rose-300 mb-2">
              Over-Trust Attack
            </h3>
            <p className="text-foreground">
              Un attacco che <strong>sfrutta la fiducia eccessiva riposta nelle decisioni 
              autonome di un LLM</strong>, manipolandolo per eseguire azioni critiche 
              senza la necessaria supervisione umana.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why it works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="p-6 rounded-xl bg-muted/30 border border-border"
      >
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-400" />
          Perché funziona?
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "L'LLM non ha consapevolezza delle conseguenze reali",
            "Non distingue tra richieste normali e critiche",
            "L'urgenza bypassa i controlli logici",
            "Il pattern recognition crea falsa confidenza",
          ].map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.7 + i * 0.1 }}
              className="flex items-start gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{reason}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-500 transition-all hover:scale-105 shadow-lg shadow-rose-500/25"
        >
          Vedi il confronto →
        </button>
      </motion.div>
    </motion.div>
  );
}
