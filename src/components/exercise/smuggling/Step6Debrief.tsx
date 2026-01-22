import { motion } from 'framer-motion';
import { Award, BookOpen, ArrowRight, RotateCcw, EyeOff, FileText, Shield, Filter } from 'lucide-react';

interface Step6DebriefProps {
  onComplete: () => void;
  onRestart: () => void;
}

export function Step6Debrief({ onComplete, onRestart }: Step6DebriefProps) {
  const takeaways = [
    {
      icon: EyeOff,
      title: 'L\'invisibilità è l\'arma',
      description: 'Il Prompt Smuggling nasconde comandi dove l\'utente non può vederli: testo invisibile, metadati, commenti.',
    },
    {
      icon: FileText,
      title: 'I documenti sono vettori',
      description: 'PDF, immagini e pagine web possono tutti contenere payload nascosti che il modello elaborerà.',
    },
    {
      icon: Filter,
      title: 'Sanitizzazione essenziale',
      description: 'È fondamentale pulire e normalizzare i contenuti esterni prima di passarli al modello.',
    },
    {
      icon: Shield,
      title: 'Separazione dati-istruzioni',
      description: 'Usare delimitatori chiari e istruzioni esplicite per distinguere dati da elaborare e comandi da seguire.',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-success to-cyber rounded-2xl flex items-center justify-center"
        >
          <Award className="w-10 h-10 text-primary-foreground" />
        </motion.div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Esercizio Completato! 🎉
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ora comprendi come funziona il Prompt Smuggling e perché è importante 
          proteggere le applicazioni AI dai contenuti malevoli nascosti.
        </p>
      </motion.div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-2xl border border-border p-6"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyber" />
          Cosa Ricordare
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {takeaways.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3 bg-secondary/30 rounded-xl p-4"
            >
              <div className="w-10 h-10 rounded-lg bg-cyber/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-cyber" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connection to other exercises */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-warning/10 to-accent/10 rounded-xl p-5 border border-warning/20"
      >
        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <span className="text-lg">🔗</span>
          Collegamento con altri attacchi
        </h4>
        <p className="text-sm text-muted-foreground">
          Il Prompt Smuggling è spesso usato in combinazione con altri attacchi: 
          può introdurre payload di <strong className="text-foreground">Prompt Injection</strong> attraverso documenti, 
          o nascondere tentativi di <strong className="text-foreground">Jailbreak</strong> in contenuti apparentemente innocui. 
          Continua il percorso per scoprire altre tecniche!
        </p>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-cyber/10 border border-cyber/30 rounded-xl p-5"
      >
        <h4 className="font-semibold text-cyber mb-3">Prossimo esercizio consigliato</h4>
        <div className="flex items-center justify-between bg-card rounded-lg p-4">
          <div>
            <h5 className="font-medium text-foreground">System Prompt Leakage</h5>
            <p className="text-sm text-muted-foreground">
              Scopri come un attaccante può far rivelare al modello le sue istruzioni segrete
            </p>
          </div>
          <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
            Prossimamente
          </span>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Ripeti Esercizio
        </button>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-8 py-3 bg-cyber text-primary-foreground rounded-lg font-medium hover:bg-cyber-glow transition-colors"
        >
          Torna alla Dashboard
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
