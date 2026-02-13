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
const mainContent = document.querySelector(".main-content")
const btnDailyCards = document.querySelectorAll(".btn-daily-cards")
const features = document.querySelector(".features")
const footer = document.querySelector(".footer")
const progress = document.querySelector(".progress")
const congratulations = document.querySelector(".congratulations")
const counterDays = document.querySelector("#counter-days")



const paragraf = document.querySelector(".date")
const today = new Date()

const formatedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long"
})

paragraf.textContent = formatedDate


const conclusionText = document.querySelector(".conclusion")

let completedCount = 0
const totalHabits = btnDailyCards.length





iluminationBall.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
})


navLinks.forEach(link => {
    link.addEventListener("click", function (event) {

        event.preventDefault();

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");
    });
});




dayHabit.addEventListener("click", () => {
    mainContent.style.display = "none"
    features.style.display = "none"
    footer.style.display = "none"
    habits.style.display = "flex"
    progress.style.display = "none"

    main.classList.remove("main-appear")
})

transcription.addEventListener("click", () => {
    mainContent.style.display = "none"
    features.style.display = "none"
    footer.style.display = "none"
    habits.style.display = "none"
    progress.style.display = "flex"

    main.classList.remove("main-appear")
})



start.addEventListener("click", () => {
    mainContent.style.display = "flex"
    features.style.display = "grid"
    footer.style.display = "flex"
    habits.style.display = "none"
    progress.style.display = "none"

    main.classList.remove("main-appear")
    void main.offsetWidth
    main.classList.add("main-appear")
})


btnDailyCards.forEach(button => {
    button.addEventListener("click", () => {

        if (button.classList.contains("done")) return

        const card = button.closest(".content-daily-cards")
        const star = card.querySelector(".star")

        card.style.background = "linear-gradient(135deg, #c6f7ff 0%, #f2fcff 100%)"

        button.textContent = "Concluído"
        button.classList.add("done")
        button.disabled = true

        if (star) {
            star.style.display = "block"
        }

        completedCount++

        conclusionText.textContent = `${completedCount}/${totalHabits} concluídos`

        if (completedCount === totalHabits) {
            congratulations.style.display = "block"
        }
        
    })
});
