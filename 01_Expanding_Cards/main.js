const main = document.querySelector("main")
const cards = document.querySelectorAll(".card")

main.addEventListener("click", (event) => {
    if (event.target.matches(".card *")) {
        cards.forEach(c => {
            c.classList.remove('card--active')
            c.querySelector('.card__title').classList.remove('card__title--active')
        });
        let card = event.target.parentNode
        card.classList.add('card--active')
        card.querySelector('.card__title').classList.add('card__title--active')
    }
})