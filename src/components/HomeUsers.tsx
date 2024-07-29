"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeUsers() {
  const [users, setUsers] = useState([]);
  const bringData = async () => {
    const data = await fetch("/api/users").then((res) => res.json());
    return data;
  };
  useEffect(() => {
    (async () => {
      setUsers(await bringData());
    })();
  }, []);

  return (
    <>
      <div id="cards" className="cards">
        {users.map((user: object[]) => (
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
        ))}
      </div>
    </>
  );
}
