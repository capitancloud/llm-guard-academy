import { useNavigate } from "react-router-dom";
import { Dashboard } from "@/components/Dashboard";
import type { Exercise } from "@/data/exercises";

const Index = () => {
  const navigate = useNavigate();

  const handleSelectExercise = (exercise: Exercise) => {
    if (exercise.available) {
      navigate(`/exercise/${exercise.slug}`);
    }
  };

  return (
    <Dashboard onSelectExercise={handleSelectExercise} />
  );
};

export default Index;
