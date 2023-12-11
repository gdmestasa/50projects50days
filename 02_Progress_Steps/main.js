const navigation = document.querySelector(".navigation")
const steps = document.querySelectorAll(".process__step")
const lines = document.querySelectorAll(".process__line")
const btnPreview = document.querySelector(".navigation__btn:first-child")
const btnNext = document.querySelector(".navigation__btn:last-child")

let stepActive = 1
let lineActive = 0

function updateStep() {
    steps.forEach((step, index) => {
        if (index < stepActive) {
            step.classList.add("process__step--active")
        } else {
            step.classList.remove("process__step--active")
        }
    })

    lines.forEach((line, index) => {
        if (index < lineActive) {
            line.classList.add("process__line--active")
        } else {
            line.classList.remove("process__line--active")
        }
    })

    if (stepActive == 1) {
        btnPreview.setAttribute("disabled", true)
    } else if (stepActive == steps.length) {
        btnNext.setAttribute("disabled", true)
    } else {
        btnPreview.removeAttribute("disabled")
        btnNext.removeAttribute("disabled")
    }
}

navigation.addEventListener("click", (e) => {
    // btn preview step
    if (e.target.matches(".navigation__btn:first-child")) {
        stepActive--
        lineActive--

        if (stepActive < 1) {
            stepActive = 1
        }

        if (lineActive < 0) {
            lineActive = 0
        }

        updateStep()
    }

    // btn next step
    if (e.target.matches(".navigation__btn:last-child")) {
        stepActive++
        lineActive++

        if (stepActive > steps.length) {
            stepActive = steps.length
        }

        if (lineActive > lines.length) {
            lineActive = lines.length
        }
        updateStep()
    }
})