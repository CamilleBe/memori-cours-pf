/**
 * [x] 1) Je récupère toutes mes cartes
 * [x] 2) Brancher les écouteurs d'évènements sur le clic
 * [x] 3) Au clique ma carte se retourner
 *      - Ajouter ma classe
 * [x] 4) Je peux retourner seulement 2 cartes
 *      - J'enregistre le nombre de carte retourner dans un variable
 *      - Si le nombre de carte retourné est égale à 2 bloquer le click
 *      - Appelé la fonction 6
 *
 * [x] 5) je sauvegarde mon premier choix et mon deuxième choix
 * [x] 6) Je compare les deux cartes. Si se sont les mêmes elles restent retournés et je peux rejouer
 * [] 7) Sinon je les retourne et je peux rejouer
 */

/**
 *
 * @type {HTMLCollectionOf<Element>}
 */
let cards = document.getElementsByClassName('card');
console.log(cards);

let returnCard = 0;
let firstCard = "";
let secondCard = "";

for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', function () {
        //console.log(cards[i] + 'carte cliquée');

        returnCard++;
        console.log(returnCard);

        if (returnCard <= 2) {
            console.log('nombre de clique: ' + returnCard);

            this.classList.add('flip');
            //console.log(this.classList);

            if (returnCard === 1) {

                //firstCard = document.querySelector("img");
                firstCard = this.querySelector('.back-view img').src;


            } else {
                secondCard = this.querySelector('.back-view img').src;
            }

            //secondCard = this;

            if (!firstCard === '' && !secondCard === '' && firstCard === secondCard) {
                console.log('je passe dans ma boucle de vérification');

                alert("T'as une paire chakal");

                console.log(firstCard);
                console.log(secondCard);

                returnCard = 0;

            } else {
                //this.classList.remove('flip');
                console.log('FAUX');

                console.log(firstCard);
                console.log(secondCard);

                returnCard = 0;

            }
        }

    });
}


/**
 * Je veux enregistrer mes cartes
 * quand le clic=1 this=firstcard
 * sinon this=secondcard
 */