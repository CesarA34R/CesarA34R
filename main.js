function showResult(){
    var score = 0;
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    var q3Answer = document.querySelector('input[name="q3"]:checked');
    var q4Answer = document.querySelector('input[name="q4"]:checked');

    if (q1Answer && q2Answer && q3Answer && q4Answer) {
        if (q1Answer.value ==="a") {
            score++;
        }


        if (q2Answer.value ==="c") {
            score++;
        }

        if (q3Answer.value ==="c") {
            score++;
        }

        if (q4Answer.value ==="d") {
            score++;
        }

        var resultElement = document.getElementById("result");
        resultElement.innerHTML = "Você acertou " + score + " de 4 perguntas!";
    }
    else{
        alert("Por favor, responda todas as perguntas.");
    }
}