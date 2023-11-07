import { FC } from "react";

import Link from "next/link";

const Header: FC = () => {
  return (
    <header className='bg-zinc-900 p-8'>
      <div className='container mx-auto'>
        <ul className='flex justify-center text-sky-400 '>
          <li className='mx-3 hover:text-sky-200 '>
            <Link href='/'>Home</Link>
          </li>
          <li className='mx-3 hover:text-sky-200 '>
            <Link href='/users'>Users</Link>
          </li>
          <li className='mx-3 hover:text-sky-200'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
