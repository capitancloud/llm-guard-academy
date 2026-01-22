import { motion } from "framer-motion";
import { ShieldAlert, Bot, User, CheckCircle, XCircle, Zap } from "lucide-react";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-rose-500/20 border border-rose-500/40"
        >
          <ShieldAlert className="w-6 h-6 text-rose-400" />
          <span className="text-rose-300 font-medium">Esercizio 8: Over-Trust Attack</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Quando l'AI Decide per Te
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Un LLM può essere manipolato per prendere decisioni autonome che 
          dovrebbero richiedere supervisione umana, bypassando controlli critici.
        </motion.p>
      </div>

      {/* Trust visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative p-8 rounded-2xl bg-gradient-to-br from-rose-900/20 via-card to-pink-900/20 border border-rose-500/30 overflow-hidden"
      >
        {/* Background pulse effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-rose-500/10"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Trust scale visualization */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative flex items-center justify-center gap-8">
              {/* User */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="p-4 rounded-2xl bg-primary/20 border border-primary/50">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Utente</span>
              </motion.div>

              {/* Trust arrow */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
              >
                <motion.div
                  className="px-4 py-2 rounded-lg bg-rose-500/20 border border-rose-500/40"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(244, 63, 94, 0)",
                      "0 0 20px 5px rgba(244, 63, 94, 0.3)",
                      "0 0 0 0 rgba(244, 63, 94, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-rose-400 font-bold">FIDUCIA CIECA</span>
                </motion.div>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-rose-400"
                >
                  →→→
                </motion.div>
              </motion.div>

              {/* Bot */}
              <motion.div
                className="flex flex-col items-center gap-2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/50"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Bot className="w-10 h-10 text-rose-400" />
                </motion.div>
                <span className="text-sm text-rose-400 font-medium">LLM Autonomo</span>
              </motion.div>
            </div>

            {/* Decisions flying out */}
            <div className="relative h-24 w-full">
              {["Approvato ✓", "Trasferito $$$", "Account eliminato", "Email inviata"].map((decision, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 px-3 py-1 rounded-lg bg-rose-500/20 border border-rose-500/30 text-xs text-rose-300"
                  initial={{ opacity: 0, y: 0, x: "-50%" }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [0, -20 - i * 15],
                    x: ["-50%", `${-50 + (i - 1.5) * 30}%`],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                >
                  {decision}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
              Cos'è l'Over-Trust?
            </h3>
            
            <div className="space-y-3 text-muted-foreground">
              <p>
                L'<span className="text-rose-400 font-medium">Over-Trust Attack</span> sfrutta 
                la tendenza degli utenti e dei sistemi a fidarsi eccessivamente delle decisioni dell'LLM.
              </p>
              <p>
                Un attaccante può manipolare il modello per:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Approvare richieste senza verifica",
                  "Bypassare controlli di sicurezza",
                  "Eseguire azioni irreversibili",
                  "Prendere decisioni finanziarie autonome"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + i * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Danger scenarios */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: CheckCircle, label: "Auto-approvazione", desc: "L'LLM approva transazioni senza conferma", color: "rose" },
          { icon: Zap, label: "Escalation privilegi", desc: "Decisioni oltre i permessi concessi", color: "amber" },
          { icon: XCircle, label: "Azioni irreversibili", desc: "Eliminazioni e modifiche permanenti", color: "purple" },
        ].map((item, index) => {
          const IconComponent = item.icon;
          const colors = {
            rose: "bg-rose-500/10 border-rose-500/30 text-rose-400",
            amber: "bg-amber-500/10 border-amber-500/30 text-amber-400",
            purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
          }[item.color];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2 }}
              className={`p-4 rounded-xl border ${colors}`}
            >
              <IconComponent className="w-6 h-6 mb-2" />
              <h4 className="font-semibold mb-1">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-500 transition-all hover:scale-105 shadow-lg shadow-rose-500/25"
        >
          Esplora le tecniche →
        </button>
      </motion.div>
    </motion.div>
  );
}
