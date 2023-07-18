const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<Script>",
        b: "<script>",
        c: "<Scripting>",
        d: "none of the above",
        correct: "b",  
    },
    {
        question: "Inside which HTML element do we put the Css?",
        a: "<css>",
        b: "<addcss>",
        c: "<Scripting>",
        d: "<link>",
        correct: "d",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<br>",
        b: "<hr>",
        c: "<break>",
        d: "<newline>",
        correct: "a",
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "In the <head> section",
        b: "In the <body> section",
        c: "At the end of document",
        d: "none of these",
        correct: "a",
    },
    {
        question: "How can you make a numbered list?",
        a: "<ol>",
        b: "<ul>",
        c: "<list>",
        d: "<li>",
        correct: "a",
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        a: "<h6>",
        b: "<heading>",
        c: "<h1>",
        d: "<head>",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    }

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
           
       } else {
        
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()" >Reload</button>
          
           `
       }
    }
   
})