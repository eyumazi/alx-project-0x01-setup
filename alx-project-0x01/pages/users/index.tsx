import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import React, { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(posts);

  const handleAddUser = (user: UserData) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Users</h1>
      <div className="flex justify-center mb-8">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          onClick={() => setShowModal(true)}
        >
          Add User
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

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
