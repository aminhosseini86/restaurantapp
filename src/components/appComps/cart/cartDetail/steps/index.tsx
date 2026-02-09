import { createContext, useContext, useState } from "react";
import { Address } from "./address";
import { EditAbleCartList } from "./EditAbleCartList/EditAbleCartList";
import { AnswerExamQuestions } from "./exam/answerExamQuestions";

interface In_StepContext {
  currentStep: number;
  handleSetCurrentStep: (s: number) => void;
}

const StepContext = createContext<null | In_StepContext>(null);

function CartDetailSteps() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSetCurrentStep = (s: number) => {
    setCurrentStep(s);
  };

  const stepsList = [
    {
      id: 1,
      comp: <EditAbleCartList />,
    },
    {
      id: 2,
      comp: <AnswerExamQuestions />,
    },
    {
      id: 3,
      comp: <Address />,
    },
  ];

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
