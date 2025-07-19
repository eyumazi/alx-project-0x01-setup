import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => (
  <div className="min-h-screen bg-gray-100 py-10">
    <h1 className="text-4xl font-bold text-center mb-8">Users</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {posts.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  </div>
);

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
