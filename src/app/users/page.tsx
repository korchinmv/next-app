import UsersList from "@/components/UsersList";

import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Users page",
  description: "Users page",
};

//revalidate-обновляет кэш по запросу каждый час (3600)
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) throw new Error("Ошибка загрузки данных..");
  return res.json();
};

const UsersPage: NextPage = async () => {
  const dataUsers = await getUsers();
  return <UsersList users={dataUsers} />;
};

export default UsersPage;
