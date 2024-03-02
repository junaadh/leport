use leptos::*;

#[component]
pub fn Footer() -> impl IntoView {
    let footer = "created by Junaadh using Leptos".to_string();
    view! {
        <div class="flex justify-center py-5 px-16 border border-transparent w-4/5 mt-8 bg-slate-600/70 background-blur rounded-3xl shadow-xl mb-5">
            <h1 class="font-mono font-semibold">{footer}</h1>
        </div>
    }
}
