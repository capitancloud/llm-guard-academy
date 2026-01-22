import { useNavigate } from "react-router-dom";
import { LeakageExercise } from "@/components/exercise/leakage/LeakageExercise";

const LeakagePage = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <LeakageExercise
      onComplete={handleComplete}
      onBack={handleBack}
    />
  );
};

export default LeakagePage;
