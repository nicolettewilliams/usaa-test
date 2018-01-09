var modal = document.querySelector(".modal");
var modalOpen = document.querySelector(".modalOpen");
var closeLinks = document.querySelectorAll('.close');
var modalActive;


function toggleModal() {
    modal.classList.toggle("show-modal");
    if (modal.classList.contains("show-modal")) {
        modalActive = true;
        document.querySelector(".top-close").focus();
    }else{
        modalActive = false;
    }
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
function tabLoop(event){
    if (event.keyCode === 9 && modalActive) {
        if (event.shiftKey) {
            if (document.activeElement === closeLinks[0]) {
                event.preventDefault();
                closeLinks[closeLinks.length - 1].focus();
            }
        } else {
            if (document.activeElement === closeLinks[closeLinks.length - 1]) {
                event.preventDefault();
                closeLinks[0].focus();
            }
        }
    }else if(event.keyCode === 27 && modalActive){
        toggleModal();
    }
}

for (i = 0; i < closeLinks.length; i++) {
    closeLinks[i].addEventListener("click", toggleModal);
};

modalOpen.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
window.addEventListener("keydown", tabLoop);


var selects = document.querySelectorAll('.modal-select');
var mobileordesk = document.querySelectorAll('.dorm');
for (var i = 0; i < selects.length ; i++) {
    selects[i].addEventListener('click', showSelection);
}

function showSelection(){
    for (var i = 0; i < mobileordesk.length ; i++) {
        mobileordesk[i].classList.remove('vissible');
    }
    activeRadio = document.querySelector('input[name = "mobileordesk"]:checked');
    document.querySelector('.' + activeRadio.value).classList.add('vissible');
}



// if(document.getElementById('mobile').checked) {
//     document.getElementById("enabled").classList.toggle('next-button-enabled');
// }



function scrollFunction() {
   document.getElementById("test").classList.add('dark-nav');
   document.getElementById("ul-list").classList.add('dark-nav');
 
 }
 
 window.onscroll = scrollFunction;


(function() {

     'use strict';

    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        var smoothScroll = function (anchor, duration) {

            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            if ( increments >= 0 ) {
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            else {
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            var runAnimation = setInterval(animateScroll, 16);
       
        };

        var scrollToggle = document.querySelectorAll('.scroll');

        [].forEach.call(scrollToggle, function (toggle) {

            toggle.addEventListener('click', function(e) {

                e.preventDefault();

                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                if (dataTarget) {
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });

    }

 })();



 