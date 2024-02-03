const termekek = [
    "Csoki", "Rizs", "Alma"
];

let aktualis = 0;


console.log("Script loaded")

//Esemény figyelő függvény 


//Nem tudjuk hogy mikor tölt be a DOM (ezért kell ez)
document.addEventListener('DOMContentLoaded', oldalBetolt)



function oldalBetolt(){
    // console.log("Dom betöltött")
    // hozzaadGomb.addEventListener('click', koszon);



    // CLASS alapú választás
    // const listak = document.getElementsByClassName('list');

    // const hozzaadGomb2 = document.querySelector('add');
    // const listak 2 = document.querySelectorAll('list');


    // ID alapú választás
    const hozzaadGomb = document.getElementById('add');
    const torolGomb = document.getElementById('delete');
    // + click ->
        // ul ->
            // li Csoki ->
            // li Zabpehely ->
            // li Alma ->
    listaLetrehoz();

    hozzaadGomb.classList.add('gombok');
    torolGomb.classList.add('gombok');

    hozzaadGomb.addEventListener('click', listahozAd);

    torolGomb.addEventListener('click', torol);

    torolGomb.classList.remove('gombok');
    torolGomb.addEventListener("click", torol);
}

// function koszon(){
//     alert('Szia!');
// }


function listaLetrehoz(){
    const lista = document.createElement('ul');
    lista.id = 'lista';
    lista.classList.add('termekek');
    document.body.append(lista);
}

function listahozAd(){

    if(aktualis < termekek.length){
        const lista = document.getElementById('lista');
        const listaElem = document.createElement('li');
        const csoki = termekek[aktualis];
        listaElem.append(csoki);
        lista.append(listaElem);
        aktualis++;
        console.log(lista)
        console.log("Aktuális: ", aktualis)

    }


}

function torol(){

    if(aktualis > 0){
        aktualis--;
        const lista = document.getElementById('lista');
        const listaElemek = lista.querySelectorAll('li');
        listaElemek[aktualis].remove();
    }
}