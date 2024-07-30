//import HomeUsers from "../components/HomeUsers";
import Image from "next/image";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import NewUsersForm from "@/components/NewUsersForm";

async function loadUsers() {
  await connectDB();
  const users = await User.find();

  return users;
}

export default async function Home() {
  const users = await loadUsers();
  return (
    <>
      <h1 className="text-3xl text-center mt-4">NEXT App Ex 03</h1>
      <NewUsersForm />
      <h1 className="text-3xl text-center mt-4">All Users</h1>
      {/* <HomeUsers />   client side component */}
      <div id="cards" className="cards">
        {users.length === 0 ? (
          <h3 className="text-lg font-thin mt-8 px-4 py-1 font-mono bg-yellow-400 text-gray-900 rounded-xl">
            [ DB empty ]
          </h3>
        ) : (
          users.map((user: object[]) => (
            <figure key={user._id} className="card">
              <Image
                src={`https://i.pravatar.cc/200?u=${user._id}`}
                alt="foto perfil"
                width={200}
                height={200}
                priority
              />
              <figcaption>{user.firstName}</figcaption>
              <h4>{user.lastName}</h4>
            </figure>
          ))
        )}
      </div>
    </>
  );
}
