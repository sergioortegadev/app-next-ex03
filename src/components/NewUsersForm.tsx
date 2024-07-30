"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface User {
  firstName: string;
  lastName: string;
  age: number | undefined;
}
let initUser: User = {
  firstName: "",
  lastName: "",
  age: undefined,
};

export default function NewUsersForm() {
  const [newUser, setNewUser] = useState(initUser);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(postUser(newUser));
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: name === "age" ? Number(value) : value,
    });
  }

  async function postUser(newUser: object) {
    const data = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    return data;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-1 py-2 m-2 bg-slate-500 mx-auto w-fit rounded-lg border-transparent border-4 hover:border-slate-600"
      >
        <input
          className="input"
          type="text"
          name="firstName"
          placeholder="name"
          value={newUser.firstName}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="lastName"
          placeholder="last name"
          value={newUser.lastName}
          onChange={handleChange}
        />
        <input
          className="input"
          type="number"
          name="age"
          placeholder="age"
          value={newUser.age || ""}
          onChange={handleChange}
        />
        <input className="button-blue" type="submit" name="age" value="➕" />
      </form>
    </>
  );
}
