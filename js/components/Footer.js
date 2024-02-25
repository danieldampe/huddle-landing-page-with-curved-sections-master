import Contact from "./Contact.js";
import Newsletter from "./Newsletter.js";
export default function Footer() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "footer";
    const $footer = document.createElement("footer"),
        $bgTop = document.createElement("picture"),
        $bgTopImg = document.createElement("img"),
        $bgTopSrc = document.createElement("source"),
        $inner = document.createElement("div"),
        $content = document.createElement("div");
    // *** *** *** Execution *** *** ***
    // Add Classes
    $footer.classList.add(COMPONENT_NAME);
    $inner.classList.add(COMPONENT_NAME + "-inner");
    $content.classList.add(COMPONENT_NAME + "-content");
    $bgTop.classList.add(COMPONENT_NAME + "-bg-top");
    $bgTopImg.classList.add(COMPONENT_NAME + "-bg-top-img");
    // Add Content
    $bgTopSrc.media = "(min-width: 1000px)";
    $bgTopSrc.srcset = "./images/bg-footer-top-desktop.svg";
    $bgTopImg.src = "./images/bg-footer-top-mobile.svg";
    // Insert Elements
    $bgTop.append($bgTopSrc, $bgTopImg);
    $content.append(Newsletter(), Contact());
    $inner.append($content);
    $footer.append($bgTop, $inner);
    return $footer;
};
