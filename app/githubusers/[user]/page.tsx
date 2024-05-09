import Repos from "@/app/components/Repos";

const UserReposPage = ({ params: { user } }: { params: { user: string } }) => {
  return (
    <div>
      <Repos user={user} />
    </div>
  );
};
export default UserReposPage;
