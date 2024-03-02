use leptos::*;

/// projects
#[component]
pub fn Projects() -> impl IntoView {
    struct Project {
        name: String,
        photo: String,
        url: String,
    }

    impl Project {
        fn new(name: &str) -> Self {
            Self {
                name: name.to_string(),
                photo: format!("https://opengraph.githubassets.com/f49fb1f391de3f6c0ea147de6767320e16d9ccb0d5ce0d3c5b40106cece42cc3/junaadh/{}", name), 
                url: format!("https://www.github.com/junaadh/{}", name) 
            }
        }

        fn name(&self) -> String {
            self.name.clone()
        }
        fn photo(&self) -> String {
            self.photo.clone()
        }
        fn url(&self) -> String {
            self.url.clone()
        }
    }

    let projects = [
        Project::new("rise_code"),
        Project::new("WebServer"),
        Project::new("Graphik"),
    ];

    view! {
        <div class="grid grid-cols-4 gap-4 border w-4/5 border-transparent mt-8">
            <div class="col-span-4">
                <a href=projects[0].url()>
                    <img class="rounded-3xl" src=projects[0].photo() alt=projects[0].name()/>
                </a>
            </div>
            <div class="col-span-2">
                <a href=projects[1].url()>
                    <img class="rounded-3xl" src=projects[1].photo() alt=projects[1].name()/>
                </a>
            </div>
            <div class="col-span-2">
                <a href=projects[2].url()>
                    <img class="rounded-3xl" src=projects[2].photo() alt=projects[2].name()/>
                </a>
            </div>
        </div>
    }
}
