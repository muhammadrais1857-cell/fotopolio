// Menu mobile
function toggleMenu() {
    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("active");
}


// Tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();


// Tutup menu setelah memilih menu
const menuLinks = document.querySelectorAll(".nav-menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".nav-menu")
            .classList.remove("active");

    });

});