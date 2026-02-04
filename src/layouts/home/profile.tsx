import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TempImage from "@/assets/image/account.png";
import { useNavigate } from "react-router-dom";

function ProfileAvatar() {
  const navigate = useNavigate();
  return (
    <div>
      <Avatar
        className="size-9 cursor-pointer md:size-12"
        onClick={() => {
          navigate("/profile");
        }}
      >
        <AvatarImage className="w-full" src={TempImage} />
        <AvatarFallback>
          <img className="w-full" src={TempImage} />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default ProfileAvatar;
