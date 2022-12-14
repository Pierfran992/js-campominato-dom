/* CONSEGNA:
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e partite da li, sennò range rimane di base 1-100): le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella:
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

// creo la costante del punteggio e del punteggio massimo raggiungibile per la vittoria
let point = 0;
let maxPoint = 84;

// richiamo il container in cui inserire le caselle generate
const container = document.querySelector("div.container");
console.log(container);

// richiamo il contenitore in cui inserire il punteggio
let msCurrentScore = document.querySelector("span.ms_current_score");

// richiamo il pulsante play per iniziare a creare le 100 caselle
const play = document.querySelector("div.ms_play");
play.addEventListener("click", 
    function() {

        // dò al div con classe .ms_score anche la classe ms_dblock così da farlo apparire quando clicco play
        let msScore = document.querySelector("div.ms_score");
        msScore.classList.add("ms_dblock");

        // svuoto il container delle celle
        container.innerHTML = '';
        msCurrentScore.innerHTML = point = 0;
        console.clear();

        // genero l'array delle bombe
        const bombArray = genArrNumUnicRandomMinMax(16, 1, 100);
        console.log(bombArray);

        // creo il ciclo for per creare le 100 caselle nel DOM
        for(let i = 1; i <= 100; i++) {

            // creo un nuovo elemento 
            let newElement = createElement("div", "ms_box");
            console.log(newElement);

            // aggiungo all'elemento creato un evento al click dello stesso
            newElement.addEventListener("click",
                function() {

                    // creo le condizioni del gioco al click sulle caselle
                    if (bombArray.includes(i)) { // condizioni quando si clicca su una casella che contiene la bomba
                        this.classList.add("ms_bomb");
                        const gameOver = alert("GAME OVER");

                    }else { //condizioni quando si clicca su una casella point
                        this.classList.add("ms_point");
                        point++;
                        let newPoint = point;

                        //imposto la codizione di vittoria
                        if (newPoint === maxPoint){
                            const youWin = alert("YOU WIN");
                        } else {
                            msCurrentScore.innerHTML = newPoint;
                        } 
                        
                    }

                }, {once: true}
            );

            // inserisco nell'elemento il valore di i
            newElement.append([i]);

            // inserisco nel DOM il nuovo elemento creato
            container.appendChild(newElement);
        }
    }
);

// FUNZIONI
// Creo la funzione per generare vari elementi con classi o id
function createElement (typeElement, idClassElement) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(idClassElement);

    // ritorno l'elemento
    return element;
} 

// creo la funzione per generare numeri random
function randomNumberMinMax (min, max) {
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

// creo la funzione per creare un arrey di numeri random unici 
function genArrNumUnicRandomMinMax (maxElement, minNum, maxNum) {
    
    // creo l'array
    const arrNumUnicRandom = [];

    // genero i numeri da inserire nell'array
    while (arrNumUnicRandom.length < maxElement) {
        let newNumber = randomNumberMinMax (minNum, maxNum);
        if (!arrNumUnicRandom.includes(newNumber)){
            arrNumUnicRandom.push(newNumber);
        }
    }

    // ritorno l'array generato
    return arrNumUnicRandom;
}

