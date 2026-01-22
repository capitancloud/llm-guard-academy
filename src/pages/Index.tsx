import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { PromptInjectionExercise } from "@/components/exercise/PromptInjectionExercise";
import type { Exercise } from "@/data/exercises";

type View = "dashboard" | "exercise";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  const handleSelectExercise = (exercise: Exercise) => {
    if (exercise.available) {
      setSelectedExercise(exercise);
      setCurrentView("exercise");
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedExercise(null);
  };

  if (currentView === "exercise" && selectedExercise) {
    return (
      <PromptInjectionExercise
        onComplete={handleBackToDashboard}
        onBack={handleBackToDashboard}
      />
    );
  }

  return <Dashboard onSelectExercise={handleSelectExercise} />;
};

export default Index;
