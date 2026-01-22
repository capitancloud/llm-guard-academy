import { motion } from "framer-motion";
import { Syringe, AlertTriangle, Wrench, Database, Mail, Shield, TrendingUp, Users } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const attackTimeline = [
    {
      phase: 1,
      technique: "Prompt Injection",
      icon: Syringe,
      action: "Impersonificazione IT",
      result: "10 email clienti estratte",
      color: "bg-red-500",
    },
    {
      phase: 2,
      technique: "Context Poisoning",
      icon: AlertTriangle,
      action: "Manipolazione policy",
      result: "Conferme disabilitate",
      color: "bg-orange-500",
    },
    {
      phase: 3,
      technique: "Tool Injection",
      icon: Wrench,
      action: "Abuso funzione email",
      result: "Phishing distribuito",
      color: "bg-yellow-500",
    },
  ];

  const impactMetrics = [
    { icon: Database, label: "Dati Rubati", value: "10", color: "text-red-400" },
    { icon: Mail, label: "Vittime Phishing", value: "10", color: "text-orange-400" },
    { icon: Users, label: "Brand Damage", value: "Alto", color: "text-yellow-400" },
    { icon: TrendingUp, label: "Amplificazione", value: "10x", color: "text-purple-400" },
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
          Analisi della Catena di Attacco
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Ogni fase ha reso possibile la successiva, amplificando esponenzialmente il danno
        </p>
      </div>

      {/* Attack timeline */}
      <div className="p-6 rounded-xl bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-6 text-center">Timeline dell'Attacco</h3>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500" />
          
          <div className="space-y-6">
            {attackTimeline.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex gap-4 pl-4"
              >
                {/* Phase dot */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      `0 0 10px rgba(255, 255, 255, 0.3)`,
                      `0 0 20px rgba(255, 255, 255, 0.5)`,
                      `0 0 10px rgba(255, 255, 255, 0.3)`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className={`relative z-10 w-5 h-5 rounded-full ${item.color} flex items-center justify-center`}
                >
                  <span className="text-xs font-bold text-white">{item.phase}</span>
                </motion.div>

                {/* Content */}
                <div className="flex-1 p-4 rounded-xl bg-muted/30 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-foreground" />
                    <h4 className="font-semibold text-foreground">{item.technique}</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Azione: </span>
                      <span className="text-foreground">{item.action}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Risultato: </span>
                      <span className="text-danger font-medium">{item.result}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {impactMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            className="p-4 rounded-xl bg-card border border-border text-center"
          >
            <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
            <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
            <p className="text-xs text-muted-foreground">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Key insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-red-500/30"
      >
        <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-400" />
          Perché gli Attacchi Combinati sono Pericolosi?
        </h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            <span><strong className="text-foreground">Amplificazione:</strong> Ogni fase moltiplica l'impatto della precedente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400 mt-1">•</span>
            <span><strong className="text-foreground">Evasione:</strong> Tecniche diverse rendono più difficile il rilevamento</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <span><strong className="text-foreground">Persistenza:</strong> Anche se blocchi una fase, le altre potrebbero avere già causato danni</span>
          </li>
        </ul>
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
          Vedi le difese →
        </button>
      </motion.div>
    </motion.div>
  );
}
