import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "About",
};

const AboutPage = () => {
  return (
    <p className='text-xl text-center'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam aperiam
      eos earum labore provident in.
    </p>
  );
};

export default AboutPage;
