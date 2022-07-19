fetch("https://restcountries.com/v3.1/name/uni").then((n=>n.json())).then((a=>{console.log(a);
//! разметка ОДНОЙ страны:
const c=
//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
//!   1.1.Ф-ция, к-рая создает массив с новой разметкой для ОДНОЙ страны:
function(n){return n.map((({name:{official:n},capital:a,population:c,flags:{svg:o},languages:t})=>`\n                <div class="card-country">\n                    <div class="country-flag">\n                        <img class="img-country-flag"\n                            width = 30 px\n                            src="${o}"\n                            alt="${n}"\n                        />\n                        <h1 class="card-title">${n}</h1>\n                    </div>\n                <p class="card-capital">Capital: ${a}</p>\n                <p class="card-population">Population: ${c}</p>\n                <p class="card-languages">languages: ${Object.values(t).join(", ")}</p>\n                </div>\n            `)).join("")}(a);n.innerHTML=c,console.log(c)})).catch((n=>{console.log(n)}));const n=document.querySelector(".country-info");document.querySelector(".country-list");
//# sourceMappingURL=index.1b3347d3.js.map
