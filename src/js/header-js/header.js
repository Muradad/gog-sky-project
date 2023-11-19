document.addEventListener("DOMContentLoaded", () => {

    // LANGUAGE DROPDOWN
    const LANGUAGE_SELECTION = document.querySelector(".header-language-selection");
    const LANGUAGE_DROPDOWN = document.querySelector(".language-dropdown");

    LANGUAGE_SELECTION.addEventListener("click", () => {
        LANGUAGE_DROPDOWN.classList.toggle("language-active");
    });

    // MOBILE MENU
    const MOBILE_BUTTON = document.querySelector(".mobile-menu-btn");
    const MOBILE_MENU = document.querySelector(".mobile-menu-container");
    const header_navigation = document.querySelector(".header-navigation");
    const header_top_container = document.querySelector(".header-top-container");
    MOBILE_BUTTON.addEventListener("click", () => {
        MOBILE_MENU.classList.toggle("mobile-menu-container-active");
        header_navigation.classList.toggle("activenavigation");
        header_top_container.classList.toggle("header-top-container-active")
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            MOBILE_MENU.classList.remove("mobile-menu-container-active");
            header_navigation.classList.remove("activenavigation");
            header_top_container.classList.remove("header-top-container-active")


        };
    });

    // HEADER SCROLL
    const HEADER_TOP = document.querySelector(".header-top-container");
    const HEADER = document.querySelector(".site-header");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
        scrollPosition > 0 ? HEADER.classList.add("header-fixed") : HEADER.classList.remove("header-fixed");
        scrollPosition > 0 ? HEADER_TOP.classList.add("header-top-container-disabled") : HEADER_TOP.classList.remove("header-top-container-disabled");
    });





    // DOM CONTENT CLOSING
}
);
// header-navigation