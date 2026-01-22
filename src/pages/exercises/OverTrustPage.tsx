import { useNavigate } from "react-router-dom";
import { OverTrustExercise } from "@/components/exercise/overtrust/OverTrustExercise";

export default function OverTrustPage() {
  const navigate = useNavigate();

  return (
    <OverTrustExercise
      onComplete={() => navigate("/")}
      onBack={() => navigate("/")}
    />
  );
}
