import UsersList from "@/components/UsersList";

import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Users page",
  description: "Users page",
};

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Ошибка загрузки данных..");
  return res.json();
};

const UsersPage: NextPage = async () => {
  const dataUsers = await getUsers();
  return <UsersList users={dataUsers} />;
};

export default UsersPage;
