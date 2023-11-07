import Title from "@/components/Title";
import { getTitle } from "@/utils/getTitle";

import { Metadata } from "next";

const title = getTitle("Home page");

export const metadata: Metadata = {
  title,
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
