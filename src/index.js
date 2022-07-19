import './css/styles.css';

const DEBOUNCE_DELAY = 300;


const r = fetch("https://restcountries.com/v3.1/name/peru")
    .then(response => {
        return response.json();
    })
    .then(countries => {
        console.log(countries);
    })
    .catch(error => {
        console.log(error);
    });

// console.log(r);