(function(){
    "use strict";
    console.log('js is running');

    const header = document.querySelector('.heading');
    const homepage = document.querySelector("#homepage");
    const homeicon = document.querySelector(".homeicon");
    const back = document.querySelector('.back');
    const back2 = document.querySelector('.back2');
    const next = document.querySelector('.next');
    const next2 = document.querySelector('.next2');
    const backhome = document.querySelector('.backhome');
    
    // const animalsandplants = document.querySelector(".homebutton");
    // const animalsection = document.querySelector('.animalsection.hidden');
    // const page1 = document.querySelector('.page1.hidden');
    // const page2 = document.querySelector('.page2.hidden');
    // const page3 = document.querySelector('.page3.hidden');
    const cow = document.querySelector('#cow');
    const cowsection = document.querySelector("#cowsection");
    const cow1 = document.querySelector('#cowpage1');
    const cow2 = document.querySelector('#cowpage2');
    const cow3 = document.querySelector('#cowpage3');
    const duck = document.querySelector('#duck');
    const ducksection = document.querySelector("#ducksection");
    const duck1 = document.querySelector('#duckpage1');
    const duck2 = document.querySelector('#duckpage2');
    const duck3 = document.querySelector('#duckpage3');

    cow.addEventListener('click', function(event){
        header.removeAttribute('id');
        cowsection.className = 'showing';
        homepage.className = 'hidden';
        cow1.className = 'showing';

        next.addEventListener('click', function(event) {
            cow1.className = 'hidden';
            cow2.className = 'showing';
        })

        next2.addEventListener('click', function(event) {
            cow2.className = 'hidden';
            cow3.className = 'showing';
        })

        backhome.addEventListener('click', function(event) {
            cow3.className = 'hidden';
            cowsection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back.addEventListener('click', function() {
            cow2.className = 'hidden'; 
            cow1.className = 'showing'; 
        })

        back2.addEventListener('click', function() {
            cow3.className = 'hidden'; 
            cow2.className = 'showing'; 
        })

        homeicon.addEventListener('click', function() {
            cow1.className = 'hidden';
            cow2.className = 'hidden';
            cow3.className = 'hidden';
            cowsection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page1text").innerHTML = outputHTML1(data);
            document.querySelector(".page2text").innerHTML = outputHTML2(data);
            document.querySelector(".page3text").innerHTML = outputHTML3(data);
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
        getData();
    })

    duck.addEventListener('click', function(event){
        header.removeAttribute('id');
        ducksection.className = 'showing';
        homepage.className = 'hidden';
        duck1.className = 'showing';

        next.addEventListener('click', function(event) {
            duck1.className = 'hidden';
            duck2.className = 'showing';
        })

        next2.addEventListener('click', function(event) {
            duck2.className = 'hidden';
            duck3.className = 'showing';
        })

        backhome.addEventListener('click', function(event) {
            duck3.className = 'hidden';
            ducksection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back.addEventListener('click', function() {
            duck2.className = 'hidden'; 
            duck1.className = 'showing'; 
        })

        back2.addEventListener('click', function() {
            duck3.className = 'hidden'; 
            duck2.className = 'showing'; 
        })

        homeicon.addEventListener('click', function() {
            duck1.className = 'hidden';
            duck2.className = 'hidden';
            duck3.className = 'hidden';
            ducksection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page1text").innerHTML = outputHTML1(data);
            document.querySelector(".page2text").innerHTML = outputHTML2(data);
            document.querySelector(".page3text").innerHTML = outputHTML3(data);
        }

        function outputHTML1(data) {
            const html = `<p>${data.duck.page1}</p>`;
            return html;
        }
        function outputHTML2(data) {
            const html = `<p>${data.duck.page2}</p>`;
            return html;
        }
        function outputHTML3(data) {
            const html = `<p>${data.duck.page3}</p>`;
            return html;
        }
        getData();
    })
})();