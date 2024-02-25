export default function Header() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "header";
    const $header = document.createElement("header"),
        $content = document.createElement("div"),
        $logo = document.createElement("img"),
        $btn = document.createElement("button");
    // *** *** *** Execution *** *** ***
    // Add Classes
    $header.classList.add(COMPONENT_NAME);
    $content.classList.add(COMPONENT_NAME + "-content");
    $logo.classList.add(COMPONENT_NAME + "-logo");
    $btn.classList.add(COMPONENT_NAME + "-btn", "btn-primary");
    // Add content
    $logo.src = "./images/logo.svg";
    $logo.alt = "Logo";
    $btn.textContent = "Try it free";
    // Insert Elements
    $content.append($logo, $btn);
    $header.append($content);
    return $header;
};
