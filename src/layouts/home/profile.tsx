import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TempImage from "@/assets/image/account.png";

function Profile() {
  return (
    <div>
      <Avatar className="size-12">
        <AvatarImage className="w-full" src={TempImage} />
        <AvatarFallback>
          <img className="w-full" src={TempImage} />
        </AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Profile;
