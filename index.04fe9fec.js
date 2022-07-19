fetch("https://restcountries.com/v3.1/name/peru").then((n=>n.json())).then((a=>{console.log(a);const o=
//!   1.2.Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
//!   1.1.Ф-ция, к-рая создает массив с новой разметкой одной страны:
function(n){return n.map((({name:{official:n},capital:a,population:o,flags:{svg:c},languages:t})=>`\n                <div class="card-country">\n                <img class="country-flag"\n                    width = 100 px\n                    src="${c}"\n                    alt="${n}"\n                />\n                <h2 class="card-title">Capital: ${n}</h2>\n                <p class="card-population">Population: ${o}</p>\n                <p class="card-languages">languages: ${Object.values(t).join(", ")}</p>\n                </div>\n            `)).join("")}(a);console.log(o),n.innerHTML=o})).catch((n=>{console.log(n)}));const n=document.querySelector(".country-info");
//# sourceMappingURL=index.04fe9fec.js.map
