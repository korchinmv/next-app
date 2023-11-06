import { Metadata } from "next";

type Props = {
  params: { slug: "string" };
};

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  return {
    title: slug + " user",
  };
};

const UserPage = async ({ params: { slug } }: Props) => {
  return <div>{`User is ${slug}`}</div>;
};

export default UserPage;
