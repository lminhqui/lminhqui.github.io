document.addEventListener("DOMContentLoaded", function () {
    var typingEffect = new Typed(".name-member", {
        strings: ["Lê Minh Quí", "Trần Hữu Lộc"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 15
    })

    // Get the navbar
    const navbar = document.getElementById("navbar");
    const mybutton = document.getElementById("myBtn");
    // Get the offset position of the navbar
    // Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add("sticky")
            mybutton.style.display = "block";
        } else {
            navbar.classList.remove("sticky");
            mybutton.style.display = "none";
        }
    })
})
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}