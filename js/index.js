import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Statistics from "./components/Statistics.js";
import Features from "./components/Features.js";
import CallToAction from "./components/CallToAction.js";
import Footer from "./components/Footer.js";

// *** *** *** Variables *** *** ***
const $root = document.getElementById("root"),
    $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $root.prepend(
        Header()
    );
    $main.append(
        Hero(),
        Statistics(),
        Features(),
        CallToAction()
    );
    $root.append(
        Footer()
    );
});
