const MENU = document.querySelector('#menu-icon');
const NABAR = document.querySelector('.navbar');




MENU.addEventListener('click',()=>{
NABAR.classList.toggle('active')
MENU.classList.toggle('bx-x')
})
window.addEventListener('scroll',()=>{
NABAR.classList.remove('active')
MENU.classList.remove('bx-x')
})

//scrooll animation
const scroll = ScrollReveal({
distance:'60px',
duration:1500,
delay:400,
reset:true,
})
scroll.reveal('.text',{
delay:400,
origin:'top'
})
scroll.reveal('.form-container form',{
delay:500,
origin:'left'
})
scroll.reveal('.heading',{
delay:800,
origin:'bottom'
})
scroll.reveal('.ride-container .box',{
delay:600,
origin:'top'
})
scroll.reveal('.heading',{
delay:800,
origin:'bottom'
})
scroll.reveal('.ride-container .box',{
delay:600,
origin:'top'
 })
scroll.reveal('.services-container .box',{
delay:600,
origin:'top'
})
scroll.reveal('.about-container ',{
delay:600,
origin:'top'
})
scroll.reveal('.reviews-container .box ',{
delay:600,
origin:'left'
})
scroll.reveal('.newsLetter h2 ',{
delay:600,
origin:'right'
})
scroll.reveal('.newsLetter .box ',{
delay:600,
origin:'left'
})


