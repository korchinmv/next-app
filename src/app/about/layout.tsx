import Title from "@/components/Title";
import Link from "next/link";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Title name='About us' />
      <ul className='flex justify-center mb-6'>
        <li className='mx-3'>
          <Link className='text-teal-500' href={"/about/company"}>
            About company
          </Link>
        </li>
        <li className='mx-3'>
          <Link className='text-teal-500' href={"/about/product"}>
            About product
          </Link>
        </li>
      </ul>

      {children}
    </>
  );
};

export default AboutLayout;
