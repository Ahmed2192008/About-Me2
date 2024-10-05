var x1 = document.getElementById("myBtn1");
var x2 = document.getElementById("myBtn2");
var x3 = document.getElementById("myBtn3");
var x4 = document.getElementById("myBtn4");
var x5 = document.getElementById("myBtn5");
var x6 = document.getElementById("myBtn6");
var x7 = document.getElementById("myBtn7");
var x8 = document.getElementById("myBtn8");
var x9 = document.getElementById("myBtn9");
var y1 = document.getElementById("myH1");
var y2 = document.getElementById("myH2");
var y3 = document.getElementById("myH3");
var y4 = document.getElementById("myH4");
var y5 = document.getElementById("myH5");
var y6 = document.getElementById("myH6");
var y7 = document.getElementById("myH7");
var y8 = document.getElementById("myH8");
var y9 = document.getElementById("myH9");
var Exit2 = document.getElementById("Exit2");
var dynamic = document.getElementById("dynamic");
var open = document.getElementById("open")
open.addEventListener("click", open2);
Exit2.addEventListener("click", Exit1);

function Exit1(){
  dynamic.style.display = "none";
  open.style.display = "block";
}

function open2(){
  dynamic.style.display = "block";
  open.style.display = "none";
}


x1.addEventListener("mouseover", myFunction1);
x1.addEventListener("mouseout", myThirdFunction1);

x2.addEventListener("mouseover", myFunction2);
x2.addEventListener("mouseout", myThirdFunction2);

x3.addEventListener("mouseover", myFunction3);
x3.addEventListener("mouseout", myThirdFunction3);

x4.addEventListener("mouseover", myFunction4);
x4.addEventListener("mouseout", myThirdFunction4);

x5.addEventListener("mouseover", myFunction5);
x5.addEventListener("mouseout", myThirdFunction5);

x6.addEventListener("mouseover", myFunction6);
x6.addEventListener("mouseout", myThirdFunction6);


x7.addEventListener("mouseover", myFunction7);
x7.addEventListener("mouseout", myThirdFunction7);


x8.addEventListener("mouseover", myFunction8);
x8.addEventListener("mouseout", myThirdFunction8);


x9.addEventListener("mouseover", myFunction9);
x9.addEventListener("mouseout", myThirdFunction9);



function myFunction1() {
    y1.style.display = "block";

}

function myThirdFunction1() {
    y1.style.display = "none";
  }


  function myFunction2() {
    y2.style.display = "block";

}

function myThirdFunction2() {
    y2.style.display = "none";
  }



  function myFunction3() {
    y3.style.display = "block";

}

function myThirdFunction3() {
    y3.style.display = "none";
  }


  function myFunction4() {
    y4.style.display = "block";

}

function myThirdFunction4() {
    y4.style.display = "none";
  }




  function myFunction5() {
    y5.style.display = "block";

}

function myThirdFunction5() {
    y5.style.display = "none";
  }


  function myFunction6() {
    y6.style.display = "block";

}

function myThirdFunction6() {
    y6.style.display = "none";
  }


  


function myFunction7() {
    y7.style.display = "block";

}

function myThirdFunction7() {
    y7.style.display = "none";
  }



  function myFunction8() {
    y8.style.display = "block";

}

function myThirdFunction8() {
    y8.style.display = "none";
  }



  function myFunction9() {
    y9.style.display = "block";

}

function myThirdFunction9() {
    y9.style.display = "none";
  }



