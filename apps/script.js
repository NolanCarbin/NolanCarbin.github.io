// console.log('Hello welcome to my website!')


const randomColor = function() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// const button = document.querySelector('.colorBtn')
// button.addEventListener('click', function() {
//     button.style.color = randomColor()
// })


$('.colorBtn').click(function() {
    $('.colorBtn').css({'color': randomColor()});
})

// $('.colorBtn').click(function() {
//     $('a').addClass('animate__animated animate__hinge');
// })

$('.dungeonWizard').mouseover(function(){
    $('.dungeonWizard').addClass('')
})

$('.dungeonWizard').mouseleave(function(){
    $('.dungeonWizard').removeClass('')
})
