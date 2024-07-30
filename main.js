// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyperlinking Text Marking Language",
    correct: "a",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    a: "bgcolor",
    b: "color",
    c: "background",
    d: "background-color",
    correct: "d",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    a: "<style>",
    b: "<script>",
    c: "<css>",
    d: "<link>",
    correct: "a",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "styles",
    b: "class",
    c: "style",
    d: "font",
    correct: "c",
  },
  {
    question: "Which of the following is the correct CSS syntax?",
    a: "{body;color:black;}",
    b: "body {color: black;}",
    c: "{body:color=black;}",
    d: "body:color=black;",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Computer Style Sheets",
    c: "Cascading Style Sheets",
    d: "Colorful Style Sheets",
    correct: "c",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    a: "<a>",
    b: "<link>",
    c: "<href>",
    d: "<nav>",
    correct: "a",
  },
  {
    question:
      "Which HTML attribute is used to define the destination of a link?",
    a: "src",
    b: "link",
    c: "href",
    d: "url",
    correct: "c",
  },
  {
    question: "Which of the following is used to create a JavaScript function?",
    a: "function myFunction() {}",
    b: "function:myFunction() {}",
    c: "create myFunction() {}",
    d: "function = myFunction() {}",
    correct: "a",
  },
  {
    question: "Which of the following is a JavaScript data type?",
    a: "string",
    b: "number",
    c: "boolean",
    d: "All of the above",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <center><h2>You answered ${score}/${quizData.length} questions correctly<br><br></h2></center>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
