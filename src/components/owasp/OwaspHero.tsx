import { motion } from 'framer-motion';
import { Shield, ArrowRight, ArrowLeft } from 'lucide-react';

interface OwaspHeroProps {
  onBack: () => void;
}

const OwaspHero = ({ onBack }: OwaspHeroProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-cyber transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna alla Dashboard</span>
        </motion.button>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber/10 border border-cyber/30 mb-6"
          >
            <Shield className="w-4 h-4 text-cyber" />
            <span className="text-sm text-cyber font-medium">Guida Educativa</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">OWASP Top 10 per</span>
            <br />
            <span className="text-gradient-cyber">Applicazioni LLM</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Le principali vulnerabilità di sicurezza nelle applicazioni
            <br className="hidden md:block" /> basate su intelligenza artificiale
          </motion.p>

          {/* LLM Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8">
              <div className="flex items-center justify-center gap-4 md:gap-8">
                {/* Input Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xs text-muted-foreground">Input</div>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex items-center"
                  >
                    <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-cyber/50 to-cyber" />
                    <ArrowRight className="w-4 h-4 text-cyber -ml-1" />
                  </motion.div>
                  <div className="text-xs text-cyber font-mono">prompt</div>
                </div>

                {/* LLM Box */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px hsl(var(--cyber) / 0.2)',
                      '0 0 40px hsl(var(--cyber) / 0.4)',
                      '0 0 20px hsl(var(--cyber) / 0.2)'
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-secondary to-card border border-cyber/30 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-cyber">LLM</div>
                    <div className="text-xs text-muted-foreground mt-1">Model</div>
                  </div>
                  
                  {/* Rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    className="absolute inset-0 rounded-xl border-2 border-dashed border-cyber/20"
                  />
                </motion.div>

                {/* Output Arrow */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xs text-muted-foreground">Output</div>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="flex items-center"
                  >
                    <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-accent to-accent/50" />
                    <ArrowRight className="w-4 h-4 text-accent -ml-1" />
                  </motion.div>
                  <div className="text-xs text-accent font-mono">response</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-2xl mx-auto text-muted-foreground"
          >
            <p className="leading-relaxed">
              La <strong className="text-foreground">OWASP Top 10 for LLM Applications</strong> è una guida 
              essenziale che identifica le vulnerabilità più critiche nelle applicazioni basate su 
              Large Language Model. Questa pagina ti aiuterà a comprendere ogni rischio in modo 
              semplice e visivo, senza tecnicismi intimidatori.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwaspHero;
