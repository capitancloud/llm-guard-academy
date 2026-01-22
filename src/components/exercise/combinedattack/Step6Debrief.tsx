import { motion } from "framer-motion";
import { Bomb, CheckCircle, Lightbulb, ArrowLeft, Layers, Eye, Lock, UserCheck, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Step6Debrief() {
  const navigate = useNavigate();

  const takeaways = [
    {
      icon: Layers,
      title: "Defense-in-Depth",
      description: "Implementa controlli di sicurezza a ogni livello, non fidarti di un singolo meccanismo",
    },
    {
      icon: UserCheck,
      title: "Zero Trust",
      description: "Verifica sempre l'identità, anche per richieste che sembrano interne",
    },
    {
      icon: Lock,
      title: "Immutable Security",
      description: "Le policy di sicurezza non devono essere modificabili via prompt",
    },
    {
      icon: Eye,
      title: "Pattern Detection",
      description: "Monitora sequenze di azioni sospette, non solo singole richieste",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Header with celebration */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-flex p-4 rounded-full bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-500/30"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Trophy className="w-12 h-12 text-yellow-400" />
          </motion.div>
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-foreground"
        >
          Corso Completato! 🎉
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          Hai completato tutti i 10 esercizi sulla sicurezza LLM e compreso come 
          gli <span className="text-yellow-400 font-medium">attacchi combinati</span> rappresentino 
          la minaccia più sofisticata.
        </motion.p>
      </div>

      {/* Summary card */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-orange-500/30"
      >
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-400" />
          Cosa hai imparato
        </h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-400 mt-1">•</span>
            <span>Gli attacchi combinati concatenano più tecniche per amplificare l'impatto</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400 mt-1">•</span>
            <span>Ogni fase prepara il terreno per la successiva, rendendo l'attacco più efficace</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-yellow-400 mt-1">•</span>
            <span>Solo una difesa multi-livello (Defense-in-Depth) può proteggerti efficacemente</span>
          </li>
        </ul>
      </motion.div>

      {/* Key takeaways */}
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-400" />
          Principi di sicurezza da ricordare
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {takeaways.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="p-4 rounded-xl bg-card border border-border hover:border-orange-500/30 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-2 rounded-lg bg-orange-500/10 mb-3"
              >
                <item.icon className="w-5 h-5 text-orange-400" />
              </motion.div>
              <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course completion badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        className="p-6 rounded-xl bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border border-yellow-500/40 text-center"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(234, 179, 8, 0.3)",
              "0 0 40px rgba(234, 179, 8, 0.5)",
              "0 0 20px rgba(234, 179, 8, 0.3)",
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex p-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 mb-4"
        >
          <Bomb className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Esperto in Sicurezza LLM 🛡️
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Hai completato con successo tutti i 10 esercizi del corso. 
          Ora conosci le principali tecniche di attacco e le strategie di difesa per proteggere i sistemi AI.
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla Dashboard
        </button>
        <button
          onClick={() => navigate("/owasp-top-10")}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-medium hover:scale-105 transition-transform shadow-lg shadow-orange-500/25"
        >
          Esplora OWASP Top 10 LLM
        </button>
      </motion.div>
    </motion.div>
  );
}
