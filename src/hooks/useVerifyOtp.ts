import verifyOtp, { In_VerifyOtpBody } from "@/services/api/verifyOtp";
import { In_ApiRes } from "@/types/";
import { In_LoginResponse } from "@/types/login";
import { useMutation } from "@tanstack/react-query";

function useVerifyOtp() {
  return useMutation<
    In_ApiRes<In_LoginResponse>,
    In_ApiRes<any>,
    In_VerifyOtpBody
  >({
    mutationFn: verifyOtp,
  });
}

export default useVerifyOtp;
