/* Scroll top button */

$(document).ready(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //appear after 100px scroll down
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
});


/* Slick slider */

$(document).ready(function () {
    $('.slider').slick({
        dots: true, //slick's object
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        width: true,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
});


/* Nav bar */

var burger = document.querySelector('.burger i');
var nav = document.querySelector('.nav');

function toggleNav() { // Defining a function
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
// Calling the function after click event occurs
burger.addEventListener('click', function () {
    toggleNav();
});


/* CV to download */

function openCV() {
    window.open('cv.html', '_blank');
}

/* Pop-up window on Skills card */

function skillsPopUp() {
    var btn = document.getElementById('skillsBtn');
    var modal = document.getElementById('skills-pop-up');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function () {
        modal.style.display = 'block';
    }
    span.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            this.modal.style.display = 'none';
        }
    }
}
skillsPopUp();

/* Pop-up window on Workexperience card */

function workPopUp() {
    var modal = document.getElementById('work-pop-up');
    var btn = document.getElementById('workBtn');
    var span = document.getElementsByClassName('close')[1];

    btn.onclick = function () {
        modal.style.display = 'block';
    }
    span.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            this.modal.style.display = 'none';
        }
    }
}
workPopUp();


/* Pop-up window on Education card */

function educationPopUp() {
    var modal = document.getElementById('education-pop-up');
    var btn = document.getElementById('educationBtn');
    var span = document.getElementsByClassName('close')[2];

    btn.onclick = function () {
        modal.style.display = 'block';
    }
    span.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            this.modal.style.display = 'none';
        }
    }
}
educationPopUp();


/* Pop-up window on Project card */

function projectPopUp() {
    var modal = document.getElementById('project-pop-up');
    var btn = document.getElementById('projectBtn');
    var span = document.getElementsByClassName('close')[3];

    btn.onclick = function () {
        modal.style.display = 'block';
    }
    span.onclick = function () {
        modal.style.display = 'none';
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            this.modal.style.display = 'none';
        }
    }
}
projectPopUp();


