"use client";
import Image from "next/image";
import { useState } from "react";
import Theme from "./Theme";

export default function Header() {
  interface NavItem {
    name: string;
    url: string;
  }

  const make_nav_item = (
    name: string = "nav",
    url: string = "url",
  ): NavItem => {
    return { name, url };
  };

  let nav_item_list = [
    make_nav_item("GitHub", "https://www.github.com/junaadh"),
    make_nav_item("Mail", "mailto:junaadh.02@gmail.com"),
    make_nav_item("X", "https://www.twitter.com/junaadh"),
    make_nav_item("Instagram", "https://www.instagram.com/junaadh_"),
  ];

  const [onhover, setOnHover] = useState(false);

  return (
    <>
      <nav
        className="transition delay-150 ease-in-out duration-300 z-30 fixed top-0 flex justify-center content-center w-[270px] h-auto p-3 mx-auto hover:min-w-[338px]"
        onMouseEnter={() => setOnHover(!onhover)}
        onMouseLeave={() => setOnHover(false)}
      >
        <div className="leport-background transition delay-150 h-full w-full ease-in-out duration-300 flex-col justify-center items-center p-2 border border-transparent backdrop-blur rounded-3xl shadow-2xl hover:w-[338px]">
          <ul className="flex gap-1 place-content-evenly shadow-2xl">
            {nav_item_list.map((nav_item, index) => (
              <li key={index} className="flex justify-center">
                <a href={nav_item.url} target="_blank">
                  <Image
                    src={`/contacts/${nav_item.name.toLowerCase()}.svg`}
                    alt={nav_item.name}
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            ))}
          </ul>
          {onhover && <Theme />}
        </div>
      </nav>
    </>
  );
}
