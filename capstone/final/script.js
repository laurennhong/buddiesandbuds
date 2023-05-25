(function(){
    "use strict";
    console.log('js is running');

    const cow = document.querySelector('#cow');
    cow.addEventListener('click', function(event){
        console.log('cow is pressed');
        document.querySelector('#homepage').className = 'hidden';
        document.querySelector('#cowpage1').className = 'showing';
    })
})