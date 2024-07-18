// jQuery(document).ready(function() {
	
// 	"use strict";
// 	// Your custom js code goes here.

// });


document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.menu-icon');
    var navLinks = document.querySelector('.nav-links');
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});