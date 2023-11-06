type Props = {
  name: string;
};

const Title = ({ name }: Props) => {
  return <h1 className='flex justify-center text-3xl py-5'>{name}</h1>;
};

export default Title;
