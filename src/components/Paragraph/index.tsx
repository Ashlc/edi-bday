import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const index = ({ children }: Props) => {
  return (
    <p className="indent-10 text-justify tracking-wide leading-relaxed">
      {children}
    </p>
  );
};

export default index;
