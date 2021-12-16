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

for(var x = 0; x<answers.length ; x++){
  answers[x].setAttribute("onclick" , "selectfunc(this)")
}



function startquizfunc(x){

  //SETTING DISPLAYS
  startquizbtn.style.display = "none"
  quizCont.style.display = "block"
  thenextbtn.style.visibility = "hidden"

  //SETTING ELEMENTS//
  question.innerHTML = arrayofobj[counter].question
  answers[0].innerHTML = arrayofobj[counter].options.a
  answers[1].innerHTML = arrayofobj[counter].options.b
  answers[2].innerHTML = arrayofobj[counter].options.c
  answers[3].innerHTML = arrayofobj[counter].options.d
  pagenum.innerHTML = arrayofobj[counter].num

}

function nextfunc(x){
  
  //next function//
  counter++
  if(counter< arrayofobj.length){
  startquizfunc()
  }
  else{
    quizCont.style.display = "none"
    theResultCont.style.display = "block"
  }
  // enable li//
 for(var x = 0; x<answers.length ; x++){
  answers[x].style.pointerEvents = "visible"
  answers[x].style.color = "black"

}
thenextbtn.style.visibility = "hidden"
if(arrayofobj[counter].num === "5/5"){
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
  }
  //button visible.//
  thenextbtn.style.visibility = "visible"
  
}


// var secjs = 60
// var timer = setInterval(function(){

//   secjs--
//   seconds.innerHTML = secjs
  
//   if(secjs === 00){
//     clearInterval(timer)
//     quizCont.style.display = "none";
//     // resultBox.style.display = "block";
//   }

// } , 1000);