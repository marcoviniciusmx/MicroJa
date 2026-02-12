let darkMode = document.querySelector(".dark-mode")
const lightMode = document.querySelector(".light-mode")
const header = document.querySelector(".header")
const titleLogo = document.querySelector(".title-logo")
const main = document.querySelector(".main")
const body = document.querySelector("body")
const wrapper = document.querySelector(".wrapper")
const iluminationMode = document.querySelector(".ilumination-mode")
const iluminationBall = document.querySelector(".ilumination-ball")
const nav = document.querySelector(".nav")
const navLinks = document.querySelectorAll(".nav a")
const start = document.querySelector(".start")
const dayHabit = document.querySelector(".habit")
const transcription = document.querySelector(".transcription")
const habits = document.querySelector(".habits")

iluminationBall.addEventListener("click", () => {
    body.classList.toggle("dark-theme")
})


navLinks.forEach(link => {
    link.addEventListener("click", function (event) {

        event.preventDefault();

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");
    });
});


dayHabit.addEventListener("click", () => {
    document.querySelector(".main-content").style.display = "none"
    document.querySelector(".features").style.display = "none"
    document.querySelector(".footer").style.display = "none"
    document.querySelector(".habits").style.display = "flex"
    document.querySelector(".progress").style.display = "none"

})

transcription.addEventListener("click", () => {
    document.querySelector(".main-content").style.display = "none"
    document.querySelector(".features").style.display = "none"
    document.querySelector(".footer").style.display = "none"
    document.querySelector(".habits").style.display = "none"
    document.querySelector(".progress").style.display = "flex"
})



start.addEventListener("click", () => {
    document.querySelector(".main-content").style.display = "flex"
    document.querySelector(".features").style.display = "grid"
    document.querySelector(".footer").style.display = "flex"
    document.querySelector(".habits").style.display = "none"
    document.querySelector(".progress").style.display = "none"
})



// dayHabit.addEventListener("click", () => {
//     document.querySelector(".main").style.display = "none"
//     document.querySelector(".footer").style.display = "none"
//     document.querySelector(".daily-text-habits").style.display = "flex"

// })

// start.addEventListener("click", () => {
//     document.querySelector(".main").style.display = "flex"
//     document.querySelector(".footer").style.display = "flex"
//     document.querySelector(".daily-text-habits").style.display = "none"
// })
