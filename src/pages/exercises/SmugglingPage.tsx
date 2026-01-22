import { useNavigate } from "react-router-dom";
import { SmugglingExercise } from "@/components/exercise/smuggling/SmugglingExercise";

const SmugglingPage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <SmugglingExercise
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
};

export default SmugglingPage;
