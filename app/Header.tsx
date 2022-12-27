import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center  p-5 bg-blue-500 ">
      <span className="font-bold text-white bg-orange-500 p-2 rounded-md border-0">
        S-Trade
      </span>
      <ul className="flex">
        <li className="mr-4 bg-white px-2 py-1 text-blue-500 rounded-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4 bg-white px-2 py-1 text-blue-500 rounded-lg">
          <Link href="/todos">Todos</Link>
        </li>
        <li className="mr-4 bg-white px-2 py-1 text-blue-500 rounded-lg">
          <Link href="/blog/hello-world">About Us</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
