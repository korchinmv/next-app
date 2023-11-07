import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About company page",
  description: "About company page",
};

const AboutCompanyPage = () => {
  return (
    <>
      <h3 className='text-center mb-4'>About Company Page</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quam
        explicabo incidunt sed cum alias repellendus saepe aliquid molestias
        similique!
      </p>
    </>
  );
};

export default AboutCompanyPage;
