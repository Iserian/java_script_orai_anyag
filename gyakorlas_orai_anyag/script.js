const honapok = [
    "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
];

console.log("Script loaded");

document.addEventListener('DOMContentLoaded', oldalBetolt);

function oldalBetolt() {
    console.log("DOM betöltött");

    const hozzaadGomb = document.getElementById('date');
    hozzaadGomb.classList.add('gombok');
    hozzaadGomb.addEventListener('click', listahozAd);
    gombCreate();
}

function listahozAd() {
    const lista = document.createElement('ol');
    lista.id = "lista";

    for (let i = 0; i < honapok.length; i++) {
        const listaElem = document.createElement('li');
        listaElem.textContent = honapok[i];
        lista.append(listaElem);
    }

    document.body.append(lista);

    const hozzaadGomb = document.getElementById('date');
    hozzaadGomb.disabled = true;
}

function gombCreate() {
    const gomb = document.createElement('button');
    gomb.textContent = "Nyomj meg";
    gomb.id = 'activate';
    gomb.classList.add('active_button');
    document.body.append(gomb);
    gomb.addEventListener('click', gombEnable);
}

function gombEnable() {
    const hozzaadGomb = document.getElementById('date');
    hozzaadGomb.disabled = false;

    const listaElemek = document.getElementById('lista').remove();
}

const kepek = []

let aktualis = 0;

function picture_create(){
    console.log('picture_create is not "NULL"')
    picture = document.createElement("img").src = "kepek/ez_egy_fa.png"
    picture.id = 'picture';
    picture.classList.add('lot_pictures');
    document.body.append(picture);
}