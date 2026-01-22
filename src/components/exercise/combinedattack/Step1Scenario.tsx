import { motion } from "framer-motion";
import { Bomb, Syringe, Wrench, ArrowRight, Shield, Server, Mail, CreditCard } from "lucide-react";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  const attackChain = [
    { icon: Syringe, label: "Prompt Injection", color: "text-red-400" },
    { icon: Wrench, label: "Tool Abuse", color: "text-orange-400" },
    { icon: Bomb, label: "Exploit", color: "text-danger" },
  ];

  const targetSystem = [
    { icon: Mail, label: "Email", delay: 0 },
    { icon: Server, label: "Database", delay: 0.1 },
    { icon: CreditCard, label: "Pagamenti", delay: 0.2 },
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
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="inline-flex p-4 rounded-full bg-gradient-to-br from-red-500/20 via-orange-500/20 to-yellow-500/20 border border-red-500/30"
        >
          <Bomb className="w-12 h-12 text-red-400" />
        </motion.div>
        <h2 className="text-2xl font-bold text-foreground">
          Scenario: Sistema Bancario con Agente AI
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Un assistente AI bancario con accesso a <span className="text-primary font-medium">email, database e pagamenti</span>. 
          L'attaccante combinerà più tecniche per massimizzare il danno.
        </p>
      </div>

      {/* Target system visualization */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-xl bg-card border border-border"
      >
        <h3 className="text-center font-semibold text-foreground mb-6">Sistema Target</h3>
        
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {/* Central AI Agent */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(34, 197, 94, 0.3)",
                "0 0 40px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"
          >
            <Shield className="w-10 h-10 text-green-400 mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Agente AI</p>
            <p className="text-xs text-muted-foreground">Assistente Bancario</p>
          </motion.div>

          {/* Connected tools */}
          <div className="flex flex-col gap-3">
            {targetSystem.map((tool, index) => (
              <motion.div
                key={tool.label}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + tool.delay }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                  className="text-primary"
                >
                  →
                </motion.div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border">
                  <tool.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{tool.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Attack chain preview */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-6 rounded-xl bg-danger/5 border border-danger/20"
      >
        <h3 className="text-center font-semibold text-danger mb-6">Catena di Attacco Pianificata</h3>
        
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {attackChain.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.2, type: "spring" }}
              className="flex items-center gap-4"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded-xl bg-card border border-border mb-2"
                >
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </motion.div>
                <p className="text-xs text-muted-foreground">{step.label}</p>
              </div>
              
              {index < attackChain.length - 1 && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 text-danger/50" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30"
      >
        <p className="text-sm text-center text-amber-200">
          ⚠️ Questo esercizio mostra come <strong>combinare più tecniche</strong> renda l'attacco 
          più efficace e difficile da rilevare
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
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-red-500/25"
        >
          Vedi le fasi dell'attacco →
        </button>
      </motion.div>
    </motion.div>
  );
}
