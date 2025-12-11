import loginSendOtp from "@/services/api/loginSendOtp";
import { In_ApiRes } from "@/types/";
import { useMutation } from "@tanstack/react-query";

function useLoginSendOtp() {
  return useMutation<In_ApiRes<string>, In_ApiRes<any>, string>({
    mutationFn: loginSendOtp,
  });
}

export { useLoginSendOtp };
