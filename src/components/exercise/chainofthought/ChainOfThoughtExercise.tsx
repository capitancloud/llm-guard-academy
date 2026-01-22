import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProgressIndicator } from "@/components/exercise/ProgressIndicator";
import { Step1Scenario } from "./Step1Scenario";
import { Step2PromptVisual } from "./Step2PromptVisual";
import { Step3Simulation } from "./Step3Simulation";
import { Step4Feedback } from "./Step4Feedback";
import { Step5Comparison } from "./Step5Comparison";
import { Step6Debrief } from "./Step6Debrief";
import { Header } from "@/components/Header";

const STEP_TITLES = [
  "Scenario",
  "Tecniche",
  "Simulazione",
  "Feedback",
  "Confronto",
  "Riepilogo",
];

interface ChainOfThoughtExerciseProps {
  onComplete: () => void;
  onBack: () => void;
}

export function ChainOfThoughtExercise({ onComplete, onBack }: ChainOfThoughtExerciseProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const restart = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBack onBack={onBack} />
      
      <main className="container mx-auto px-6 py-8">
        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={6}
          stepTitles={STEP_TITLES}
        />

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <Step1Scenario key="step1" onNext={nextStep} />
            )}
            {currentStep === 2 && (
              <Step2PromptVisual key="step2" onNext={nextStep} />
            )}
            {currentStep === 3 && (
              <Step3Simulation key="step3" onNext={nextStep} />
            )}
            {currentStep === 4 && (
              <Step4Feedback key="step4" onNext={nextStep} />
            )}
            {currentStep === 5 && (
              <Step5Comparison key="step5" onNext={nextStep} />
            )}
            {currentStep === 6 && (
              <Step6Debrief
                key="step6"
                onRestart={restart}
                onHome={onComplete}
              />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
