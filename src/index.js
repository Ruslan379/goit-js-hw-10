//? 1.0.Получаем ссылку на div-контейнер для разметки ОДНОЙ страны:
// const countryInfoContainer = document.querySelector('.country-info');

//todo 2.0.Получаем ссылку на список для разметки СПИСКА стран:
// const countriesList = document.querySelector('.country-list');




//!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import './css/styles.css';

import debounce from 'lodash.debounce';

import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js

const refs = getRefs(); //! Создаем объект всех ссылок refs.*


const DEBOUNCE_DELAY = 300;

//!  Создаем слушателя событий на поле ввода данных - input:
refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY)); //! сюда вешаем DEBOUNCE_DELAY = 300;


//!  Ф-ция, к-рая прослушивает события на поле ввода данных - input:
function onInput(evt) {
    evt.preventDefault(); //? отменить действие по умолчанию - preventDefault().

    // console.log("Вешаю слушателя на поле ввода данных - input");
    const t = evt.target.value;
    console.log(t);
}



//*  Вызываем ф-ция, которая делает HTTP-запрос
fetchCountries("un")
    .then(renderCountriesCard) //* Рисование интерфейса выносим в отдельную ф-цию - renderCountriesCard
    .catch(error => console.log(error));


//*   Ф-ция, которая делает HTTP-запрос на ресурс name 
//*  и возвращает промис с массивом стран по ID или Name:
function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => {
            return response.json();
        })

}





//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
// countryInfoContainer.insertAdjacentHTML('beforeend', createCountriCardMarkup);

//?   1.1.Ф-ция, к-рая создает массив с новой разметкой для ОДНОЙ страны:
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

//* Ф-ция, к-рая отрисовывает интерфейс:
function renderCountriesCard(countries) {
    // тут надо ставить условие при котором выбирается разная функция для markup

    //? разметка ОДНОЙ страны:
    // const markup = createCountryCardMarkup(countries);
    // refs.countryInfoContainer.innerHTML = markup;

    //todo разметка СПИСКА стран:
    const markup = createCountriesList(countries);
    refs.countriesList.innerHTML = markup;

    // console.log(markup);
}


