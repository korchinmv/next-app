import { IUsers } from "@/interfaces";
import Link from "next/link";

interface Props {
  users: IUsers[];
}

const UsersList = ({ users }: Props) => {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20 '>
      {users.map((user) => {
        return (
          <li
            className='p-5 cursor-pointer border border-sky-500 hover:shadow-xl transition-shadow ease-in delay-50'
            key={user.id}
          >
            <Link href={`/users/${user.id}`}>
              <h3 className=''>{user.name}</h3>
              <p className=''>{user.email}</p>
              <p className=''>{user.phone}</p>
              <p className=''>{user.website}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
