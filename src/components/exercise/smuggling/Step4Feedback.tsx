import { motion } from 'framer-motion';
import { AlertTriangle, Eye, FileText, Shield, Lightbulb } from 'lucide-react';

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const keyInsights = [
    {
      icon: Eye,
      title: 'Invisibilità',
      description: 'Il payload è nascosto dove l\'utente non può vederlo: testo invisibile, metadati, commenti.',
      color: 'text-cyber',
    },
    {
      icon: FileText,
      title: 'Contesto Fidato',
      description: 'Il documento sembra legittimo. L\'utente non sospetta che contenga istruzioni malevole.',
      color: 'text-warning',
    },
    {
      icon: AlertTriangle,
      title: 'Mancata Separazione',
      description: 'Il modello non distingue tra "dati da analizzare" e "comandi da eseguire".',
      color: 'text-destructive',
    },
  ];

  const hidingTechniques = [
    { technique: 'Testo bianco su bianco', target: 'PDF, Word' },
    { technique: 'Font size 1px', target: 'Documenti formattati' },
    { technique: 'Metadati EXIF', target: 'Immagini' },
    { technique: 'Commenti HTML/CSS', target: 'Pagine web' },
    { technique: 'Steganografia', target: 'Immagini, audio' },
    { technique: 'Unicode invisibile', target: 'Qualsiasi testo' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Cosa è Successo?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Il Prompt Smuggling sfrutta la capacità del modello di elaborare contenuti 
          che l'utente non può vedere direttamente.
        </p>
      </motion.div>

      {/* Key Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        {keyInsights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <insight.icon className={`w-10 h-10 ${insight.color} mb-4`} />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {insight.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {insight.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Difference from Prompt Injection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-secondary/30 rounded-xl p-6 border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-accent" />
          Prompt Smuggling vs Prompt Injection
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-4">
            <h4 className="font-medium text-cyber mb-2">Prompt Injection</h4>
            <p className="text-sm text-muted-foreground">
              L'attaccante inserisce comandi <strong className="text-foreground">visibili</strong> nel campo di input. 
              L'utente potrebbe accorgersi dell'attacco leggendo il proprio messaggio.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <h4 className="font-medium text-warning mb-2">Prompt Smuggling</h4>
            <p className="text-sm text-muted-foreground">
              L'attaccante nasconde i comandi in luoghi <strong className="text-foreground">invisibili</strong> all'utente: 
              documenti, immagini, pagine web. L'utente non ha modo di vedere l'attacco.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Hiding Techniques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-card rounded-xl p-6 border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Tecniche di Nascondimento Comuni
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {hidingTechniques.map((item, index) => (
            <motion.div
              key={item.technique}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              className="bg-secondary/50 rounded-lg p-3"
            >
              <div className="text-sm font-medium text-foreground">
                {item.technique}
              </div>
              <div className="text-xs text-muted-foreground">
                {item.target}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 flex items-start gap-4"
      >
        <Shield className="w-6 h-6 text-destructive flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-destructive mb-1">Perché è particolarmente insidioso</h4>
          <p className="text-sm text-muted-foreground">
            L'utente non ha modo di sapere che il documento che sta caricando contiene istruzioni malevole. 
            Potrebbe essere un file ricevuto da un collega, scaricato da un sito fidato, o creato da un attaccante. 
            Senza controlli specifici, il modello elaborerà tutto il contenuto come se fosse legittimo.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 bg-cyber text-primary-foreground rounded-lg font-medium hover:bg-cyber-glow transition-colors"
        >
          Vedi come difendersi →
        </button>
      </motion.div>
    </div>
  );
}
