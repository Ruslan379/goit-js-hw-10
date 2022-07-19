import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const r = fetch("https://restcountries.com/v3.1/name/uni")
    .then(response => {
        return response.json();
    })
    .then(countries => {
        console.log(countries);
        // тут надо ставить условие при котором выбирается разная функция для markup

        //! разметка ОДНОЙ страны:
        const markup = createCountryCardMarkup(countries);
        countryInfoContainer.innerHTML = markup;

        //todo разметки СПИСКА стран:
        // const markup = createCountriesList(countries);
        // countriesList.innerHTML = markup;

        console.log(markup);
    })
    .catch(error => {
        console.log(error);
    });

// console.log(countries);

//! 1.0.Получаем ссылку на div-контейнер для разметки ОДНОЙ страны:
const countryInfoContainer = document.querySelector('.country-info');
// console.log(ImageContainer);

//todo 2.0.Получаем ссылку на список для разметки СПИСКА стран:
const countriesList = document.querySelector('.country-list');

//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
// countryInfoContainer.insertAdjacentHTML('beforeend', createCountriCardMarkup);

//!   1.1.Ф-ция, к-рая создает массив с новой разметкой для ОДНОЙ страны:
function createCountryCardMarkup(countries) {
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


//todo 2.1.Ф-ция, к-рая создает список для разметки СПИСКА стран:
function createCountriesList(countries) {
    return countries
        .map(({ name: { official }, flags: { svg }, languages }) => {
            return `
                    <li class="country-item">
                        <a class="country"
                        href="">
                            <img
                            class="country-image"
                            width = 30 px
                            src="${svg}"
                            alt="${official}"
                            />
                        ${official}
                        </a>
                    </li>
            `;
        })
        .join('');
}