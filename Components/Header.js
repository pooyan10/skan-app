import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => setSearchInput("");

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="grid grid-cols-3  sticky top-0 z-50 bg-white bg-opacity-80 bg-clip-padding blur-backdrop-filter shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className=" relative h-10 my-auto flex items-center  cursor-pointer  "
      >
        <Image
          alt=""
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />
      </div>

      {/* center */}
      <div className="flex items-center shadow-sm md:border-2 rounded-full hover:shadow-md ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow overflow-hidden p-3 bg-transparent outline-none placeholder-gray-400 text-gray-600 text-sm "
          placeholder={placeholder || "Start Your Search"}
          type="text"
        />
        <SearchIcon
          onClick={search}
          className="hidden md:mx-1 md:inline-flex h-8 bg-red-500 rounded-full text-white p-2 cursor-pointer"
        />
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
      <div className="flex-initial w-23 col-span-3  justify-center">
        {searchInput && (
          <div className="flex flex-col w-90 max-w-[530px] mx-auto ">
            <DateRangePicker
              className="flex justify-center"
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5b61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UsersIcon className="h-7" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                className="w-12 bg-transparent pl-2 text-lg outline-none text-red-400"
                type="number"
                min={1}
              ></input>
            </div>
            <div className="flex ">
              <button onClick={resetInput} className="text-gray-600 flex-grow">
                cancel
              </button>
              <button onClick={search} className="text-red-400 flex-grow">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
