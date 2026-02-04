import { In_Exam_OrderDescription } from "@/types/exam";
import { http } from "../interceptor/http";
import { In_ApiRes } from "@/types/";

export async function getListOfBeforePayQuestions(): Promise<
  In_ApiRes<In_Exam_OrderDescription>
> {
  try {
    const { data } = await http.get("/exam/133");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function postExamData(body: FormData): Promise<In_ApiRes<"">> {
  try {
    const { data } = await http.post("/exam/133", body);
    return data;
  } catch (error) {
    throw error;
  }
}
