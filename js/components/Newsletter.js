export default function Newsletter() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "newsletter";
    const $newsletter = document.createElement("article"),
        $title = document.createElement("h4"),
        $text = document.createElement("p"),
        $form = document.createElement("form"),
        $wrap = document.createElement("div"),
        $input = document.createElement("input"),
        $btn = document.createElement("input"),
        $msg = document.createElement("div");
    const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    // *** *** *** Functions *** *** ***
    const inputHandler = evt => {
        evt.preventDefault();
        if (!regExp.test($input.value)) {
            $input.classList.add("is-active");
            $msg.style.opacity = 1;
        } else {            
            $input.classList.remove("is-active");
            $msg.style.opacity = 0;
        };
    };  
    // *** *** *** Execution *** *** ***
    // Add classes
    $newsletter.classList.add(COMPONENT_NAME);
    $title.classList.add(COMPONENT_NAME + "-title");
    $text.classList.add(COMPONENT_NAME + "-text");
    $form.classList.add(COMPONENT_NAME + "-form");
    $wrap.classList.add(COMPONENT_NAME + "-wrap");
    $input.classList.add(COMPONENT_NAME + "-input");
    $btn.classList.add(COMPONENT_NAME + "-btn");
    $msg.classList.add(COMPONENT_NAME + "-msg");
    // Add content
    $title.textContent = "Newsletter";
    $text.textContent = "To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address";
    $input.type = "email";
    $msg.textContent = "Check your email please";
    $btn.type = "submit";
    $btn.value = "Subscribe";
    $btn.addEventListener("click", evt => inputHandler(evt));
    // Insert Elements
    $wrap.append($input, $btn);
    $form.append($wrap, $msg);
    $newsletter.append($title, $text, $form);
    return $newsletter;
};
