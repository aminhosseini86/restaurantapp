import { getListOfBeforePayQuestions } from "@/services/api/exams";
import { In_ApiRes } from "@/types/";
import { In_Exam_OrderDescription } from "@/types/exam";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useGetListOfBeforePayQuestions() {
  return useQuery<
    In_ApiRes<In_Exam_OrderDescription>,
    AxiosError<In_ApiRes<null>>
  >({
    queryKey: ["getListOfBeforePayQuestions"],
    queryFn: getListOfBeforePayQuestions,
  });
}
