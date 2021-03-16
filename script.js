const quizData = [
  {
    question: "What is my name",
    optA: "M D Midhun Reddy",
    optB: "M Midhun Reddy",
    optC: "M Midhun Redy",
    optD: "M Midhun Rddy",
    correct: "a",
  },
  {
    question: "What is my age",
    optA: 17,
    optB: 18,
    optC: 19,
    optD: 20,
    correct: "b",
  },
  {
    question: "What is my name",
    optA: "M D Midhun Reddy",
    optB: "M Midhun Reddy",
    optC: "M Midhun Redy",
    optD: "M Midhun Rddy",
    correct: "a",
  },
  {
    question: "What is my age",
    optA: 17,
    optB: 18,
    optC: 19,
    optD: 20,
    correct: "b",
  },
];

const que = document.getElementById("que");
const a = document.getElementById("option-text-a");
const b = document.getElementById("option-text-b");
const c = document.getElementById("option-text-c");
const d = document.getElementById("option-text-d");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const save = document.getElementById("save");
const marks = document.getElementById("marks");
let currentQue = 0;
let correctAns = 0;

function quizApp() {
  const currentQtext = quizData[currentQue];
  const quetext = currentQtext.question;
  const optat = currentQtext.optA;
  const optbt = currentQtext.optB;
  const optct = currentQtext.optC;
  const optdt = currentQtext.optD;
  //console.log(quetext, optat, optct, optdt);
  que.innerHTML = quetext;
  a.innerHTML = optat;
  b.innerHTML = optbt;
  c.innerHTML = optct;
  d.innerHTML = optdt;
}

quizApp();

prev.addEventListener("click", () => {
  if (currentQue - 1 >= 0) {
    currentQue--;
  }
  quizApp();
});
next.addEventListener("click", () => {
  if (currentQue + 1 < quizData.length) {
    currentQue++;
  }
  quizApp();
});
save.addEventListener("click", () => {
  var ele = document.getElementsByName("answer");
  console.log(ele);
  for (i = 0; i < ele.length; i++) {
  //  console.log(quizData[currentQue].correct, ele[i].checked);
    if (ele[i].checked == true) {
      if (ele[i].id == quizData[currentQue].correct) correctAns++;
    }
  }
  if (currentQue + 1 < quizData.length) {
    currentQue++;
  }
  quizApp();
});
submit.addEventListener("click", () => {
  const heade = "Your Marks are " + correctAns;
  marks.innerText = heade;
});

function onIncrement(){

}