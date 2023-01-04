
// header //
let maker = document.querySelector('#maker');
let list = document.querySelectorAll('ul li');
function moveindicator (e){
    maker.style.left = e.offsetLeft + 'px';
    maker.style.width = e.offsetWidth+ 'px';
};
list.forEach(link => {
    link.addEventListener('mousemove' , (e) =>{
        moveindicator(e.target);
    })
})
// add active class in hovered list item 
function activeLink(){
    list.forEach((item)=> 
    item.classList.remove('activat'));
    this.classList.add('activat');
}
list.forEach((item)=>
item.addEventListener('mouseover', activeLink))

// Certificates //
let card = document.getElementsByClassName('card');
        function ss(i){
            card[i].classList.toggle('active');
        }; 
// Skills 
const Skills = document.querySelector('.Skills');
const circle = document.querySelectorAll('.Skills circle:nth-child(2)');
const dott = document.querySelectorAll('.Skills .dott');
const number = document.querySelectorAll('.Skills .number');
window.onscroll = (scroll) => {
    if(window.scrollY >= Skills.offsetTop-250){
        circle.forEach((circle) => {
            circle.style.animation='fadein 1s linear forwards';
            circle.style.animationDelay= '2s';
        });
        dott.forEach((dott) => {
            dott.style.animation='animatdot 2s linear forwards';
        });
        number.forEach((number) => {
            number.style.animation='fadein 1s linear forwards';
            number.style.animationDelay= '2s';
        });
    }} ;