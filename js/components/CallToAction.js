export default function CallToAction() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "call-to-action";
    const $callToAction = document.createElement("section"),
        $title = document.createElement("h4"),
        $btn = document.createElement("button");
    // *** *** *** Execution *** *** ***
    $callToAction.classList.add(COMPONENT_NAME);
    $title.classList.add(COMPONENT_NAME + "-title");
    $btn.classList.add(COMPONENT_NAME + "-btn", "btn-secondary");
    $title.textContent = "Ready To Build Your Community?";
    $btn.textContent = "Get Started For Free";
    $callToAction.append($title, $btn);
    return $callToAction;
};
