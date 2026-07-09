/*
DATUMGEOSPACE
Website Interaction Script

Nationwide Drone Mapping
Reality Capture
Geospatial Documentation
*/


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");

    });

    document.querySelectorAll(".nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");
                menuToggle.classList.remove("open");

            });

        });
}


// HEADER SCROLL EFFECT

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (header) {

        header.classList.toggle(

            "scrolled",

            window.scrollY > 50

        );

    }

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


// SCROLL REVEAL

const revealItems =
    document.querySelectorAll(`

.capability-card,
.pipeline-step,
.documentation-card,
.equipment-card,
.industry-card,
.credential-panel,
.contact-area

`);

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: .15

        }

    );

revealItems.forEach(item => {

    item.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(item);

});


// PROJECT DATE FIELD

const timeline =
    document.querySelector("#timeline");

const dateField =
    document.querySelector("#date-field");

if (timeline && dateField) {

    timeline.addEventListener(
        "change",
        () => {

            if (

                timeline.value === "future" ||
                timeline.value === "specific"

            ) {

                dateField.classList.remove(
                    "hidden"
                );

            }

            else {

                dateField.classList.add(
                    "hidden"
                );

            }

        });

}


// FORM BUTTON STATE

const form =
    document.querySelector(".contact-form");

if (form) {

    form.addEventListener(
        "submit",
        () => {

            const button =
                form.querySelector("button");

            if (button) {

                button.innerHTML =
                    "SUBMITTING REQUEST →";

            }

        });

}


// ACTIVE NAVIGATION

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            if (

                window.scrollY >=

                section.offsetTop - 180

            ) {

                current =
                    section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (

                link.getAttribute("href")

                ===

                "#" + current

            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    });


// HERO FIELD HUD MOTION

const coordinates =
    document.querySelector(
        ".coordinates"
    );

window.addEventListener(
    "mousemove",
    event => {

        if (!coordinates) return;

        const x =

            (event.clientX /

                window.innerWidth - .5) * 8;

        const y =

            (event.clientY /

                window.innerHeight - .5) * 8;

        coordinates.style.transform =

            `translate(${x}px,${y}px)`;

    });


// BACKGROUND TITLE PARALLAX

const ghostTitles =
    document.querySelectorAll(
        ".ghost-title"
    );

window.addEventListener(
    "scroll",
    () => {

        ghostTitles.forEach(title => {

            title.style.transform =

                `translateX(-50%) translateY(${window.scrollY * .015}px)`;

        });

    });