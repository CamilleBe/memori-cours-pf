for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener('click', function () {
        //console.log(cards[i] + 'carte cliquée');

        this.classList.add('flip');
        //console.log(this.classList);
        returnCard++;
        console.log(returnCard);

        if (returnCard === 2) {
            console.log('nombre de clique: ' + returnCard + '. Vous avez atteind la limite');

        }
    });
}

//VERSION 2
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
                firstCard = this.querySelector('.back-view img');

            } else {
                secondCard = this.querySelector('.back-view img');
            }

            //secondCard = this;

            if (firstCard === secondCard) {

                alert("T'as une paire chakal");
                console.log(firstCard);
                console.log(secondCard);

            } else {
                //this.classList.remove('flip');
            }
        }

        console.log(firstCard);
        console.log(secondCard);
    });
}

//VERSION 3
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
                firstCard = document.querySelector('.back-view img');
                console.log(firstCard + ' 1ere carte après avoir cliqué 1 fois');

            } else {
                secondCard = document.querySelector('.back-view img');

                console.log(firstCard + ' 1ere carte après avoir cliqué 2 fois');
                console.log(secondCard + ' 2eme carte après avoir cliqué 2 fois');
            }
            //secondCard = this;
            //sameCard();

            //Est ce que se sont les mêmes cartes ?
            if (!firstCard === '' && !secondCard === '' &&  firstCard === secondCard) {
                console.log('je passe dans ma boucle de vérification');

                alert("T'as une paire chakal");
                console.log(firstCard + ' if de la comparaison des cartes');
                console.log(secondCard + ' if de la comparaison des cartes');

                returnCard = 0;

            } else {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }

        }

        /*console.log(firstCard);
        console.log(secondCard);*/
    });

    /*function sameCard() {
    if (firstCard === secondCard) {

        alert("T'as une paire chakal");
        console.log(firstCard);
        console.log(secondCard);

        returnCard = 0;

    } else {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }
}*/


    /*VERSION 4 : TROUVE 1 PAIRE*/
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

                if (firstCard === secondCard) {
                    console.log('je passe dans ma boucle de vérification');

                    alert("T'as une paire chakal");

                    console.log(firstCard);
                    console.log(secondCard);

                } else {
                    //this.classList.remove('flip');
                    console.log('ELSE');

                    console.log(firstCard);
                    console.log(secondCard);

                }
            }

        });
    }
}
