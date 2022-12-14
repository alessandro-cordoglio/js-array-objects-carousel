"use strict"
/* Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso l'alto o il basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
 */
const BtnNext= document.querySelector(".next")
const BtnPrev= document.querySelector(".previous")
let active=0
const images = [
    {
        id: 1,
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        id: 2,
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        id: 3,
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        id: 4,
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        id: 5,
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

images.forEach(element => {
    const container= document.querySelector(".items-list")
    const itemElement= document.createElement("div")
    itemElement.classList.add("item-element")
    const innerElement= `<img src="${element.image}" alt="${element.title}">`
    itemElement.innerHTML=innerElement
    itemElement.setAttribute(`id`, `${element.id}`)
    container.append(itemElement)
    if (itemElement.id=="1") {
        itemElement.classList.add("selected")
    }

    const mainContainer= document.querySelector(".items")
    const mainElement= document.createElement("div")
    mainElement.classList.add("item")
    mainElement.setAttribute(`id`, `main-${element.id}`)
    mainElement.innerHTML=innerElement
    mainContainer.append(mainElement)
    if (mainElement.id=="main-1") {
        mainElement.classList.add("selected-main")
        document.querySelector(".text").innerHTML=`<h1 class="fs-5">${images[0].title}</h1><p>${images[0].text}</p>`
    }
});

BtnNext.addEventListener("click", function(){
        /* console.log(active) */
        document.querySelectorAll(".item-element")[active].classList.remove("selected")
        document.querySelectorAll(".item")[active].classList.remove("selected-main")
    if (active===images.length - 1 ) {
        active=0
    }else{
        active++;
    }
    document.querySelector(".text").innerHTML=`<h1 class="fs-5">${images[active].title}</h1><p>${images[active].text}</p>`
    document.querySelectorAll(".item-element")[active].classList.add("selected")
    document.querySelectorAll(".item")[active].classList.add("selected-main")
    
})

BtnPrev.addEventListener("click", function(){
    console.log(active)
    document.querySelectorAll(".item-element")[active].classList.remove("selected")
    document.querySelectorAll(".item")[active].classList.remove("selected-main")
if (active===0) {
    active=images.length - 1
}else{
    active--;
}
document.querySelectorAll(".item-element")[active].classList.add("selected")
document.querySelectorAll(".item")[active].classList.add("selected-main")
document.querySelector(".text").innerHTML=`<h1 class="fs-5">${images[active].title}</h1><p>${images[active].text}</p>`

})
