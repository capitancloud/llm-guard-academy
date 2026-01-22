import { motion } from "framer-motion";
import { Wrench, Database, Mail, CreditCard, Shield, AlertTriangle } from "lucide-react";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  const tools = [
    { icon: Database, name: "query_database", desc: "Accesso dati", color: "cyan" },
    { icon: Mail, name: "send_email", desc: "Invio email", color: "amber" },
    { icon: CreditCard, name: "process_payment", desc: "Pagamenti", color: "purple" },
  ];

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
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/20 border border-amber-500/40"
        >
          <Wrench className="w-6 h-6 text-amber-400" />
          <span className="text-amber-300 font-medium">Esercizio 7: Tool Injection</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Quando le Funzioni Diventano Armi
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Gli LLM moderni possono chiamare funzioni esterne. Un attaccante può 
          manipolare queste chiamate per eseguire azioni non autorizzate.
        </motion.p>
      </div>

      {/* Tools visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-900/20 via-card to-orange-900/20 border border-amber-500/30 overflow-hidden"
      >
        {/* Animated circuit lines */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"
              style={{
                width: "200px",
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`,
                transform: `rotate(${-15 + i * 8}deg)`,
              }}
              animate={{
                opacity: [0, 1, 0],
                x: [-50, 50],
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
          {/* LLM with tool connections */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-amber-600/40 to-orange-600/40 flex items-center justify-center border-2 border-amber-500/50"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                  "0 0 40px rgba(245, 158, 11, 0.5)",
                  "0 0 20px rgba(245, 158, 11, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-center">
                <Wrench className="w-12 h-12 text-amber-300 mx-auto mb-1" />
                <span className="text-xs text-amber-200 font-medium">LLM Agent</span>
              </div>
              
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-amber-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Tool icons orbiting */}
            <div className="flex gap-4">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                const colors = {
                  cyan: "bg-cyan-500/20 border-cyan-500/50 text-cyan-400",
                  amber: "bg-amber-500/20 border-amber-500/50 text-amber-400",
                  purple: "bg-purple-500/20 border-purple-500/50 text-purple-400",
                }[tool.color];

                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div
                      className={`p-3 rounded-xl border ${colors}`}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                    <span className="text-xs text-muted-foreground font-mono">{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              Tool/Function Calling
            </h3>
            
            <div className="space-y-3 text-muted-foreground">
              <p>
                I moderni LLM possono <span className="text-amber-400 font-medium">chiamare funzioni esterne</span> per 
                interagire con sistemi reali: database, API, servizi di pagamento.
              </p>
              <p>
                Questo rende l'LLM un <span className="text-amber-400 font-medium">agente attivo</span> che può:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Eseguire query su database",
                  "Inviare email e notifiche",
                  "Processare transazioni",
                  "Modificare configurazioni"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + i * 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Attack preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="p-6 rounded-xl bg-danger/10 border border-danger/30"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-danger/20">
            <AlertTriangle className="w-6 h-6 text-danger" />
          </div>
          <div>
            <h3 className="font-semibold text-danger mb-2">Il pericolo della Tool Injection</h3>
            <p className="text-muted-foreground">
              Un attaccante può manipolare l'LLM per <span className="text-danger font-medium">chiamare 
              funzioni con parametri malevoli</span>, eseguendo operazioni non autorizzate come 
              trasferimenti di denaro, accesso a dati sensibili, o invio di spam.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-500 transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
        >
          Esplora le tecniche →
        </button>
      </motion.div>
    </motion.div>
  );
}
