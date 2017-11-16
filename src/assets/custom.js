function fadeHeader() {
    window.onscroll = function () {
        let top = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let scrollRatio = (top / 100) //scroll x pixels down

        document.getElementById("header").style.opacity = scrollRatio;
    };
}

function smoothScrollTo(yPos) {
    window.scrollTo({
        "behavior": "smooth",
        "left": 0,
        "top": yPos
    });
}

function scrollToSection(id) {
    var element = document.getElementById("section" + id);
    var y = element.offsetTop;

    smoothScrollTo(y);
}