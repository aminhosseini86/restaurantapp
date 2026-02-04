import { createContext, useContext, useEffect, useState } from "react";
import { EditAbleCartList } from "./EditAbleCartList/EditAbleCartList";
import { getFromSessionStorage, setSessionStorage } from "@/services/storages";
import { AnswerExamQuestions } from "./exam/answerExamQuestions";
import Address from "./address";

interface In_StepContext {
  currentStep: string;
  handleSetCurrentStep: (s: string) => void;
}

const StepContext = createContext<null | In_StepContext>(null);

function CartDetailSteps() {
  const step = getFromSessionStorage("cartStepId");

  const [currentStep, setCurrentStep] = useState(step || "1");

  const handleSetCurrentStep = (s: string) => {
    setCurrentStep(s);
    setSessionStorage<string>("cartStepId", s);
  };

  const stepsList = [
    {
      id: "1",
      comp: <EditAbleCartList />,
    },
    {
      id: "2",
      comp: <AnswerExamQuestions />,
    },
    {
      id: "3",
      comp: <Address />,
    },
  ];

  useEffect(() => {
    if (!step) {
      setSessionStorage<number>("cartStepId", 1);
    }
  }, []);

  return (
    <StepContext.Provider value={{ currentStep, handleSetCurrentStep }}>
      {stepsList.find((item) => item.id === currentStep)?.comp ||
        "مرحله ورود نظر یافت نشد."}
    </StepContext.Provider>
  );
}

export function useCartSteps(): In_StepContext {
  const context = useContext(StepContext);

  if (context) {
    return context;
  } else {
    throw Error("کانتکست نیست.");
  }
}

export { CartDetailSteps };
