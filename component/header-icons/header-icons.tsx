import { FC } from "react";

export type HeaderIconsProps = {
  title: string;
  Icon: any;
};
const HeaderIcons: FC<HeaderIconsProps> = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-poitner group w:12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderIcons;
