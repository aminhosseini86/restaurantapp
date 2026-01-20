import { getProfile } from "@/services/api/profile";
import { useQuery } from "@tanstack/react-query";

function useGetProfile() {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: getProfile,
  });
}

export default useGetProfile;
