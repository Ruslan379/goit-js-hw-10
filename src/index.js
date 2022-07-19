//? 1.0.Получаем ссылку на div-контейнер для разметки ОДНОЙ страны:
// const countryInfoContainer = document.querySelector('.country-info');

//todo 2.0.Получаем ссылку на список для разметки СПИСКА стран:
// const countriesList = document.querySelector('.country-list');


//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
// countryInfoContainer.insertAdjacentHTML('beforeend', createCountriCardMarkup);



//!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import './css/styles.css';
import Notiflix from 'notiflix';
// import axios from 'axios';
import debounce from 'lodash.debounce';
import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js

import API from './js/api-service.js';

const refs = getRefs(); //! Создаем объект всех ссылок refs.*


const DEBOUNCE_DELAY = 500;

//!  Создаем слушателя событий на поле ввода данных - input:
refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY)); //! сюда вешаем DEBOUNCE_DELAY = 300;


//!  Ф-ция, к-рая прослушивает события на поле ввода данных - input:
function onInput(evt) {
    evt.preventDefault(); //? отменить действие по умолчанию - preventDefault().

    // console.log("Вешаю слушателя на поле ввода данных - input");
    const countryInput = evt.target.value; //! countryInput - данные с input
    console.log(countryInput);

    //! Очищаем разметку
    deleteMarkup()

    //!  Вызываем ф-ция, которая делает HTTP-запрос:
    API.fetchCountries(countryInput)
        .then(renderCountriesCard) //* Рисование интерфейса выносим в отдельную ф-цию 
        .catch(onFetchError); //! Выдаем ошибку, если страна не найдена:
    // renderCountriesCard(data)

}


//! Ф-ция, которая очищает разметку
function deleteMarkup() {
    refs.countriesList.innerHTML = "";
    refs.countryInfoContainer.innerHTML = "";
}





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




//*  Ф-ция-then, к-рая отрисовывает разный интерфейс 
//*  в зависимости от полученного количества стран:
function renderCountriesCard(countries) {
    const numberOfCountries = countries.length
    console.log("numberOfCountries = ", numberOfCountries);
    // тут надо ставить условие при котором выбирается разная функция для markup
    if (numberOfCountries === 1) {
        //? разметка ОДНОЙ страны:
        // refs.countryInfoContainer.innerHTML = "";
        const markup = createCountryCardMarkup(countries);
        refs.countryInfoContainer.innerHTML = markup;

    } else if (numberOfCountries > 1 && numberOfCountries <= 10) {
        //todo разметка СПИСКА стран:
        // refs.countriesList.innerHTML = "";
        const markup = createCountriesList(countries);
        refs.countriesList.innerHTML = markup;

    } else if (numberOfCountries > 10) {
        refs.countriesList.innerHTML = "";
        refs.countryInfoContainer.innerHTML = "";
        Notiflix.Notify.success("Too many matches found. Please enter a more specific name.", { timeout: 3000, },);
    }






    // console.log(markup);
}

//! Ф-ция-catch, к-рая отрисовывает ошибку, если страна не найдена:
function onFetchError(error) {
    // console.log(`Oops, there is no country with that name`); //!
    // alert('Oops, there is no country with that name');
    Notiflix.Notify.failure(`Oops, there is no country with that name`, { timeout: 3000, },);

}