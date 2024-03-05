import Image from "next/image";
import Link from "next/link";

export default function Project() {
  let github_og_pref =
    "https://opengraph.githubassets.com/f49fb1f391de3f6c0ea147de6767320e16d9ccb0d5ce0d3c5b40106cece42cc3/junaadh/";
  let github_repo_pref = "https://www.github.com/junaadh/";

  return (
    <>
      <section className="grid grid-cols-4 grid-rows-3 md:grid-rows-2 md:grid-cols-6 w-4/5 mt-8 gap-8">
        <section className="col-span-3 rounded-3xl h-auto w-auto flex justify-center items-center">
          <Link href={`${github_repo_pref}rise_code`}>
            <Image
              src={`${github_og_pref}rise_code`}
              alt="rise_code"
              className="rounded-3xl shadow-2xl"
              width={500}
              height={500}
            />
          </Link>
        </section>
        <section className="w-auto h-auto bg-white backdrop-blur rounded-3xl invisible md:hidden"></section>
        <section className="w-auto h-auto bg-white backdrop-blur rounded-3xl invisible md:hidden"></section>
        <section className="col-span-3 w-auto h-auto rounded-3xl backdrop-blur flex justify-center items-center">
          <Link href={`${github_repo_pref}rise_code`}>
            <Image
              src={`${github_og_pref}graphik`}
              alt="rise_code"
              className="rounded-3xl shadow-2xl"
              width={500}
              height={500}
            />
          </Link>
        </section>
        <section className="col-span-3 w-auto h-auto rounded-3xl background-blur flex justify-center items-center">
          <Link href={`${github_repo_pref}rise_code`}>
            <Image
              src={`${github_og_pref}WebServer`}
              alt="rise_code"
              className="rounded-3xl shadow-2xl"
              width={500}
              height={500}
            />
          </Link>
        </section>
        <section className="w-auto h-auto rounded-3xl inivisible md:hidden"></section>
        <section className="w-auto h-auto rounded-3xl inivisible md:hidden"></section>
        <section className="col-span-3 w-auto h-auto rounded-3xl background-blur flex justify-center items-center">
          <Link href={`${github_repo_pref}rise_code`}>
            <Image
              src={`${github_og_pref}leport`}
              alt="rise_code"
              className="rounded-3xl shadow-2xl"
              width={500}
              height={500}
            />
          </Link>
        </section>
      </section>
    </>
  );
}
