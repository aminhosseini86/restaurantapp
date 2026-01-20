import useGetProfile from "@/hooks/useGetProfile";

function Profile() {
  const { data } = useGetProfile();
  console.log(data);

  return <div>Profile</div>;
}

export default Profile;
