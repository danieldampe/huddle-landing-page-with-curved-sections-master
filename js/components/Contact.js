export default function Contact() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "contact";
    const $template = document.getElementById("logo-component").content,
        $clone = document.importNode($template, true);
    const $contact = document.createElement("article"),
        $header = document.createElement("div"),
        $logo = $clone.querySelector(".logo"),
        $text = document.createElement("p"),
        $body = document.createElement("div"),
        $social = document.createElement("div");
    const arr = [
        {
            icon: {
                src: "icon-phone.svg",
                alt: "Icon Phone"
            },
            text: "Phone: +1-543-123-4567"
        },
        {
            icon: {
                src: "icon-email.svg",
                alt: "Icon Email"
            },
            text: "example@huddle.com"
        }
    ];
    const icons = [
        "logo-facebook",
        "logo-instagram",
        "logo-twitter"
    ];
    // *** *** *** Execution *** *** ***
    // Add Classes
    $contact.classList.add(COMPONENT_NAME);
    $header.classList.add(COMPONENT_NAME + "-header");
    $logo.classList.add(COMPONENT_NAME + "-logo");
    $text.classList.add(COMPONENT_NAME + "-text");
    $body.classList.add(COMPONENT_NAME + "-body");
    $social.classList.add(COMPONENT_NAME + "-social");
    // Add Content
    $logo.querySelectorAll("path").forEach(elm => elm.setAttribute("fill", "var(--color-white)"));
    $text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.";
    arr.forEach(elm => {
        let componentName = COMPONENT_NAME + "-item";
        let $item = document.createElement("div"),
            $icon = document.createElement("img"),
            $text = document.createElement("div");
        $item.classList.add(componentName);
        $icon.classList.add(componentName + "-icon");
        $text.classList.add(componentName + "-text");
        $icon.src = "./images/" + elm.icon.src;
        $icon.alt = elm.icon.alt;
        $text.textContent = elm.text;
        $item.append($icon, $text);
        $body.append($item);
    });
    icons.forEach(str => {
        let componentName = "icon-social";
        let $ionIcon = document.createElement("ion-icon");
        $ionIcon.classList.add(componentName);
        $ionIcon.name = str;
        $social.append($ionIcon);
    });
    // Insert Elements
    $header.append(
        $logo,
        $text
    );
    $contact.append(
        $header,
        $body,
        $social
    );
    return $contact;
};
