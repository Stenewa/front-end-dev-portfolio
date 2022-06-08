const navToggle=document.querySelector('.toggle-nav');
const navLinks=document.querySelectorAll('.nav_link');

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('n_av-open');
});
 navLinks.forEach(link=> {
     link.addEventListener('click',()=>{
         document.body.classList.remove('n_av-open');
     })
 })
