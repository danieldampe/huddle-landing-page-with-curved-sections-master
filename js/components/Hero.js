export default function Hero() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "hero";
    const $hero = document.createElement("section"),
        $content = document.createElement("div"),
        $title = document.createElement("h1"),
        $text = document.createElement("p"),
        $btn = document.createElement("button"),
        $img = document.createElement("img");
    // *** *** *** Execution *** *** ***
    $hero.classList.add(COMPONENT_NAME);
    $content.classList.add(COMPONENT_NAME + "-content");
    $title.classList.add(COMPONENT_NAME + "-title");
    $text.classList.add(COMPONENT_NAME + "-text");
    $btn.classList.add(COMPONENT_NAME + "-btn", "btn-secondary");
    $img.classList.add(COMPONENT_NAME + "-img");
    $title.textContent = "Build The Community Your Fans Will Love";
    $text.textContent = "Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.";
    $btn.textContent = "Get started for free";
    $img.src = "./images/screen-mockups.svg";
    $img.alt = "Screen Mockups";
    $content.append($title, $text, $btn, $img);
    $hero.append($content);
    return $hero;
};
