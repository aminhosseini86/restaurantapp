import Button from "@/components/ui/button";
import { useGetListOfBeforePayQuestions, usePostExamData } from "@/hooks/exam";
import { In_ExamFormDataSchema } from "@/types/exam";
import { AlertBox } from "@/components/ui/alertBox";
import { FormProvider, useForm } from "react-hook-form";
import { ExamQuestionSkeleton } from "../examQuestionSkeleton";
import { MultiAnswer } from "./formFields/multiAnswer";
import { SimpleInput } from "./formFields/simpleInput";
import { SingleAnswer } from "./formFields/singleAnswer";
import { showDanger, showSuccess } from "@/components/ui/toast";
import { useCartSteps } from "../..";

function AnswerExamQuestions() {
  const { data, isLoading, isPending, isError, error } =
    useGetListOfBeforePayQuestions();

  if (isLoading || isPending) return <ExamQuestionSkeleton />;

  if (isError)
    return (
      <AlertBox variant="danger">
        {error.response?.data.message || "خطایی رخ داده است."}
      </AlertBox>
    );

  if (data)
    return (
      <div className="space-y-10">
        <h2 className="text-[17px] font-black lg:text-[23px]">
          {data.data.title}
        </h2>

        <QuestionList />
      </div>
    );
}

function QuestionList() {
  const { handleSetCurrentStep } = useCartSteps();
  const { data } = useGetListOfBeforePayQuestions();

  const form = useForm<{ answers: In_ExamFormDataSchema[] }>();
  const postExam = usePostExamData();

  const handleSubmit = (d: { answers: In_ExamFormDataSchema[] }) => {
    const formData = new FormData();

    d.answers.forEach((question, index) => {
      formData.append(`answers[${index}][question_id]`, question.question_id);
      formData.append(`answers[${index}][type]`, question.type);

      if (Array.isArray(question.value)) {
        formData.append(`answers[${index}][value]`, question.value.join(","));
      } else {
        formData.append(`answers[${index}][value]`, question.value);
      }
    });

    postExam.mutate(formData, {
      onSuccess(data) {
        showSuccess(data.message);
        handleSetCurrentStep("3");
      },

      onError(err) {
        showDanger(err.response?.data.message || "خطایی رخ داده است");
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          {data?.data.questions.map((item, index) => {
            const type = item.question.type.id;

            switch (type) {
              case 1:
                return (
                  <MultiAnswer
                    index={index}
                    key={item.question_id}
                    question={item.question}
                  />
                );

              case 2:
                return (
                  <SingleAnswer
                    index={index}
                    key={item.question_id}
                    question={item.question}
                  />
                );

              case 3:
                return (
                  <SimpleInput
                    index={index}
                    key={item.question_id}
                    question={item.question}
                  />
                );

              default:
                return <></>;
            }
          })}
        </div>
        <div className="flex content-center items-center">
          <Button
            type="submit"
            className="w-full md:w-[100px]"
            disabled={postExam.isPending}
          >
            {postExam.isPending ? " درحال ثبت سوالات ..." : "ثبت سوالات"}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}

export { AnswerExamQuestions };
