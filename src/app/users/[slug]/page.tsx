import { Metadata } from "next";
import { useRouter } from "next/router";

type Props = {
  params: { slug: "string" };
};

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  return {
    title: slug,
  };
};

const UserPage = async ({ params: { slug } }: Props) => {
  // const { asPath, pathname, query, push, replace } = useRouter();
  // push-может перекинуть на нужную страницу
  // replace-может перекинуть на нужную страницу без возможности вернуться обратно (стрелка назад в браузере)
  // asPath-получает путь динамического slug users/1
  // pathname-получает путь динамического slug буквально users/[slug]
  // query-получает объект со значением slug Object {slug: "1"}

  return <div>{`User ID is ${slug}`}</div>;
};

export default UserPage;
