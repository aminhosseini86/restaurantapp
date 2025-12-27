export interface In_Exam_Slide {
  id: number;
  slider_id: string;
  media_id: string;
  cover_id: string | null;
  type_id: string;
  order: string;
  created_at: string;
  updated_at: string;
  media_url: string;
  cover_url: string | null;
}

export interface In_Exam_Slider {
  id: number;
  name: string;
  show_type: string;
  created_at: string;
  updated_at: string;
  slides: In_Exam_Slide[];
}

export interface In_Exam_QuestionType {
  id: number;
  title: string;
  active: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface In_Exam_Answer {
  id: number;
  question_id: string;
  title: string;
  image_id: string | null;
  is_right: string;
  score: string | null;
  deleted_at: string | null;
}

export interface In_Exam_Question {
  id: number;
  bank_id: string;
  title: string;
  description: string | null;
  type_id: string;
  is_force: string;
  image_id: string | null;
  video_id: string | null;
  score: string;
  session: string | null;
  page: string | null;
  book: string | null;
  degree: string | null;
  lat: string | null;
  lan: string | null;
  slider_id: string;
  deleted_at: string | null;
  slider: In_Exam_Slider;
  answers: In_Exam_Answer[];
  type: In_Exam_QuestionType;
}

export interface In_Exam_ExamQuestion {
  id: number;
  exam_id: string;
  question_id: string;
  score: string | null;
  exam_order: string;
  question: In_Exam_Question;
}

export interface In_Exam_OrderDescription {
  id: number;
  title: string;
  bank_id: string;
  score: string | null;
  deleted_at: string | null;
  redirect: string | null;
  message: string | null;
  cover_image: string | null;
  login_status: string;
  category_id: string;
  questions: In_Exam_ExamQuestion[];
}

export interface In_Exam_OrderDescriptionResponse {
  success: boolean;
  data?: In_Exam_OrderDescription;
  error?: string;
}

export interface In_Exam_AnswerSubmission {
  exam_id: string;
  question_id: string;
  answer_id?: string;
  answer_text?: string;
  selected_option_ids?: string[];
}

export interface In_Exam_OrderSubmission {
  token: string;
  exam_id: string;
  answers: In_Exam_AnswerSubmission[];
  submitted_at: string;
}

export enum In_Exam_QuestionTypeEnum {
  MULTIPLE_CHOICE = 1,
  SINGLE_CHOICE = 2,
  DESCRIPTIVE = 3,
}

export type In_Exam_QuestionTypeMap = {
  [key in In_Exam_QuestionTypeEnum]: string;
};
