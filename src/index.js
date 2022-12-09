import './less/index.less'

// Your code goes here!

//1. load
window.onload  = function(evt) {
console.log (`event ${evt.type} fired Ready to go`);
const heading = document.querySelector('h1'); 
heading.textContent = "Ready to go"

//2. copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text;
    })
})
// 3. click 
document.body.addEventListener('click' , evt => {
    evt.target.classList.toggle('mirror')   
})

//4. double click
document.body.addEventListener('dblclick' , evt => {
    evt.target.outerHTML = '';   
})

//5. keydown
window.addEventListener('keydown', evt => {
 if (evt.key == 6){
    document.body.innerHTML = ''
 }   
})

//6. mouse move
document.body.addEventListener('mousemove', evt => {
const {clientX, clientY} = evt;


})
// 7- mouse enter
// 8 - mouse leave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations){
    destination.addEventListener('mouseenter', evt =>{
        destination.style.fontWeight = 'bold'

    })
    destination.addEventListener('mouseleave', evt =>{
        destination.style.fontWeight = 'initial'
})
}

}