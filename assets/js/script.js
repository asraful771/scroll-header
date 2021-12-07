// responsive menu function
const hambar = document.querySelector('.wraper .menu .hambar');
const m_menu = document.querySelector('.wraper .menu ul');
hambar.addEventListener('click',() =>{
    hambar.classList.toggle('active');
    m_menu.classList.toggle('active');
});


// sticky header function
window.addEventListener('scroll', function(){
    const header = document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY >0 );
});




