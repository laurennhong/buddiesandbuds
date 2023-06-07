(function(){
    "use strict";
    console.log('js is running');

    const homepage = document.querySelector("#homepage");
    const homeicon = document.querySelector(".homeicon");
    const cow = document.querySelector('#cow');
    const next = document.querySelector('#next');
    const back = document.querySelector('.back');
    cow.addEventListener('click', function(event){
        document.querySelector('#homepage').className = 'hidden';
        document.querySelector('#cowpage1').className = 'showing';
        // homepage.style.left = "-100vw";
        next.addEventListener('click', function(event) {
            document.querySelector('#cowpage1').className = 'hidden';
            document.querySelector('#cowpage2').className = 'showing';
        })

        homeicon.addEventListener('click', function() {
            // document.querySelector('.cowsection').className = 'hidden'; 
            // document.querySelector('#cowpage2').className = 'hidden'; 
            document.querySelector('#cowpage1').className = 'hidden'; 
            homepage.className = 'showing';
        })

        back.addEventListener('click', function() {
            document.querySelector('#cowpage2').className = 'hidden'; 
            document.querySelector('#cowpage1').className = 'showing'; 
        })
    })

    alert(`USER SCENARIO: “You’re a 3rd grade student living in Davis, CA learning about plants and animals in class. One day in class your teacher shares this website with you where you can learn about animals and plants in Davis. You open the site and see all the options available to you. You choose the cow which introduces you to new content. You can navigate back to the home page.”
    
    IN-PROGRESS WARNING: Other buttons besides the cow, are not currently clickable.`);
})();