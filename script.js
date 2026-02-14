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
const sucess = document.querySelector(".sucess")
const imageSucess = document.querySelector(".shine-sucess")




const paragraf = document.querySelector(".date")
const today = new Date()
const todayNumber = today.getDate()

const formatedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long"
})

const actualDay = document.querySelectorAll(".calendary span")

actualDay.forEach(span => {
    if (Number(span.textContent) === todayNumber) {
        span.classList.add("actual-day")
    } else {
        span.classList.remove("actual-day")
    }
})

paragraf.textContent = formatedDate


const conclusionText = document.querySelector(".conclusion")
const counterDays = document.querySelector("#counter-days")
const counterSequency = document.querySelector("#counter-sequency")

let completedCount = 0
const totalHabits = btnDailyCards.length






iluminationBall.addEventListener("click", () => {
    body.classList.toggle("dark-theme")

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark")
        imageSucess.src = "./assets/brilho-dark.png"
    } else {
        localStorage.setItem("theme", "light")
        imageSucess.src = "./assets/brilho.png"
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

    const savedState = localStorage.getItem(button.dataset.id)

    if (savedState === "done") {
        const card = button.closest(".content-daily-cards")
        const star = card.querySelector(".star")

        button.textContent = "Concluído"
        button.classList.add("done")
        button.disabled = true

        if (star) {
            star.style.display = "block"
        }

        card.classList.add("background-card")
        completedCount++
    }

    conclusionText.textContent = `${completedCount}/${totalHabits} concluídos`

    if (completedCount === totalHabits) {
        sucess.style.display = "flex"
        counterDays.textContent = completedCount / totalHabits
    }


    button.addEventListener("click", () => {

        if (button.classList.contains("done")) return

        const card = button.closest(".content-daily-cards")
        const star = card.querySelector(".star")

        card.classList.add("background-card")

        button.textContent = "Concluído"
        button.classList.add("done")
        button.disabled = true


        if (star) {
            star.style.display = "block"
        }

        localStorage.setItem(button.dataset.id, "done")

        completedCount++

        conclusionText.textContent = `${completedCount}/${totalHabits} concluídos`


        if (completedCount === totalHabits) {
            sucess.style.display = "flex"
            counterDays.textContent = completedCount / totalHabits
        }
    })
});