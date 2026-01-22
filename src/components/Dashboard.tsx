import { motion } from "framer-motion";
import { exercises } from "@/data/exercises";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Header } from "@/components/Header";
import type { Exercise } from "@/data/exercises";

interface DashboardProps {
  onSelectExercise: (exercise: Exercise) => void;
}

export function Dashboard({ onSelectExercise }: DashboardProps) {
  const availableCount = exercises.filter((e) => e.available).length;
  const totalCount = exercises.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30">
              🧪 Laboratorio Interattivo
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Impara la <span className="text-gradient-cyber">Sicurezza LLM</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Esplora le vulnerabilità dei Large Language Model attraverso simulazioni 
            guidate. Nessun codice, nessun exploit: solo comprensione.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">
                {availableCount}/{totalCount} esercizi disponibili
              </span>
            </div>
            <span className="text-border">|</span>
            <span className="text-accent font-medium">
              Altri in arrivo!
            </span>
          </div>
        </motion.div>

        {/* Progress overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 p-4 rounded-lg bg-card border border-border flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-semibold text-foreground">Il tuo percorso</h3>
            <p className="text-sm text-muted-foreground">
              Inizia dal primo esercizio per costruire le basi della sicurezza AI
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full" 
                style={{ width: `${(availableCount / totalCount) * 100}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {Math.round((availableCount / totalCount) * 100)}%
            </span>
          </div>
        </motion.div>

        {/* Exercise grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              index={index}
              onSelect={onSelectExercise}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>
            🔒 Questo laboratorio è puramente educativo. 
            Nessuna tecnica operativa o payload reale viene mostrata.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
