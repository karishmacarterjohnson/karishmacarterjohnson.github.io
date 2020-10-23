// call numbers
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

// call operations
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const decimal = document.getElementById("decimal");
const signs = document.getElementById("signs");

const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

// display
const display1 = document.querySelector(".display1");
const display  = document.querySelector(".display");

var equation = "";
var currentDisplay = "";

zero.addEventListener('click', function(){
  currentDisplay = display.innerText;
  if (equation.length === 0){
    console.log('checkit')
    equation = '0';
    currentDisplay = '0';
    display1.innerText = equation;
    display.innerText = currentDisplay;
  }
  else if(currentDisplay.charAt(currentDisplay.length-1)!== '0'){
    //console.log('hi')
    equation+= '0';
    //console.log(currentDisplay)
    currentDisplay+= '0';
    //console.log(currentDisplay)
    display1.innerText= equation;    
    display.innerText = currentDisplay;

  }
  
  else{
    console.log('hello')
    display1.innerText = equation;
    display.innerText = '0';
  }
});

//////////////////////////////////// 

function updateNumbers(num){
    if(currentDisplay.length === 1 && currentDisplay.indexOf('0') !== -1 ){
      //string is just 0
      console.log('a')
      equation = `${num}`;
      currentDisplay= `${num}`
      display1.innerText = equation;
      display.innerText = currentDisplay;
    }
    else if(currentDisplay.charAt(currentDisplay.length-1) == '.'){
      // x.
      console.log('b')
      equation+= `${num}`;
      
      currentDisplay+=`${num}`;
      display1.innerText = equation;
      display.innerText = currentDisplay;
    }
   else if(currentDisplay.charAt(currentDisplay.length-1)=== '+' || currentDisplay.charAt(currentDisplay.length-1)=== '*' || currentDisplay.charAt(currentDisplay.length-1)=== '/' ){
     // +*/
     console.log('c')
     console.log(equation)
      currentDisplay+= `${num}`;
      equation+= `${num}`;
      display1.innerText = equation;
     console.log(equation)
      display.innerText = currentDisplay;
  }

  else {
    console.log('e')
      equation+= `${num}`;
      currentDisplay+= `${num}`;
      display1.innerText = equation;
      display.innerText = currentDisplay;
      }
  };
  


one.addEventListener('click', function(){updateNumbers(`1`);});
two.addEventListener('click', function(){updateNumbers(`2`);});
three.addEventListener('click', function(){updateNumbers(`3`);});
four.addEventListener('click', function(){updateNumbers(`4`);});
five.addEventListener('click', function(){updateNumbers(`5`);});
six.addEventListener('click', function(){updateNumbers(`6`);});
seven.addEventListener('click', function(){updateNumbers(`7`);});
eight.addEventListener('click', function(){updateNumbers(`8`);});
nine.addEventListener('click', function(){updateNumbers(`9`);});


// operations

add.addEventListener('click', function(){updateOperator('+'); });
subtract.addEventListener('click', function(){subby('-');});
multiply.addEventListener('click', function(){updateOperator('*');});
divide.addEventListener('click', function(){updateOperator('/');});
decimal.addEventListener('click', function(){decy('.');});

clear.addEventListener('click', function(){
    equation= '0';
    currentDisplay = '0';
    display1.innerText = equation;
    display.innerText = currentDisplay;
});


let solve = 0;
equals.addEventListener('click', function(){
    solve = runString(equation);
    equation+= '=';
    equation+= solve;
    currentDisplay = solve;
    display1.innerText = equation;
    display.innerText = currentDisplay;
});


function runString(string){
  return eval(string);
}


// if including a button only allow another if the previous isnt also a button
function updateOperator(char){
  currentDisplay = display.innerText;
  if(equation.indexOf('=') === -1 ){
      if (equation.length === 0 || equation.charAt(0) === 0){
        equation = `0${char}`;
        currentDisplay = `${char}`;
        display1.innerText = equation;
       display.innerText = currentDisplay;
      }
    else if( equation.charAt(equation.length-1)=== '-' ){
        equation = equation.slice(0,equation.length-2);
        equation+= `${char}`;
        currentDisplay = `${char}`;
        display1.innerText = equation;
        display.innerText = currentDisplay;
      }
//equation.charAt(equation.length-1)!= '-' &&
      else if(equation.charAt(equation.length-1)!= '+' &&  equation.charAt(equation.length-1)!= '/' && equation.charAt(equation.length-1)!= '*' && equation.charAt(equation.length-1)!= '-' ){
        console.log('here')
        console.log(equation)
        equation+= `${char}`;
        console.log(equation)
        currentDisplay = `${char}`
        display1.innerText = equation;
        display.innerText = currentDisplay;
      }
    
    
      else {
        equation = equation.slice(0,equation.length-1);
        equation+= `${char}`;
        currentDisplay = `${char}`;
        display1.innerText = equation;
        display.innerText = currentDisplay;
      }
  }
  else if(equation.indexOf('=') > 0){
      console.log('oh')
        equation = solve+`${char}`;
        currentDisplay = `${char}`;
        display1.innerText = equation;
        display.innerText = currentDisplay;
  }
  else{
    equation = `0`;
  }
}

function decy(char){
  if(equation.indexOf('=') === -1 ){
      if (equation.length === 0){
        console.log('decy1')
        equation = '0'+`${char}`;
        currentDisplay = `${char}`;
        display1.innerText = equation;
       display.innerText = currentDisplay;
      }
    
    else if(currentDisplay.indexOf('.') === -1){
      console.log('decy2')
      equation+= `${char}`;
      currentDisplay+= `${char}`;
      console.log(currentDisplay)
      display1.innerText = equation;
      display.innerText = currentDisplay;
    }
  }
   else{
     console.log('decy3')
        equation = solve;
        currentDisplay = equation + `${char}`;
        display1.innerText = equation + `${char}`;
        display.innerText = currentDisplay;
  }
 
}


function subby(char){
  currentDisplay = display.innerText;
  if(equation.indexOf('=') === -1 ){
    if(equation.length === 1 && equation.charAt(0) === 0){
      equation = `${char}`;
      currentDisplay = `${char}`;
      display1.innerText = equation;
      display.innerText = currentDisplay;
    }
    else if(equation.charAt(equation.length-1) === '-'){
      display1.innerText = equation;
      display.innerText = currentDisplay;
    }
    else {
      equation+= `${char}`;
      currentDisplay = `${char}`;
      display1.innerText = equation;
      display.innerText = currentDisplay;
    }
  }
      
  else {
        equation = solve;
        currentDisplay = `${char}`;
        display1.innerText = equation + `${char}`;
        display.innerText = currentDisplay;
  }
  
}


