// script.js

function toggleFact(card){
    const fact = card.querySelector('.fact');

    fact.classList.toggle('hidden');
}

function toggleStep(step){
    const text = step.querySelector('.step-text');

    text.classList.toggle('hidden');
}

function checkQuiz(){

    let score = 0;

    // Točni odgovori
    const answers = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "c"
    };

    // Makni stare oznake
    document.querySelectorAll('.question label').forEach(label => {
        label.style.backgroundColor = "";
        label.style.color = "";
        label.style.borderRadius = "";
        label.style.padding = "";
    });

    // Provjera pitanja
    for(let key in answers){

        const selected = document.querySelector(`input[name="${key}"]:checked`);
        const allAnswers = document.querySelectorAll(`input[name="${key}"]`);

        allAnswers.forEach(answer => {

            const label = answer.parentElement;

            // TOČAN odgovor → zeleno
            if(answer.value === answers[key]){
                label.style.backgroundColor = "#c8f7c5";
                label.style.color = "#1b5e20";
                label.style.borderRadius = "8px";
                label.style.padding = "5px";
            }

            // KRIVI odabrani odgovor → crveno
            if(selected && selected.value !== answers[key] && answer.checked){
                label.style.backgroundColor = "#ffcdd2";
                label.style.color = "#b71c1c";
                label.style.borderRadius = "8px";
                label.style.padding = "5px";
            }
        });

        // bodovi
        if(selected && selected.value === answers[key]){
            score++;
        }
    }

    const result = document.getElementById('result');

    result.innerHTML = `Osvojili ste ${score}/4 boda!`;

    if(score === 4){
        result.innerHTML += "<br>Odlično poznajete važnost prevencije!";
    }
    else if(score === 3){
        result.innerHTML += "<br>Vrlo dobro! Nastavite se informirati.";
    }
    else{
        result.innerHTML += "<br>Preporučuje se dodatna edukacija o prevenciji.";
    }

}