use leptos::*;

/// nav component
#[component]
pub fn Nav() -> impl IntoView {
    struct NavItem {
        name: String,
        photo: String,
        url: String,
    }

    impl NavItem {
        fn new(name: &str, url: &str) -> Self {
            Self {
                name: name.to_string(),
                photo: format!("contacts/{}.svg", name.to_lowercase()),
                url: url.to_string(),
            }
        }

        fn url(&self) -> String {
            self.url.clone()
        }
        fn name(&self) -> String {
            self.name.clone()
        }
        fn photo(&self) -> String {
            self.photo.clone()
        }
    }
    let items: Vec<NavItem> = Vec::from([
        NavItem::new("Github", "https://www.github.com/junaadh"),
        NavItem::new("X", "https://www.twitter.com/junaadh"),
        NavItem::new("Mail", "mailto:junaadh.02@gmail.com"),
        NavItem::new("Instagram", "https://www.instagram.com/junaadh_"),
    ]);
    view! {
        <nav class="z-30 fixed top-0 w-[270px] h-auto p-3 mx-auto transition delay-150 hover:w-[320px] ease-in-out duration-300">
            <ul class="grid grid-cols-4 gap-1 p-2 border border-transparent bg-slate-400/50 backdrop-blur rounded-full justify-self-center shadow-xl tranisition delay-150 ease-in-out duration-300">
                {items
                    .iter()
                    .map(|item| {
                        view! {
                            <li class="flex justify-center">
                                <a href=item.url()>
                                    <img
                                        class="block h-6 w-6 hover:shadow-3xl"
                                        src=item.photo()
                                        alt=item.name()
                                    />
                                </a>
                            </li>
                        }
                    })
                    .collect_view()}
            </ul>
        </nav>
    }
}
