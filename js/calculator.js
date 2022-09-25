//Variables
const calculatorKeys = document.querySelectorAll(".key");
const equalsKey = document.querySelector(".equals");
let historyArray = [];
let evaluateString = "0";

let evaluate = document.querySelector(".evaluate");
let history = document.querySelector(".history");

//set event handlers for key clicks
calculatorKeys.forEach(function(key) {

    key.addEventListener("click", ()=>{
        clickEffect(key);
        keyPressed(key);
    });
});

//set event handler for equals key events
equalsKey.addEventListener("click", ()=>{
    keyPressed(equalsKey);
    equalsClickEffect(equalsKey);

});

//Changes color of button when clicked
function clickEffect(key){
    key.classList.remove("key");
    key.classList.add("keyClick");
    setTimeout(()=>{
        key.classList.remove("keyClick");
    key.classList.add("key");
    }, 100);   
}

//Changes color of equals button when clicked
function equalsClickEffect(key){
    key.classList.remove("equals");
    key.classList.add("equalsClick");
    setTimeout(()=>{
        key.classList.remove("equalsClick");
    key.classList.add("equals");
    }, 100);   
}

function keyPressed(key){
    switch(key.id){
        case "0":
            numberPressed(key);
            break;
        case "1":
            numberPressed(key);
            break;
        case "2":
            numberPressed(key);
            break;
        case "3":
            numberPressed(key);
            break;
        case "4":
            numberPressed(key);
            break;
        case "5":
            numberPressed(key);
            break;
        case "6":
            numberPressed(key);
            break;
        case "7":
            numberPressed(key);
            break;
        case "8":
            numberPressed(key);
            break;
        case "9":
            numberPressed(key);
            break;
        case ".":
            numberPressed(key);
            break;
        case "del":
            del(key);
            break;
        case "c":
            clear(key);
            break;
        case "%":
            break;
        default:
            evaluateExpression(key);
    }

}

function evaluateExpression(key){

    if(!pendingOperation()){
        historyArray.push(evaluateString);
        historyArray.push(key.id);
        history.textContent = historyArray.toString().replace(",", "");
        evaluateString = "0";
    }
    else{
        switch(historyArray[1]){
            case "+":
                evaluateString = (add(parseFloat(historyArray[0]), parseFloat(evaluateString))).toString();
                historyArray = [];
                historyArray.push(evaluateString);
                if(!(key.id == "=")){
                    historyArray.push(key.id);
                    history.textContent = historyArray.toString().replace(",", "");
                    evaluate.textContent = evaluateString;
                    evaluateString = "0";
                }else{
                    while(historyArray.length){
                        historyArray.pop();
                    }
                    history.textContent = evaluateString;
                    evaluate.textContent = evaluateString;
                }
                
                break;
            case "-":
                evaluateString = (subtract(parseFloat(historyArray[0]), parseFloat(evaluateString))).toString();
                historyArray = [];
                historyArray.push(evaluateString);
                if(key.id != "="){
                    historyArray.push(key.id);
                    history.textContent = historyArray.toString().replace(",", "");
                    evaluate.textContent = evaluateString;
                    evaluateString = "0";
                }else{
                    while(historyArray.length){
                        historyArray.pop();
                    }
                    history.textContent = evaluateString;
                    evaluate.textContent = evaluateString;
                }
                break;
            case "/":
                evaluateString = (divide(parseFloat(historyArray[0]), parseFloat(evaluateString))).toString();
                historyArray = [];
                historyArray.push(evaluateString);
                if(key.id != "="){
                    historyArray.push(key.id);
                    history.textContent = historyArray.toString().replace(",", "");
                    evaluate.textContent = evaluateString;
                    evaluateString = "0";
                }else{
                    while(historyArray.length){
                        historyArray.pop();
                    }
                    history.textContent = evaluateString;
                    evaluate.textContent = evaluateString;
                }
                break;
            case "x":
                evaluateString = (multiply(parseFloat(historyArray[0]), parseFloat(evaluateString))).toString();
                historyArray = [];
                historyArray.push(evaluateString);
                if(key.id != "="){
                    historyArray.push(key.id);
                    history.textContent = historyArray.toString().replace(",", "");
                    evaluate.textContent = evaluateString;
                    evaluateString = "0";
                }else{
                    while(historyArray.length){
                        historyArray.pop();
                    }
                    history.textContent = evaluateString;
                    evaluate.textContent = evaluateString;
                }
                break;
            default:
                clear();
        }
        

    }
}

function add(a,b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function clear(){
    evaluate.textContent = "0";
    history.textContent = "";
    evaluateString = "0";
    while(historyArray.length){
        historyArray.pop();
    }
}

//removes a character (number) from the evaluate string
function del(){
    if(evaluateString == "0"){
        evaluate.textContent = "0";
    }
    else{
        let holder = evaluateString;
        if(holder.length > 1){
            evaluateString = holder.slice(0, -1);
            evaluate.textContent = evaluateString;
        }
        else{
            evaluateString = "0";
            evaluate.textContent = "0";
        }
    }
}

function numberPressed(key){
    if(evaluateString == "0"){
        evaluateString = key.id;
    }
    else{
        evaluateString = evaluateString + key.id;
    }
    
    evaluate.textContent = evaluateString;

}

function pendingOperation(){
    if(historyArray[1] != null){
        return true;
    }else{
        return false;
    }
}