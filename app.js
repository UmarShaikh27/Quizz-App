var arrayofobj = [
  {
    num: 1,
    question: "What is the full form of HTML?",
    options: {
      a: "Hyper Text Markup Language",
      b: "Hyper Text Programming Language",
      c: "Hyper Text Styling Language",
      d: "Hyper Text Scripting Language",
    },
    correctAns: "Hyper Text Markup Language",
  },
  {
    num: 2,
    question: "Choose the correct HTML element for the largest heading:",
    options: {
      a: "<head> ",
      b: "<h1>",
      c: "<h6>",
      d: "<heading>",
    },
    correctAns: "<h1>",
  },
  {
    num: 3,
    question: "What is the correct HTML element for inserting a line break?",
    options: {
      a: "<br>",
      b: "<break>",
      c: "<lb>",
      d: "<strong>",
    },
    correctAns: "<br>",
  },
  {
    num: 4,
    question: "Choose the correct HTML element to define important text",
    options: {
      a: "<i>",
      b: "<strong>",
      c: "<important>",
      d: "<b>",
    },
    correctAns: "<strong>",
  },
  {
    num: 5,
    question: "How can you make a numbered list?",
    options: {
      a: "<dl>",
      b: "<list>",
      c: "<ol>",
      d: "<ul>",
    },
    correctAns: "<ol>",
  },
]



var counter = 0
var rightAns = 0
var wrongAns = 0


var question = document.getElementById("question");
var answers = document.getElementsByClassName("answers");



function nextfunc(x){

  question.innerHTML = arrayofobj[counter].question
  answers[0].innerHTML = arrayofobj[counter].options.a
  answers[1].innerHTML = arrayofobj[counter].options.b
  answers[2].innerHTML = arrayofobj[counter].options.c
  answers[3].innerHTML = arrayofobj[counter].options.d




}




