type Props = {
  image: string;
  name: string;
};

const Index = ({ image, name }: Props) => {
  return (
    <div className="flex flex-col w-base h-[303px] bg-white px-6 pb-8 gap-4 pt-8 drop-shadow-md">
      <div className="w-full h-full overflow-hidden">
        <img src={image} className="object-cover w-full bg-secondary-300" />
      </div>
      <p className="text-center text-lg">{name}</p>
    </div>
  );
};

export default Index;
