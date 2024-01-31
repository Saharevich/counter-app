let counter = 0;
let counterText = document.querySelector('.counter')
const button = document.querySelector('.btn');
const reset = document.querySelector('.btn-reset');

button.addEventListener('click', function() {
    counter = counter + 1;
    
    counterText.innerText = counter;
});

reset.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;
});





