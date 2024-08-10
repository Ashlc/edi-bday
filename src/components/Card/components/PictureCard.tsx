type Props = {
  image: string;
  name: string;
};

const Index = ({ image, name }: Props) => {
  return (
    <div className="flex flex-col w-[256px] h-[303px] bg-white px-6 pb-8 gap-4 pt-8 drop-shadow-md">
      <img src={image} className="w-full h-full bg-secondary-300" />
      <p className="text-center text-lg">{name}</p>
    </div>
  );
};

export default Index;
