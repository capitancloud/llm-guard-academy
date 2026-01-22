import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { ProgressIndicator } from '../ProgressIndicator';
import { Step1Scenario } from './Step1Scenario';
import { Step2PromptVisual } from './Step2PromptVisual';
import { Step3Simulation } from './Step3Simulation';
import { Step4Feedback } from './Step4Feedback';
import { Step5Comparison } from './Step5Comparison';
import { Step6Debrief } from './Step6Debrief';

interface SmugglingExerciseProps {
  onComplete: () => void;
  onBack: () => void;
}

const stepTitles = ['Scenario', 'Anatomia', 'Simulazione', 'Spiegazione', 'Confronto', 'Riepilogo'];

export function SmugglingExercise({ onComplete, onBack }: SmugglingExerciseProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Scenario onNext={handleNext} />;
      case 2:
        return <Step2PromptVisual onNext={handleNext} />;
      case 3:
        return <Step3Simulation onNext={handleNext} />;
      case 4:
        return <Step4Feedback onNext={handleNext} />;
      case 5:
        return <Step5Comparison onNext={handleNext} />;
      case 6:
        return <Step6Debrief onComplete={onComplete} onRestart={handleRestart} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBack onBack={onBack} />

      <main className="container mx-auto px-6 py-8">
        {/* Exercise Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-warning/10 text-warning text-sm font-medium mb-2">
            Esercizio 3 • Intermedio
          </span>
          <h1 className="text-2xl font-bold text-foreground">
            Prompt Smuggling
          </h1>
          <p className="text-muted-foreground">
            Nascondere comandi dove il modello non guarda
          </p>
        </motion.div>

        {/* Progress */}
        <ProgressIndicator stepTitles={stepTitles} currentStep={currentStep} totalSteps={6} />

        {/* Step Content */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
