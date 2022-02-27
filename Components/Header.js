import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="grid grid-cols-3  sticky top-0 z-50 bg-white bg-opacity-80 bg-clip-padding blur-backdrop-filter shadow-md p-5 md:px-10">
      {/* left */}
      <div className=" relative h-10 my-auto flex items-center  cursor-pointer  ">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />
      </div>

      {/* center */}
      <div className="flex items-center shadow-sm md:border-2 rounded-full hover:shadow-md ">
        <input
          className="flex-grow p-3 bg-transparent outline-none placeholder-gray-400 text-gray-600 text-sm "
          placeholder="Start Your Search"
          type="text"
        />
        <SearchIcon className="hidden md:mx-1 md:inline-flex h-8 bg-red-500 rounded-full text-white p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center text-gray-500 space-x-2 justify-end">
        <p className="hidden cursor-pointer md:inline-flex hover:bg-gray-100 rounded-full px-4 p-2">
          Become a host
        </p>
        <GlobeAltIcon className="h-10 cursor-pointer hover:bg-gray-100 p-2 rounded-full" />
        <div className="flex border-2 cursor-pointer rounded-full space-x-2 p-2 hover:shadow-md transition duration-300 transform ease-out">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
    </header>
  );
}

export default Header;
