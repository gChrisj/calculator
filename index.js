let number = document.querySelectorAll("#grid_number");
let operation = document.querySelectorAll("#grid_operation");
let display = document.querySelector(".display");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let calc = document.querySelector(".calculate");

let endChar = display.innerHTML.charAt(display.innerHTML.length - 1);

number.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
      display.innerHTML += e.target.innerHTML;  
    });
});

operation.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
        if(!isLastOperator(display.innerHTML.charAt(display.innerHTML.length - 1))){
            display.innerHTML += e.target.innerHTML;  
        }else{
            alert("You cannot enter consecutive operators!");
        }
    });
});

function clear(){
    validate();
    display.innerHTML = "";
}
clearBtn.onclick = clear;

function calculate(){
    if(validate()){
        display.innerHTML = eval(display.innerHTML);
        if(display.innerHTML === 'Infinity'){
            alert("Divide By 0 Error");
            display.innerHTML = "";
        }
        return
        }
    alert("Invalid Equation")
    clear();
}
calc.onclick = calculate;

function del(){
    if(display.innerHTML.length > 0){
        display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    }
}
deleteBtn.onclick = del; 

function isLastNumber(endChar){
    if(!isLastOperator(endChar)){
        return true;
    }
    return false;
}

function isLastOperator(endChar){
    if(endChar === '+' || endChar === '-' || endChar === '*' || endChar === '/'){
        return true;
    }
    return false;
}

function validate(){
    let lastChar = display.innerHTML.charAt(display.innerHTML.length - 1);
    if(isLastNumber(lastChar) && !isLastOperator(lastChar)){
        return true;
    }
    return false;
}