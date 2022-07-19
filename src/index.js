import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const r = fetch("https://restcountries.com/v3.1/name/peru")
    .then(response => {
        return response.json();
    })
    .then(countries => {
        console.log(countries);
        const markup = createCountriCardMarkup(countries);
        console.log(markup);
        countryInfoContainer.innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    });

// console.log(countries);

//! 1.0.Получаем ссылку на div-контейнер для разметки одной страны:
const countryInfoContainer = document.querySelector('.country-info');
// console.log(ImageContainer);

//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
// countryInfoContainer.insertAdjacentHTML('beforeend', createCountriCardMarkup);

//!   1.1.Ф-ция, к-рая создает массив с новой разметкой одной страны:
function createCountriCardMarkup(countries) {
    return countries
        .map(({ name: { official }, capital, population, flags: { svg }, languages }) => {
            const valuesLanguages = Object.values(languages).join(", ");
            return `
                <div class="card-country">
                <img class="country-flag"
                    width = 100 px
                    src="${svg}"
                    alt="${official}"
                />
                <h2 class="card-title">Capital: ${official}</h2>
                <p class="card-population">Population: ${population}</p>
                <p class="card-languages">languages: ${valuesLanguages}</p>
                </div>
            `;
        })
        .join('');
}