

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function ToggleMenu() {
  const [isToggle, setIsToggle] = useState(false);

  const onClickToggle = () => {
    const toggle = isToggle;
    setIsToggle(!toggle);
  };
  return (
    <>
      <main className="relative">
        <div
          className=" text-white bg-gray-600 w-10 h-10 flex justify-center items-center rounded p-1"
          onClick={onClickToggle}
        >
          {isToggle ? <RxCross1 size={25} className="cursor-pointer" /> : <GiHamburgerMenu size={25} className="cursor-pointer" /> }
        </div>
        {isToggle && (
          <div className={`absolute top-12 right-0 rounded-xl bg-gray-600 w-40 py-4 flex flex-col justify-center text-center items-center font-bold text-md text-gray-300`}>
            <ul className="w-full">
              <li className="cursor-pointer w-full hover:bg-gray-800 py-2">Home</li>
              <li className="cursor-pointer w-full hover:bg-gray-800 py-2">About</li>
              <li className="cursor-pointer w-full hover:bg-gray-800 py-2">Contact</li>
              <li className="cursor-pointer w-full hover:bg-gray-800 py-2">Feedback</li>
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
