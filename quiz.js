var questionBank = [{
    question: 'Which country gifted the Statue of Liberty to the United States of America?',
    option: ['India', 'Canada', 'France', 'Mexico'],
    answer: 'France'
},
{
    question: 'Latin America is home to which of these new Seven Wonders of the World?',
    option: ["Chichen Itza", "Machu Picchu", "Christ the Redeemer", "All the above"],
    answer: 'All the above'
},
{
    question: 'Which one of these is the oldest amusement park in the world?',
    option: ["Tivoli Gardens, Denmark", "Bakken, Denmark", "Disneyland, USA", "Europa-Park, Germany"],
    answer: 'Bakken, Denmark'
},
{
    question: 'Which is the only country in the world that is also a continent?',
    option: ["Antarctica", "Alaska", "Australia", "Arctic"],
    answer: 'Australia'
},
{
    question: 'Which of these Asian countries is also known as ‘Nippon’ in its national language?',
    option: ["South Korea", "Japan", "Singapore", "Thailand"],
    answer: 'Japan'
},
{
    question: 'Why was Africa called the Dark Continent?',
    option: ["Because of the dark complexion of the African people", "Because dark chocolate was found in abundance in Africa", "Because Africa remained unexplored for a fairly long period of time", "Because it’s night in Africa for six months of a year"],
    answer: 'Because Africa remained unexplored for a fairly long period of time'
},
{
    question: 'You are not likely to find which of these animals in Antarctica?',
    option: ["Penguins", "Seals", "Whales", "Crocodiles"],
    answer: 'Crocodiles'
},
{
    question: 'Which of these is an UNESCO World Heritage Site in Mumbai?',
    option: ["Elephants Caves", "Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus)", "The Victorian and Art Deco Ensemble of Mumbai", "All of the above"],
    answer: 'All the above'
},
{
    question: ' Which of these is the only carbon negative state in India?',
    option: ["Rajasthan", "Sikkin", "Kerala", "Himachal Pradesh"],
    answer: 'Sikkin'
},
{
    question: ' Who is the architect of the architectural wonder ‘Taj Mahal’?',
    option: ["Shah Jahan", "Ustad Ahmad Lahori", "Jahagir", "Aurangzed"],
    answer: 'Ustad Ahmad Lahori'
},
{
    question: '  Where are the Whitsunday Islands located?",?',
    option: ["Malaysia", "Vietnam", "Philippines", "Australia"],
    answer: 'Australia'
}
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;


function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}


function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}


function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}


next.addEventListener('click', nextQuestion);


function backToQuiz() {
    location.reload();
}


function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);