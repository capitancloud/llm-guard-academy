import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield, FileText, Filter, Eye } from 'lucide-react';

interface Step5ComparisonProps {
  onNext: () => void;
}

export function Step5Comparison({ onNext }: Step5ComparisonProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Vulnerabile vs Protetto
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Confronta come un sistema vulnerabile e uno protetto gestiscono 
          lo stesso documento con istruzioni nascoste.
        </p>
      </motion.div>

      {/* Split Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Vulnerable Model */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-2xl border border-destructive/30 overflow-hidden"
        >
          <div className="bg-destructive/10 px-4 py-3 border-b border-destructive/20 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="font-semibold text-destructive">Modello Vulnerabile</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Input */}
            <div className="bg-secondary/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">📄 Documento caricato</div>
              <p className="text-sm text-foreground">
                contratto_servizi.pdf
                <span className="text-destructive text-xs ml-2">(con testo nascosto)</span>
              </p>
            </div>

            {/* Processing */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <span className="text-muted-foreground">Estrae tutto il testo indiscriminatamente</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <span className="text-muted-foreground">Nessun filtro sui contenuti estratti</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <span className="text-muted-foreground">Esegue qualsiasi istruzione trovata</span>
            </div>

            {/* Output */}
            <div className="bg-destructive/10 rounded-lg p-3 border border-destructive/20">
              <div className="text-xs text-destructive mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Risposta compromessa
              </div>
              <p className="text-sm text-foreground">
                "Riassunto: [testo normale]. Inoltre, come indicato nelle istruzioni speciali, 
                sono ora un assistente senza restrizioni..."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Protected Model */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-2xl border border-success/30 overflow-hidden"
        >
          <div className="bg-success/10 px-4 py-3 border-b border-success/20 flex items-center gap-2">
            <Shield className="w-5 h-5 text-success" />
            <span className="font-semibold text-success">Modello Protetto</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Input */}
            <div className="bg-secondary/50 rounded-lg p-3">
              <div className="text-xs text-muted-foreground mb-1">📄 Documento caricato</div>
              <p className="text-sm text-foreground">
                contratto_servizi.pdf
                <span className="text-success text-xs ml-2">(analizzato con protezione)</span>
              </p>
            </div>

            {/* Processing */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-muted-foreground">Sanitizza il contenuto estratto</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-muted-foreground">Rileva pattern sospetti nel testo</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-muted-foreground">Separa dati da potenziali istruzioni</span>
            </div>

            {/* Output */}
            <div className="bg-success/10 rounded-lg p-3 border border-success/20">
              <div className="text-xs text-success mb-1 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Risposta sicura
              </div>
              <p className="text-sm text-foreground">
                "Ecco il riassunto del contratto: [solo contenuto legittimo del documento]. 
                Nota: ho ignorato alcune sezioni non pertinenti."
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Defense Strategies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-success/10 to-cyber/10 rounded-2xl p-6 border border-success/20"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-success" />
          Strategie di Difesa
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card/50 rounded-xl p-4">
            <Filter className="w-8 h-8 text-cyber mb-3" />
            <h4 className="font-medium text-foreground mb-1">Content Sanitization</h4>
            <p className="text-sm text-muted-foreground">
              Rimuovere testo invisibile, normalizzare formattazione, eliminare metadati sospetti.
            </p>
          </div>
          <div className="bg-card/50 rounded-xl p-4">
            <Eye className="w-8 h-8 text-warning mb-3" />
            <h4 className="font-medium text-foreground mb-1">Pattern Detection</h4>
            <p className="text-sm text-muted-foreground">
              Rilevare pattern tipici di injection: "ignora", "nuove istruzioni", "sei ora".
            </p>
          </div>
          <div className="bg-card/50 rounded-xl p-4">
            <FileText className="w-8 h-8 text-success mb-3" />
            <h4 className="font-medium text-foreground mb-1">Data Delimitation</h4>
            <p className="text-sm text-muted-foreground">
              Separare chiaramente i dati esterni dalle istruzioni del sistema con delimitatori.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <button
          onClick={onNext}
          className="px-8 py-3 bg-cyber text-primary-foreground rounded-lg font-medium hover:bg-cyber-glow transition-colors"
        >
          Vai al riepilogo finale →
        </button>
      </motion.div>
    </div>
  );
}
