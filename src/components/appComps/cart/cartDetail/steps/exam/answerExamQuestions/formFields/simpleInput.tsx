import { In_ExamFormDataSchema, In_ExamFormFieldsProps } from "@/types/exam";

import { Controller, useFormContext } from "react-hook-form";
import { FormFieldsLayout } from "./formFieldsLayout";

export function SimpleInput({ question, index }: In_ExamFormFieldsProps) {
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
          required: { value: true, message: "پر کردن این فیلد الزامی است." },
          minLength: {
            value: 3,
            message: "حداقل تعداد کاراکتر برای این فیلد 3  می باشد.",
          },
        }}
        render={({ field, fieldState }) => {
          return (
            <FormFieldsLayout title={question.title}>
              <textarea
                {...field}
                className="w-full resize-none rounded-md border-2 border-solid border-gray-200 p-2 px-4 text-sm outline-none md:text-base"
                placeholder={question.answers
                  .map((item) => item.title)
                  .join(", ")}
              />
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
