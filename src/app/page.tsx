import Title from "@/components/Title";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home",
};

const HomePage = () => {
  return (
    <>
      <Title name='Home page' />
    </>
  );
};

export default HomePage;
