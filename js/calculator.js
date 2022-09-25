//set event handlers for key clicks
const calculatorKeys = document.querySelectorAll(".key");

calculatorKeys.forEach(function(key) {

    key.addEventListener("click", ()=>{
        clickEffect(key);
    });
});

function clickEffect(key){
    key.classList.remove("key");
    key.classList.add("keyClick");
    setTimeout(()=>{
        key.classList.remove("keyClick");
    key.classList.add("key");
    }, 100);

    
}

console.log(calculatorKeys);