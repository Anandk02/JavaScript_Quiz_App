// Question In Array
const QuizData = [
    {
        question: "Which language runs in a web browser",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d"
    },
    {
        question: "What does CSS stand for?",
        a:"Central Style Sheet",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUV Sailboats",
        correct:"b"
    },
    {
        question: "What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyper Loop Machine Language",
        d:"Helicopters Terminals Motorboats",
        correct:"a"
    },
    {
        question: "What year was JavaScript lunched",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none Of the above",
        correct:"b"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a:"<Scripting>",
        b:"<Script>",
        c:"<JavaScript>",
        d:"none Of the above",
        correct:"b"
    },
];


// define the HTMl to variable
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const Score = document.getElementById('Score');

let currentQuiz = 0;
let score = 0;
loadQuiz()


// Load All option 
function loadQuiz(){
    deselectAnswers()
    const currentQuizData = QuizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// Unselected Answer
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

// Select Answer
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
        answer = answerEl.id
    }
})
    return answer
}

// Submit Answer
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer == QuizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < QuizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML = `
                <h2>Your answered Correctly at ${score}/${QuizData.length} question.</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})