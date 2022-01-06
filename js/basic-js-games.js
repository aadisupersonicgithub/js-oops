'use strict';

// TOPIC Guess a number 

console.log(document.querySelector('.message').textContent);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20, highscore = 0;
document.querySelector('.check').addEventListener('click', function () {

    let guessedNumber = document.querySelector('.guess').value;
    if (!guessedNumber) {
        console.log('retry');
        document.querySelector('.message').textContent = 'Invalid number';
    } else {
        if (guessedNumber == secretNumber) {
            document.querySelector('.message').textContent = "Successfully guessed!!😊";
            document.querySelector('.number').textContent = secretNumber;
            document.body.style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            if (highscore < score) {
                highscore = score;
            }
            document.querySelector('.highscore').textContent = highscore;

        } else if (guessedNumber < secretNumber) {
            if (score > 0) {
                --score;
                console.log("Too low, try again ☹️");
            } else {
                console.log("You failed the level ☹️☹️☹️");
            }
        } else {
            if (score > 0) {
                --score;
                console.log("Too high, try again ☹️");
            } else {
                console.log("You failed the level ☹️☹️☹️");
            }
        }
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
    }
})

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = 20;
    document.body.style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
})

jQuery.noConflict();
jQuery(document).ready(function ($) {
    $(document).keyup(function (event) {
        // $('*').keyup(function (event) {
        // console.log('here');
        if (event.keyCode == 13) {
            $('.check').click();
        }
    });


    // $('.check2').click(function () {
    //     console.log('hi');
    // });
});

// create first ui component : modal window

// for (let i = 0; i < 20; ++i) {
//     location.reload();
// }

// TOPIC Modal 
'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
let getModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < getModal.length; ++i) {
    console.log('clicked');
    getModal[i].addEventListener('click', openModal);
}

let btnCloseModal = document.querySelector('.close-modal');
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    console.dir(e);
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
// NOTE 1 :: same trick is used widely to add css etc. just copy paste classes 
// or use frameworks for inbuilt strong ones
// NOTE 2 :: wheneven any event happens, js creates an object, and 
// stores all details of this event in that object
// NOTE 3 Reinforcing knowledge is the most important thing you can do to learn
// IMP NOTE 4 bring confidence that you can do anything .. pahle hi fatt gayi to khelne ka matlab hi nahi 





// NOTE PIG game 
/* NOte parent ki max-width set to use % better on childs */


// Divide big problem into many easy subproblems
'use strict';

// NOTE Comments are also part of structuring the code and how we will build our app 

// If making project, make a flowChart first rough idea

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let cur0 = document.querySelector('#current--0');
let cur1 = document.querySelector('#current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');


let curScore = 0, score0 = 0, score1 = 0, whoRolled = 0;

reset();
/* swap current player turn */
function switchPlayer() {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    if (whoRolled) {
        cur1.textContent = 0;
    } else {
        cur0.textContent = 0;
    }
    whoRolled = !whoRolled;

}
score0 = 95;

/* get randomNum,  */
function rollDice() {
    if (diceEl.classList.contains('hidden')) {
        diceEl.classList.remove('hidden');
    }
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${diceValue}.png`;
    if (diceValue === 1) {
        curScore = 0;
        if (whoRolled == 0) {
            score0 = 0;
            score0El.textContent = score0;
        } else {
            score1 = 0;
            score1El.textContent = score1;
        }
        switchPlayer();
    } else {
        curScore += diceValue;
        if (whoRolled == 0) {
            cur0.textContent = curScore;
        } else {
            cur1.textContent = curScore;
        }
    }
}
let players = ['aks', 'shw'];

function showWinner(x) {
    console.log(`${players[x]} won!!😊`);
    reset();
}
function holdDice() {

    if (whoRolled) {
        score1 += curScore;
        score1El.textContent = score1;
        if (score1 >= 100) {
            showWinner(1);
        }

    } else {
        score0 += curScore;
        score0El.textContent = score0;
        if (score0 >= 100) {
            showWinner(0);
        }
    }
    curScore = 0;
    switchPlayer();
}
/* hide the dice  */
function reset() {
    // console.log("tum aa gaye");
    if (!diceEl.classList.contains('hidden')) {
        diceEl.classList.add('hidden');
    }
    score1 = 0;
    score0 = 0;
    curScore = 0;
    score1El.textContent = score1;
    score0El.textContent = score0;
    whoRolled = 0;
}

btnNew.addEventListener('click', function () {
    reset();
});
btnRoll.addEventListener('click', function () {
    rollDice();
})
btnHold.addEventListener('click', function () {
    holdDice();
})

// console.log(irandom(4))
function irandom(x) {
    return Math.trunc(Math.random() * x) + 1;
}

// TOPIC modified pig game
'use strict';

// NOTE Comments are also part of structuring the code and how we will build our app 

// If making project, make a flowChart first rough idea

const diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let player = [], score = [], cur = [], scoreEl = [];

for (let i = 0; i < 2; ++i) {
    player.push(document.querySelector(`.player--${i}`));
    cur.push(document.querySelector(`#current--${i}`));
    scoreEl.push(document.querySelector(`#score--${i}`));
    score.push(0);
}

let curScore = 0, active = 0;
let playingGame = 1;
reset();

/* swap current player turn */
function switchPlayer() {
    for (let i = 0; i < 2; ++i) {
        player[i].classList.toggle('player--active');
    }
    cur[active].textContent = 0;
    active = 1 - active;
}
score[0] = 95;

function rollDice() {
    if (diceEl.classList.contains('hidden')) {
        diceEl.classList.remove('hidden');
    }
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${diceValue}.png`;
    if (diceValue === 1) {
        score[active] = 0;
        curScore = 0;
        scoreEl[active].textContent = 0;
        switchPlayer();

    } else {
        curScore += diceValue;
        cur[active].textContent = curScore;
    }
}
let playerss = ['aks', 'shw'];

function showWinner(x) {
    console.log(`${playerss[x]} won!!😊`);
    freeze();
    // reset();
}
function freeze() {
    // alternate :: saara code boolean me rahe to chalao, after winning boolean false, in reset boolean true
    // or add remove class with these two property 
    btnRoll.disabled = true;

    btnHold.disabled = true;
}
/* hide the dice  */
function reset() {
    btnRoll.removeAttribute('disabled');
    btnHold.removeAttribute('disabled');

    // console.log("tum aa gaye");
    if (!diceEl.classList.contains('hidden')) {
        diceEl.classList.add('hidden');
    }
    curScore = 0;
    for (let i = 0; i < 2; ++i) {
        score[i] = 0;
        scoreEl[i].textContent = 0;
    }
    active = 0;
}
function holdDice() {
    score[active] += curScore;
    scoreEl[active].textContent = score[active];
    if (score[active] >= 20) {
        showWinner(active);
    }
    curScore = 0;
    switchPlayer(active);

}


btnNew.addEventListener('click', function () {
    reset();
});
btnRoll.addEventListener('click', function () {
    rollDice();
})
btnHold.addEventListener('click', function () {
    holdDice();
})

// console.log(irandom(4))
function irandom(x) {
    return Math.trunc(Math.random() * x) + 1;
}
