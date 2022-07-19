!function(){fetch("https://restcountries.com/v3.1/name/uni").then((function(n){return n.json()})).then((function(c){console.log(c);
//! разметка ОДНОЙ страны:
var a=
//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
//!   1.1.Ф-ция, к-рая создает массив с новой разметкой для ОДНОЙ страны:
function(n){return n.map((function(n){var c=n.name.official,a=n.capital,t=n.population,o=n.flags.svg,l=n.languages,i=Object.values(l).join(", ");return'\n                <div class="card-country">\n                    <div class="country-flag">\n                        <img class="img-country-flag"\n                            width = 30 px\n                            src="'.concat(o,'"\n                            alt="').concat(c,'"\n                        />\n                        <h1 class="card-title">').concat(c,'</h1>\n                    </div>\n                <p class="card-capital">Capital: ').concat(a,'</p>\n                <p class="card-population">Population: ').concat(t,'</p>\n                <p class="card-languages">languages: ').concat(i,"</p>\n                </div>\n            ")})).join("")}(c);n.innerHTML=a,console.log(a)})).catch((function(n){console.log(n)}));var n=document.querySelector(".country-info");document.querySelector(".country-list")}();
//# sourceMappingURL=index.9cae5c66.js.map
