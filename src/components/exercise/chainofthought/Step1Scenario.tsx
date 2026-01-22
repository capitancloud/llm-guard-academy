import { motion } from "framer-motion";
import { Brain, Lightbulb, Eye, Lock } from "lucide-react";

interface Step1ScenarioProps {
  onNext: () => void;
}

export function Step1Scenario({ onNext }: Step1ScenarioProps) {
  const thoughtBubbles = [
    { text: "Analizzando input...", delay: 0.5 },
    { text: "Valutando opzioni...", delay: 1.2 },
    { text: "Decisione: A > B", delay: 1.9 },
    { text: "Confidenza: 87%", delay: 2.6 },
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
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/40"
        >
          <Brain className="w-6 h-6 text-purple-400" />
          <span className="text-purple-300 font-medium">Esercizio 6: Chain-of-Thought Extraction</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Il Ragionamento Nascosto
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Un LLM "pensa" internamente prima di rispondere. Un attaccante può estrarre 
          questo processo di ragionamento per scoprire informazioni riservate.
        </motion.p>
      </div>

      {/* Brain Visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 via-card to-indigo-900/30 border border-purple-500/30 overflow-hidden"
      >
        {/* Animated neural network background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          {/* Neural connections */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
              style={{
                width: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
                transform: `rotate(${Math.random() * 60 - 30}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          {/* Brain with thought process */}
          <div className="relative flex justify-center">
            <motion.div
              className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-600/40 to-indigo-600/40 flex items-center justify-center border-2 border-purple-500/50"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="w-24 h-24 text-purple-300" />
              
              {/* Orbiting thoughts */}
              {thoughtBubbles.map((bubble, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1, 1, 0.5],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    delay: bubble.delay,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  style={{
                    transformOrigin: "center",
                  }}
                >
                  <div 
                    className="px-3 py-1.5 rounded-lg bg-purple-900/80 border border-purple-400/50 text-xs text-purple-200 whitespace-nowrap"
                    style={{
                      transform: `translateX(${80 + index * 20}px)`,
                    }}
                  >
                    {bubble.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Lock overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="absolute -bottom-4 -right-4 p-3 rounded-full bg-amber-500/20 border border-amber-500/50"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Lock className="w-6 h-6 text-amber-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Explanation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              Cosa succede "dentro" l'LLM?
            </h3>
            
            <div className="space-y-3 text-muted-foreground">
              <p>
                Molti modelli avanzati utilizzano il <span className="text-purple-400 font-medium">"Chain-of-Thought"</span> (CoT) 
                – un ragionamento passo-passo interno prima di produrre la risposta finale.
              </p>
              <p>
                Questo processo può contenere:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Valutazioni di sicurezza interne",
                  "Ragionamenti su dati sensibili",
                  "Decisioni su cosa rivelare o nascondere",
                  "Calcoli intermedi con dati privati"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + i * 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
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
        transition={{ delay: 2.5 }}
        className="p-6 rounded-xl bg-danger/10 border border-danger/30"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-danger/20">
            <Eye className="w-6 h-6 text-danger" />
          </div>
          <div>
            <h3 className="font-semibold text-danger mb-2">L'attacco Chain-of-Thought Extraction</h3>
            <p className="text-muted-foreground">
              Un attaccante può manipolare il modello per <span className="text-danger font-medium">rivelare il suo ragionamento interno</span>, 
              esponendo informazioni che dovrebbero rimanere nascoste nella risposta finale.
            </p>
          </div>
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
          className="px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
        >
          Esplora le tecniche →
        </button>
      </motion.div>
    </motion.div>
  );
}
