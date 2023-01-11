// var currentNumberWrapper = document.getElementById("currentNumber");
// var currentNumber = 0;



// function increment(){
//     currentNumber = currentNumber + 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

// function decrement(){
//     currentNumber = currentNumber - 1;
//     currentNumberWrapper.innerHTML = currentNumber;
// }

function updateCounter(value){
    const counterElement = document.getElementById('currentNumber');
    let count = parseInt(counterElement.innerHTML, 10);
    count += value;
    counterElement.innerHTML = count;


    const decrementButton = document.getElementById('decrementar');

    if(count > 0){
        decrementButton.disabled = false;
    }else{
        decrementButton.disabled = true;
    }
}

const incrementButton = document.getElementById('incrementar');
incrementButton.addEventListener('click', ()=> updateCounter(1));

const decrementButton = document.getElementById('decrementar');
decrementButton.addEventListener('click', ()=> updateCounter(-1));

