"use client";

import dark from "@/public/misc/dark.svg";
import system from "@/public/misc/system.svg";
import light from "@/public/misc/light.svg";
import Image from "next/image";
import { useEffect } from "react";
import { Viewport } from "next";
import { ThemeColorDescriptor } from "next/dist/lib/metadata/types/metadata-types";

export default function Theme() {
  const generateViewport = (
    theme: string | ThemeColorDescriptor | ThemeColorDescriptor[] | null,
  ): Viewport => {
    return {
      themeColor: theme,
    };
  };

  const handle = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      generateViewport("#272e3f");
    } else {
      document.documentElement.classList.remove("dark");
      generateViewport("stone");
    }
  };

  const handler = (e: MediaQueryListEvent) => {
    e.matches ? handle() : handle();
  };

  useEffect(() => {
    handle();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handler);
  });

  return (
    <>
      <section className="flex flex-col place-content-evenly items-center mt-3">
        <button
          className="flex justify-center items-center border border-transparent bg-stone-900/30 m-1 py-1 px-3 rounded-xl hover:bg-stone-900/20"
          onClick={() => {
            localStorage.theme = "light";
            handle();
          }}
        >
          <Image className="w-6 h-6 block m-1" src={light} alt="light-mode" />
          <h1 className="font-serif text-sm m-1">Light Mode</h1>
        </button>
        <button
          className="flex justify-center items-center border border-transparent bg-stone-900/30 m-1 py-1 px-3 rounded-xl hover:bg-stone-900/20"
          onClick={() => {
            localStorage.removeItem("theme");
            handle();
          }}
        >
          <Image className="w-6 h-6 block m-1" src={system} alt="system-mode" />
          <h1 className="font-serif text-sm m-1">Auto Mode</h1>
        </button>
        <button
          className="flex justify-center items-center border border-transparent bg-stone-900/30 m-1 py-1 px-3 rounded-xl hover:bg-stone-900/20"
          onClick={() => {
            localStorage.theme = "dark";
            handle();
          }}
        >
          <Image className="w-6 h-6 block m-1" src={dark} alt="dark-mode" />
          <h1 className="font-serif text-sm m-1">Dark Mode</h1>
        </button>
      </section>
    </>
  );
}
