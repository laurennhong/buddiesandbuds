(function(){
    "use strict";
    console.log('js is running');

    const homepage = document.querySelector("#homepage");
    const homeicon = document.querySelector(".homeicon");
    const back = document.querySelector('#back');
    const back2 = document.querySelector('#back2');
    const next = document.querySelector('#next');
    const next2 = document.querySelector('#next2');
    const backhome = document.querySelector('#backhome');
    // const animals = ['cowsection', 'ducksection', 'squirrelsection'];

    const cowsection = document.querySelector(".cowsection");
    const cow = document.querySelector('#cow');
    // const ducksection = document.querySelector(".ducksection");
    // const duck = document.querySelector('#duck');

    let globalData;
    async function getData() {
        const content = await fetch('data.json')
        const data = await content.json();
        globalData = data;
        document.querySelector("#page1text").innerHTML = outputHTML1(data);
        document.querySelector("#page2text").innerHTML = outputHTML2(data);
        document.querySelector("#page3text").innerHTML = outputHTML3(data);
    }

    function outputHTML1(data) {
        const html = `<p>${data.cow.page1}</p>`;
        return html;
    }
    function outputHTML2(data) {
        const html = `<p>${data.cow.page2}</p>`;
        return html;
    }
    function outputHTML3(data) {
        const html = `<p>${data.cow.page3}</p>`;
        return html;
    }

    cow.addEventListener('click', function(event){
        cowsection.className = 'showing';
        homepage.className = 'hidden';
        document.querySelector('#cowpage1').className = 'showing';

        next.addEventListener('click', function(event) {
            document.querySelector('#cowpage1').className = 'hidden';
            document.querySelector('#cowpage2').className = 'showing';
        })

        next2.addEventListener('click', function(event) {
            document.querySelector('#cowpage2').className = 'hidden';
            document.querySelector('#cowpage3').className = 'showing';
        })

        backhome.addEventListener('click', function(event) {
            document.querySelector('#cowpage3').className = 'hidden';
            document.querySelector('#homepage').className = 'showing';
        })

        back.addEventListener('click', function() {
            document.querySelector('#cowpage2').className = 'hidden'; 
            document.querySelector('#cowpage1').className = 'showing'; 
        })

        back2.addEventListener('click', function() {
            document.querySelector('#cowpage3').className = 'hidden'; 
            document.querySelector('#cowpage2').className = 'showing'; 
        })

        homeicon.addEventListener('click', function() {
            cowsection.className = 'hidden'; 
            homepage.className = 'showing';
        })
    })
    getData();
})();