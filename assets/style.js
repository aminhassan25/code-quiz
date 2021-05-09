let currentQuestion = 0;
let score = 0;
let c = 60;
let totquestions = questions.length;
let quizContainer = document.getElementById("quiz-container");
let questionEl = document.getElementById("question");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let nextBtn = document.getElementById("next");
let startBtn = document.getElementById("start");
let subBtn = document.getElementById("submit");
let result = document.getElementById("result");



function loadQuestion(questionIndex) {
    document.getElementById("start").disabled = true;
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
};

function loadNextQuestion() {
    var userChoice = document.querySelector('input[type=radio]:checked');
    if (!userChoice) {
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if (questions[currentQuestion].answer === answer) {
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == totquestions) {
        startBtn.style.visibility = 'hidden';
        nextBtn.style.visibility = 'hidden';
        quizContainer.style.display = "none";
        result.style.display = "";
        result.textContent = score;
        return;
    }
    loadQuestion(currentQuestion);
}


var myTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);

    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
            clearInterval(myTimer);
        }
    }
}