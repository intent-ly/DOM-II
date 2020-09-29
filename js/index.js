// Your code goes here

const navigator = document.querySelector('.nav-link');
navigator.addEventListener('mouseover', event => {
    event.target.style.BackgroundColor = 'red';
})

const imaged = document.querySelector('.img-content');
imaged.addEventListener('select', event =>{
    event.target.style.fontSize = '5rem';
})

const scrolled = document.querySelector('.content-destination');
scrolled.addEventListener('scroll', event =>{
    event.target.style.fontSize ='6rem';
})

const focuser = document.querySelector('.destination');
focuser.addEventListener('focus', event =>{
    console.log(event.target.nodeName);
})

const doubleClick = document.querySelector('.nav');
doubleClick.addEventListener('dblclick', event =>{
    event.target.style.border = '5px solid black';
})

const keyed = document.querySelector('.content-pick');
keyed.addEventListener('keydown', event =>{
    event.target.style.margin = '6rem';
})

const sized = document.querySelector('.container home');
sized.addEventListener('resize', event =>{
    event.target.style.BackgroundColor ='black';
})

const loader = document.querySelector('.main-navigation');
loader.addEventListener('load', event =>{
    console.log(`this is a `, event.target.nodeName);
})

const wheeler = document.querySelector('footer');
wheeler.addEventListener('wheel', event =>{
    event.target.style.border = '5px solid black';
})


const draged = document.querySelectorAll('div');
draged[1] =  addEventListener('drag', event =>{
    event.addEventListener('drop', event =>{
        event.target.style.BackgroundColor = 'grey';
    })
})