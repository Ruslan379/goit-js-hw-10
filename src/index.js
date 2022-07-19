import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const r = fetch("https://restcountries.com/v3.1/name/swed")
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
                    <div class="country-flag">
                        <img class="img-country-flag"
                            width = 30 px
                            src="${svg}"
                            alt="${official}"
                        />
                        <h1 class="card-title">${official}</h1>
                    </div>
                <p class="card-capital">Capital: ${capital}</p>
                <p class="card-population">Population: ${population}</p>
                <p class="card-languages">languages: ${valuesLanguages}</p>
                </div>
            `;
        })
        .join('');
}