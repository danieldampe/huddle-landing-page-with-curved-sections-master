export default function Statistics() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "statistics";
    const $dashboard = document.createElement("section"),
        $fragment = document.createDocumentFragment();
    const arr = [
        {
            icon: {
                src: "icon-communities.svg",
                alt: "Icon Communities"
            },
            num: "1.4k+",
            txt: "Communities Formed"
        },
        {
            icon: {
                src: "icon-messages.svg",
                alt: "Icon Communities"
            },
            num: "2.7m+",
            txt: "Messages Sent"
        }
    ];
    // *** *** *** Execution *** *** ***
    $dashboard.classList.add(COMPONENT_NAME);
    arr.forEach(({icon, num, txt}) => {
        let componentName = COMPONENT_NAME + "-item";
        let $item = document.createElement("div"),
            $icon = document.createElement("img"),
            $num = document.createElement("div"),
            $txt = document.createElement("div");
        $item.classList.add(componentName);
        $icon.classList.add(componentName + "-icon");
        $num.classList.add(componentName + "-num");
        $txt.classList.add(componentName + "-txt");
        $icon.src = "./images/" + icon.src;
        $icon.alt = icon.alt;
        $num.textContent = num;
        $txt.textContent = txt;
        $item.append($icon, $num, $txt);
        $fragment.append($item);
    });
    $dashboard.append($fragment);
    return $dashboard;
};
