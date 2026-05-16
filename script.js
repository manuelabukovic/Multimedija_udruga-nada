// script.js

function toggleFact(card){
    const fact = card.querySelector('.fact');

    fact.classList.toggle('hidden');
}

function checkQuiz(){

    let score = 0;

    // Q1
    const q1 = document.querySelector('input[name="q1"]:checked');

    if(q1 && q1.value === "b"){
        score++;
    }

    // Q2
    const q2 = document.querySelector('input[name="q2"]:checked');

    if(q2 && q2.value === "a"){
        score++;
    }

    // Q3
    const q3 = document.querySelector('input[name="q3"]:checked');

    if(q3 && q3.value === "a"){
        score++;
    }

    const result = document.getElementById('result');

    result.innerHTML = `Osvojili ste ${score}/3 boda!`;

    if(score === 3){
        result.innerHTML += "<br>Odlično poznajete važnost prevencije!";
    }
    else if(score === 2){
        result.innerHTML += "<br>Vrlo dobro! Nastavite se informirati.";
    }
    else{
        result.innerHTML += "<br>Preporučuje se dodatna edukacija o prevenciji.";
    }

}