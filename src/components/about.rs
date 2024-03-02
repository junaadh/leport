use leptos::*;

/// about me component
#[component]
pub fn About() -> impl IntoView {
    let name = "Moosa Junaadh".to_string();
    let about = "I am a Computer Science major studying in Taylor's University. I love low level programming and creating fun projects from scratch.".to_string();

    view! {
        <div class="flex-col mt-[90px] py-5 px-16 border border-transparent bg-slate-600/70 background-blur w-4/5 rounded-3xl shadow-xl">
            <h1 class="text-xl md:text-3xl font-mono p-3 font-semibold my-2">{name}</h1>
            <p class="text-md md:text-sm font-mono p-2 my-3">{about}</p>
        </div>
    }
}
