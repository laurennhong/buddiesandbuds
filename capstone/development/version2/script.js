(function(){
    "use strict";
    console.log('js is running');

    const homepage = document.querySelector("#homepage");
    const homebutton = document.querySelector(".homebutton");
    const cow = document.querySelector('#cow');
    cow.addEventListener('click', function(event){
        document.querySelector('#homepage').className = 'hidden';
        document.querySelector('#cowpage1').className = 'showing';
        homepage.style.left = "-100vw";
    })

    homebutton.addEventListener('click', function(event) {
        homepage.className = 'showing';
    })
})();