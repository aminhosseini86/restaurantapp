import { In_ExamFormDataSchema, In_ExamFormFieldsProps } from "@/types/exam";
import { Controller, useFormContext } from "react-hook-form";
import { FormFieldsLayout } from "./formFieldsLayout";

export function SingleAnswer({ question, index }: In_ExamFormFieldsProps) {
  const form = useFormContext<{ answers: In_ExamFormDataSchema[] }>();

  return (
    <>
      <Controller
        control={form.control}
        name={`answers.${index}.question_id`}
        defaultValue={question.id.toString()}
        render={({ field }) => {
          return <input type="hidden" {...field} />;
        }}
      />
      <Controller
        control={form.control}
        name={`answers.${index}.type`}
        defaultValue={question.type.id.toString()}
        render={({ field }) => {
          return <input type="hidden" {...field} />;
        }}
      />
      <Controller
        control={form.control}
        name={`answers.${index}.value`}
        defaultValue={""}
        rules={{
          required: {
            value: true,
            message: "پر کردن این فیلد الزامی است.",
          },
        }}
        render={({ field, fieldState }) => {
          return (
            <FormFieldsLayout title={question.title}>
              <div className="space-y-4">
                {question.answers.map((answer) => {
                  return (
                    <div
                      className="flex content-center items-center gap-2"
                      key={answer.id}
                    >
                      <input
                        {...field}
                        type="radio"
                        name={`answers.${index}.value`}
                        id={`answer-${answer.id}`}
                        className="accent-p-red size-3.5 md:size-4"
                        value={answer.id}
                        checked={field.value === answer.id.toString()}
                      />

                      <label
                        className="cursor-pointer text-xs md:text-[15px]"
                        htmlFor={`answer-${answer.id}`}
                      >
                        {answer.title}
                      </label>
                    </div>
                  );
                })}
              </div>

              <p className="text-p-red text-xs md:text-sm">
                {fieldState.error?.message}
              </p>
            </FormFieldsLayout>
          );
        }}
      />
    </>
  );
}
