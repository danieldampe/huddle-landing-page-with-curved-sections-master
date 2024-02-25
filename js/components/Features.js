export default function Features() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "features",
        MEDIA_QUERY = "(min-width: 1024px)";
    const $features = document.createElement("section");
    const $fragment = document.createDocumentFragment();
    const arr = [
        {
            title: "Grow Together",
            text: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
            img: "illustration-grow-together.svg"
        },
        {
            title: "Flowing Conversations",
            text: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
            img: "illustration-flowing-conversation.svg"
        },
        {
            title: "Your Users",
            text: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
            img: "illustration-your-users.svg"
        }
    ];
    // *** *** *** Execution *** *** ***
    $features.classList.add(COMPONENT_NAME);
    arr.forEach((elm, index) => {
        let componentName = COMPONENT_NAME + "-subsection";
        let $subsection = document.createElement("section"),
            $inner = document.createElement("div"),
            $content = document.createElement("div"),
            $header = document.createElement("div"),
            $img = document.createElement("img"),
            $body = document.createElement("div"),
            $title = document.createElement("h3"),
            $text = document.createElement("p");
        let $bgTop = document.createElement("picture"),
            $bgTopImg = document.createElement("img"),
            $bgTopSrc = document.createElement("source"),
            $bgBottom = document.createElement("picture"),
            $bgBottomImg = document.createElement("img"),
            $bgBottomSrc = document.createElement("source");
        // Add Classes
        $subsection.classList.add(componentName);
        $content.classList.add(componentName + "-content");
        $inner.classList.add(componentName + "-inner");
        $header.classList.add(componentName + "-header");
        $img.classList.add(componentName + "-img");
        $body.classList.add(componentName + "-body");
        $title.classList.add(componentName + "-title");
        $text.classList.add(componentName + "-text");
        $bgTop.classList.add(componentName + "-bg-top");
        $bgTopImg.classList.add(componentName + "-bg-top-img");
        $bgBottom.classList.add(componentName + "-bg-bottom");
        $bgBottomImg.classList.add(componentName + "-bg-bottom-img");
        // Add Content
        if(index === 0 || index === 2) {
            $bgTopSrc.media = MEDIA_QUERY;
            $bgBottomSrc.media = MEDIA_QUERY;
            if (index === 0) {
                $bgTopImg.src = "./images/bg-section-top-mobile-1.svg";
                $bgBottomImg.src = "./images/bg-section-bottom-mobile-1.svg";
                $bgTopSrc.srcset = "./images/bg-section-top-desktop-1.svg";
                $bgBottomSrc.srcset = "./images/bg-section-bottom-desktop-1.svg";
            } else if (index === 2) {
                $bgTopImg.src = "./images/bg-section-top-mobile-2.svg";
                $bgBottomImg.src = "./images/bg-section-bottom-mobile-2.svg";
                $bgTopSrc.srcset = "./images/bg-section-top-desktop-2.svg";
                $bgBottomSrc.srcset = "./images/bg-section-bottom-desktop-2.svg";
            };
        };
        $img.src = "./images/" + elm.img;
        $img.alt = "Illustration" + " " + elm.title;
        $title.textContent = elm.title;
        $text.textContent = elm.text;
        // Insert Elements
        $bgTop.append($bgTopSrc, $bgTopImg);
        $bgBottom.append($bgBottomSrc, $bgBottomImg);
        $header.append($img);
        $body.append($title, $text);
        $content.append($header, $body);
        $inner.append($content);
        $subsection.append($bgTop, $inner, $bgBottom);
        $fragment.append($subsection);
    });
    $features.append($fragment);
    return $features;
};
