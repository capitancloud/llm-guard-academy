import { useNavigate } from "react-router-dom";
import { ChainOfThoughtExercise } from "@/components/exercise/chainofthought/ChainOfThoughtExercise";

export default function ChainOfThoughtPage() {
  const navigate = useNavigate();

  return (
    <ChainOfThoughtExercise
      onComplete={() => navigate("/")}
      onBack={() => navigate("/")}
    />
  );
}
