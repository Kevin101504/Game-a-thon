document.addEventListener("DOMContentLoaded", function() {
    let questions = document.querySelectorAll(".question-container");
    let currentQuestion = 0;
    let score = 0;


    function updateVisibility() {
        questions.forEach((q, index) => {
            q.classList.toggle("active", index === currentQuestion);
        });

        document.getElementById("prev-btn").disabled = currentQuestion === 0;
        document.getElementById("next-btn").disabled = currentQuestion === questions.length - 1;
    }

    window.checkAnswers = function() {
        let questions = document.querySelectorAll(".question-container");
    
        questions.forEach((question, index) => {
            let selected = question.querySelector(`input[name="q${index}"]:checked`);
            let correctAnswer = question.querySelector(".correct-answer").value;
    
            if (selected && selected.value === correctAnswer) {
                score++;
            }
        });
    
        document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}!`;
    }

    window.nextQuestion = function() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            updateVisibility();
        }
    };

    window.prevQuestion = function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            updateVisibility();
        }
    };

    updateVisibility();
});
