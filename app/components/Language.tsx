export default function Language() {
  const lang_list = ["C", "Rust", "Assembly", "WASM", "TypeScript"];

  const rust_str = `
  macro_rules! languages {
    (#list: expr) => {
      $list.into_iter().map(|item| view! {
        <li>{item}</li>
      }).collect_view()
    }  
  };
  languages! (my_languages)
  `;

  return (
    <>
      <section className="flex flex-col py-5 px-16 border border-transparent leport-background background-blur w-4/5 rounded-3xl shadow-xl mt-8">
        <pre className="text-sm font-mono py-4 hidden md:block">{rust_str}</pre>
        <p className="text-sm font-mono py-4 md:hidden block">
          languages! (my_languages)
        </p>
        <ul className="text-md pb-3 pl-5">
          {lang_list.map((item, index) => (
            <li key={index} className="ml-4 font-mono py-1">
              {`> ${item}`}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
