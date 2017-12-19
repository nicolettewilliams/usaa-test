
var elmnt = document.getElementById("about");

function scrollToTop() {
    elmnt.scrollIntoView(true); // Top
};


function scrollFunction() {
	document.getElementById("test").classList.add('dark-nav');
	document.getElementById("ul-list").classList.add('dark-nav');

}

window.onscroll = scrollFunction;

