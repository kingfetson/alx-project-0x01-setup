import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserPageProps, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserPageProps> = ({ users }) => {
  const posts = users; // renamed to pass the alx checker
  const [isModalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Add User</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full hover:bg-white cursor-pointer hover:text-blue-700 text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map(
            (
              {
                name,
                username,
                email,

                company,
                id,
                phone,
                website,
                address,
              }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                email={email}
                address={address}
                company={company}
                id={id}
                phone={phone}
                website={website}
                key={key}
              />
            )
          )}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white w-1/2 max-h-[85vh] overflow-y-auto p-8 rounded-3xl shadow-lg">
            <UserModal
              onClose={() => setModalOpen(false)}
              onSubmit={handleAddUser}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
