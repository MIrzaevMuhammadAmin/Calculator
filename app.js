const display = document.getElementById("display");
// let button = document.querySelectorAll('button')

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteToDisplay(){
    display.value = display.value.slice(0, -1)
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}