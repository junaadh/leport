export default function About() {
  const name = "Moosa Junaadh";
  const description =
    "I am a Computer Science major studying in Taylor's University. I love low level programming and creating fun projects from scratch.";

  return (
    <>
      <section className="flex flex-col mt-[90px] py-5 px-16 border border-transparent leport-background background-blur w-4/5 rounded-3xl shadow-xl">
        <h1 className="text-xl md:text-3xl font-mono p-3 font-semibold my-2">
          {name}
        </h1>
        <p className="text-md md:text-sm font-mono p-2 my-3">{description}</p>
      </section>
    </>
  );
}
