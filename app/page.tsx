import About from "./components/About";
import Language from "./components/Language";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <About />
      <Language />
      <Project />
    </main>
  );
}
