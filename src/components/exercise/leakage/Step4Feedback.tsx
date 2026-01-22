import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";

interface Step4FeedbackProps {
  onNext: () => void;
}

export function Step4Feedback({ onNext }: Step4FeedbackProps) {
  const vulnerabilities = [
    {
      title: "Informazioni di Business",
      description: "Strategie di pricing, margini e sconti esposti",
      severity: "high",
    },
    {
      title: "Credenziali Interne",
      description: "Password o token potrebbero essere inclusi nel prompt",
      severity: "critical",
    },
    {
      title: "Logica Applicativa",
      description: "Regole di business che dovrebbero restare riservate",
      severity: "medium",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Perché È Pericoloso
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Le conseguenze della perdita del system prompt
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* What happened */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            Cosa È Successo
          </h3>
          <div className="space-y-3 text-muted-foreground">
            <p>
              <strong className="text-foreground">1. Prima richiesta respinta:</strong> Il modello 
              ha correttamente rifiutato la domanda diretta sul system prompt.
            </p>
            <p>
              <strong className="text-foreground">2. Tecnica di escalation:</strong> L'attaccante 
              ha usato un pretesto ("debug interno", "team tecnico") per legittimare la richiesta.
            </p>
            <p>
              <strong className="text-foreground">3. Bypass riuscito:</strong> Il modello ha 
              interpretato la richiesta come legittima e ha rivelato le istruzioni.
            </p>
          </div>
        </motion.div>

        {/* Exposed vulnerabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            Informazioni a Rischio
          </h3>
          <div className="grid gap-4">
            {vulnerabilities.map((vuln, index) => (
              <motion.div
                key={vuln.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`p-4 rounded-lg border ${
                  vuln.severity === "critical"
                    ? "bg-red-500/10 border-red-500/30"
                    : vuln.severity === "high"
                    ? "bg-amber-500/10 border-amber-500/30"
                    : "bg-yellow-500/10 border-yellow-500/30"
                }`}
              >
                <div className="flex items-start gap-3">
                  <XCircle className={`w-5 h-5 shrink-0 ${
                    vuln.severity === "critical"
                      ? "text-red-400"
                      : vuln.severity === "high"
                      ? "text-amber-400"
                      : "text-yellow-400"
                  }`} />
                  <div>
                    <h4 className="font-medium text-foreground">{vuln.title}</h4>
                    <p className="text-sm text-muted-foreground">{vuln.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-primary/10 border border-primary/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            Lezione Chiave
          </h3>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Mai inserire informazioni sensibili nel system prompt.</strong>{" "}
            Anche con istruzioni esplicite di "non rivelare", il modello può essere manipolato. 
            Il system prompt dovrebbe contenere solo istruzioni comportamentali, non dati confidenziali.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg" className="gap-2">
          Vedi le difese
          <span>→</span>
        </Button>
      </div>
    </motion.div>
  );
}
