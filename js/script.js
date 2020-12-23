// $(document).ready(function(){
//     $('.header__burger').click(function(event) {
//         $('.header__burger,.menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

// $(document).ready(function(){
//     $('.menu__item').click(function(event) {
//         $('.header__burger,.menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

// $(document).ready(function(){
//     $('.header__logo').click(function(event) {
//         $('.header__burger,.menu').removeClass('active');
//         $('body').removeClass('lock');
//     });
// });


var burgerMenu = document.querySelector('.burger__menu');
var menu = document.querySelector('.menu');
var menuLink = document.querySelectorAll('.menu__link');
var body = document.querySelector('body');

burgerMenu.addEventListener('click', function(event) {
    menu.classList.toggle('active')
    this.classList.toggle('active')
    body.classList.toggle('lock')
    // if(menu.classList.contains('show')) {
    //     menu.classList.remove('show')
    // } else {
    //     menu.classList.add('show')
    // }

});

for ( i = 0;  i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function(event){
        menu.classList.remove('active')
        body.classList.remove('lock')
        burgerMenu.classList.remove('active')
    })
}


