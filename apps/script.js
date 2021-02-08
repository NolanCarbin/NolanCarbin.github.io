console.log('Hello welcome to my website!')

const randomColor = function() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const body = document.querySelector('body');
const button = document.querySelector('#colorBtn')

button.addEventListener('click', function() {
    body.style.backgroundColor = randomColor()
})
