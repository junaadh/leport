use crate::components::*;
use leptos::*;

/// Default Home Page
#[component]
pub fn Home() -> impl IntoView {
    view! {
        <body class="dark:bg-slate-900/80 min-h-[100dvh] w-screen flex flex-col justify-center items-center">
            <Nav/>
            <About/>
            <Languages/>
            <Projects/>
            <Footer/>
        </body>
    }
}
