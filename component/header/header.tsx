import Image from "next/image";
import HeaderIcons from "../header-icons/header-icons";
import {
  HomeIcon,
  LightBulbIcon,
  CheckBadgeIcon,
  FolderIcon,
  UserIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";


const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcons title="HOME" Icon={HomeIcon} />
        <HeaderIcons title="TRENDING" Icon={LightBulbIcon} />
        <HeaderIcons title="VERIFIY" Icon={CheckBadgeIcon} />
        <HeaderIcons title="COLLECTION" Icon={FolderIcon} />
        <HeaderIcons title="SEARCH" Icon={MagnifyingGlassCircleIcon} />
        <HeaderIcons title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt=""
        width={170}
        height={100}
      />
    </header>
  );
};

export default Header;
