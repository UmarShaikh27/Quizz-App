var arrayofobj = [
  {
    num: "1/5",
    question: "HTML stand for",
    options: {
      a: "Hyper text markup Language",
      b: "Hyper text programming Language",
      c: "Hyper text styling Language",
      d: "Hyper text scripting Language",
    },
    correctAns: "Hyper text markup Language",
  },
  {
    num: "2/5",
    question: "Which type of JavaScript Languages is",
    options: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    correctAns: "Object-Base",
  },
  {
    num: "3/5",
    question: "The 'function' and  'var' are known as:",
    options: {
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
    },
    correctAns: "Declaration statements",
  },
  {
    num: "4/5",
    question: "who is the present president of pakistan",
    options: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    correctAns: "Arif Alvi",
  },
  {
    num: "5/5",
    question: "How many prayers in a day:",
    options: {
      a: "6",
      b: "5",
      c: "3",
      d: "none",
    },
    correctAns: "5",
  },
];



var counter = 0
var rightAns = 0
var wrongAns = 0


var question = document.getElementById("question");
var answers = document.getElementsByClassName("answers");
var pagenum = document.getElementById("pagenum")

var thenextbtn = document.getElementById("thenextbtn")
var startquizbtn = document.getElementById("startquizbtn")
var quizCont = document.getElementById("quizCont")
var seconds = document.getElementById("seconds")
var theResultCont = document.getElementById("theResultCont")

var stdName = document.getElementById("stdName")
var stdEmail = document.getElementById("stdEmail")
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
var userPassword = document.getElementById("userPassword")

var correctAnswer = document.getElementById("correctAnswer")
var wrongAnswer = document.getElementById("wrongAnswer")
var marksGained = document.getElementById("marksGained")



// SETTING ONLCLICK ON ANSWERS ///////
for(var x = 0; x<answers.length ; x++){
  answers[x].setAttribute("onclick" , "selectfunc(this)")
}

function formsubmit(x){
  x.parentNode.style.display = "none"
  startquizbtn.style.display = "block"

}


function startquizfunc(x){

  //SETTING DISPLAYS
  startquizbtn.style.display = "none"
  quizCont.style.display = "block"
  thenextbtn.style.display = "none" // Changed from visibility to display

  //SETTING ELEMENTS//
  question.innerHTML = arrayofobj[counter].question
  answers[0].innerHTML = arrayofobj[counter].options.a
  answers[1].innerHTML = arrayofobj[counter].options.b
  answers[2].innerHTML = arrayofobj[counter].options.c
  answers[3].innerHTML = arrayofobj[counter].options.d
  pagenum.innerHTML = arrayofobj[counter].num

  // Reset answer options interactivity
  for(var i = 0; i < answers.length; i++) {
    answers[i].style.pointerEvents = "auto"
    answers[i].style.color = "black"
  }
}

function nextfunc(x){
  
  //next function//
  counter++
  if(counter < arrayofobj.length){
    startquizfunc()
  }
  else{
    quizCont.style.display = "none"
    theResultCont.style.display = "block"
    
    // Update results
    correctAnswer.innerHTML = rightAns
    wrongAnswer.innerHTML = wrongAns
    marksGained.innerHTML = rightAns*2
  }

  // Hide next button until answer is selected
  thenextbtn.style.display = "none"

  if(counter === arrayofobj.length - 1){
    thenextbtn.innerHTML = "Submit"
  }
}

function selectfunc(x){

  var currentAns = arrayofobj[counter].correctAns
  
  if(x.innerHTML == currentAns){
    console.log("yeah");
    rightAns++
  }
  else{
    console.log("noope");
    wrongAns++
  }
  //change selected li colour//
  x.style.color = "var(--violet)"

  // disable lli//
  for(var x = 0; x<answers.length ; x++){
    answers[x].style.pointerEvents = "none"
  }  //button visible.//
  thenextbtn.style.display = "block"
  
}

//TIMER////
var secjs = 60
var timer = setInterval(function(){

  secjs--
  seconds.innerHTML = secjs
  
  if(secjs === 0){
    clearInterval(timer)
    quizCont.style.display = "none";
    // resultBox.style.display = "block";
  }

} , 1000);