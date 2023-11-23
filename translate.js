const portuga = document.createElement("script");
portuga.src = "./idiomas/portugues.js";
document.head.appendChild(portuga);

const espanhol = document.createElement("script");
espanhol.src = "./idiomas/spanish.js";
document.head.appendChild(espanhol);

const francais = document.createElement("script");
francais.src = "./idiomas/francais.js";
document.head.appendChild(francais);

const ingles = document.createElement("script");
ingles.src = "./idiomas/english.js";
document.head.appendChild(ingles);

let selectIdioma = document.querySelector('#idioma');
selectIdioma.addEventListener("change", function () {
    translate(this.value);
})

function translate(idioma) {
    const traducao = (idioma == "br") ? portugues() : (idioma == "es") ? espanol() : (idioma == "fr") ? frances() : (idioma == "en") ? english() : null;
    setLanguage(traducao);
}

function setLanguage(traducao) {
    btsoma = document.getElementById('btsoma');
    btsubtracao = document.getElementById('btsubtracao');
    btdivisao = document.getElementById('btdivisao');
    btmultplicacao = document.getElementById('btmultplicacao');
    titulo = document.getElementById('titulo');
    texto = document.getElementById('texto');

    btsoma.value = traducao.soma;
    btsubtracao.value = traducao.subtracao;
    btdivisao.value = traducao.divisao;
    btmultplicacao.value = traducao.multplicacao;
    titulo.textContent = traducao.titulo;
    texto.textContent = traducao.boasvindas;
}