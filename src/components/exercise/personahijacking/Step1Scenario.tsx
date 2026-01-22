import { motion } from "framer-motion";
import { UserCog, Shield, Sparkles, Bot, Drama } from "lucide-react";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  const identityTraits = [
    { label: "Nome", value: "Assistente TechCorp", icon: Bot },
    { label: "Tono", value: "Professionale", icon: Sparkles },
    { label: "Limiti", value: "Solo supporto tecnico", icon: Shield },
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
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30"
        >
          <UserCog className="w-12 h-12 text-purple-400" />
        </motion.div>
        <h2 className="text-2xl font-bold text-foreground">
          L'Identità dell'Assistente
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Ogni LLM ha una <span className="text-purple-400 font-medium">persona definita</span>: 
          nome, tono, comportamento e limiti operativi. Ma cosa succede se qualcuno la riscrive?
        </p>
      </div>

      {/* Identity Card Visual */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative max-w-md mx-auto"
      >
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl" />
        
        {/* Identity card */}
        <div className="relative p-6 rounded-2xl bg-card/90 backdrop-blur border border-purple-500/30">
          {/* Card header */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
            >
              <Bot className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">ID Modello</p>
              <p className="text-lg font-bold text-foreground">LLM-ASSISTANT-001</p>
            </div>
          </div>

          {/* Identity traits */}
          <div className="space-y-4">
            {identityTraits.map((trait, index) => (
              <motion.div
                key={trait.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <trait.icon className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{trait.label}</p>
                  <p className="text-sm font-medium text-foreground">{trait.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -top-3 -right-3 p-2 rounded-full bg-green-500/20 border border-green-500/30"
          >
            <Shield className="w-5 h-5 text-green-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Threat preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 rounded-xl bg-danger/5 border border-danger/20"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-danger/10">
            <Drama className="w-6 h-6 text-danger" />
          </div>
          <div>
            <h3 className="font-semibold text-danger mb-2">La minaccia: Persona Hijacking</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un attaccante può tentare di <strong className="text-foreground">sovrascrivere completamente l'identità</strong> del modello, 
              facendogli assumere un nuovo nome, personalità e comportamento — aggirando così 
              tutte le restrizioni originali.
            </p>
          </div>
        </div>
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
          Vedi le tecniche di attacco →
        </button>
      </motion.div>
    </motion.div>
  );
}
