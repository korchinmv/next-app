import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Not Found page",
  description: "Not Found page",
};

const NotFoundPage = () => {
  return (
    <div>
      <Image
        className='mx-auto'
        src='/404.png'
        alt='Image'
        width={450}
        height={450}
      />
    </div>
  );
};

export default NotFoundPage;
