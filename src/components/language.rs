use leptos::*;

/// languages
#[component]
pub fn Languages() -> impl IntoView {
    struct Lang {
        name: String,
        pic: String,
    }

    impl Lang {
        fn new(name: &str) -> Self {
            Self {
                name: name.to_string(),
                pic: format!("assets/languages/{}.svg", name.to_lowercase()),
            }
        }
        fn name(&self) -> String {
            self.name.clone()
        }
        fn pic(&self) -> String {
            self.pic.clone()
        }
    }
    let languages = Vec::from([
        Lang::new("Rust"),
        Lang::new("C"),
        Lang::new("Assembly"),
        Lang::new("TypeScript"),
        Lang::new("JavaScript"),
    ]);

    let prompt = "macro_rules! languages {-
        ($languages: expr) => { $languages.into_iter().map(|language|- 
        view! { <li class={language.name()}</li> })-
        .collect_view()-
    };}-
    languages! (my_language_list)"
        .to_string();
    let lines = prompt
        .split('-')
        .map(|line| view! { <li>{line.to_string().clone()}</li> })
        .collect_view();

    view! {
        <div class="flex flex-col py-5 px-16 border border-transparent bg-slate-600/70 background-blur w-4/5 rounded-3xl shadow-xl mt-8">
            <ul class="text-sm font-mono py-4 hidden md:block">{lines}</ul>
            <p class="text-sm font-mono py-4 md:hidden block">"languages! (my_language_list)"</p>
            <ul class="text-md">
                {languages
                    .into_iter()
                    .map(|l| view! { <li class="ml-4 font-mono py-1">{l.name()}</li> })
                    .collect_view()}
            </ul>
        </div>
    }
}
