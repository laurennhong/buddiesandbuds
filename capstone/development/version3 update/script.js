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
    
    const animalsandplants = document.querySelector(".homebutton");
    const animalsection = document.querySelector('.animalsection.hidden');
    const page1 = document.querySelector('.page1.hidden');
    const page2 = document.querySelector('.page2.hidden');
    const page3 = document.querySelector('.page3.hidden');
    const cow = document.querySelector('#cow');
    // const cowsection = document.querySelector("#cowsection");
    // const cow1 = document.querySelector('#cowpage1');
    // const cow2 = document.querySelector('#cowpage2');
    // const cow3 = document.querySelector('#cowpage3');
    // const duck = document.querySelector('#duck');
    // const ducksection = document.querySelector(".ducksection");

    animalsandplants.addEventListener('click', function(event){
        header.removeAttribute('id');
        animalsection.className = 'showing';
        homepage.className = 'hidden';
        page1.className = 'showing';

        next.addEventListener('click', function(event) {
            page1.className = 'hidden';
            page2.className = 'showing';
        })

        next2.addEventListener('click', function(event) {
            page2.className = 'hidden';
            page3.className = 'showing';
        })

        backhome.addEventListener('click', function(event) {
            page3.className = 'hidden';
            animalsection.className = 'hidden';
            document.querySelector('#homepage').className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back.addEventListener('click', function() {
            page2.className = 'hidden'; 
            page1.className = 'showing'; 
        })

        back2.addEventListener('click', function() {
            page3.className = 'hidden'; 
            page2.className = 'showing'; 
        })

        homeicon.addEventListener('click', function() {
            page1.className = 'hidden';
            page2.className = 'hidden';
            page3.className = 'hidden';
            animalsection.className = 'hidden'; 
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

        
        cow.addEventListener('click', function(event){
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
    })

    // cow.addEventListener('click', function(event){
    //     header.removeAttribute('id');
    //     animalsection.className = 'showing';
    //     homepage.className = 'hidden';
    //     document.querySelector('#cowpage1').className = 'showing';

    //     next.addEventListener('click', function(event) {
    //         document.querySelector('#cowpage1').className = 'hidden';
    //         document.querySelector('#cowpage2').className = 'showing';
    //     })

    //     next2.addEventListener('click', function(event) {
    //         document.querySelector('#cowpage2').className = 'hidden';
    //         document.querySelector('#cowpage3').className = 'showing';
    //     })

    //     backhome.addEventListener('click', function(event) {
    //         document.querySelector('#cowpage3').className = 'hidden';
    //         cowsection.className = 'hidden';
    //         document.querySelector('#homepage').className = 'showing';
    //         header.setAttribute('id', 'headinghome');
    //     })

    //     back.addEventListener('click', function() {
    //         document.querySelector('#cowpage2').className = 'hidden'; 
    //         document.querySelector('#cowpage1').className = 'showing'; 
    //     })

    //     back2.addEventListener('click', function() {
    //         document.querySelector('#cowpage3').className = 'hidden'; 
    //         document.querySelector('#cowpage2').className = 'showing'; 
    //     })

    //     homeicon.addEventListener('click', function() {
    //         document.querySelector('#cowpage1').className = 'hidden';
    //         document.querySelector('#cowpage2').className = 'hidden';
    //         document.querySelector('#cowpage3').className = 'hidden';
    //         cowsection.className = 'hidden'; 
    //         homepage.className = 'showing';
    //         header.setAttribute('id', 'headinghome');
    //     })

    //     let globalData;
    //     async function getData() {
    //         const content = await fetch('data.json')
    //         const data = await content.json();
    //         globalData = data;
    //         document.querySelector(".page1text").innerHTML = outputHTML1(data);
    //         document.querySelector(".page2text").innerHTML = outputHTML2(data);
    //         document.querySelector(".page3text").innerHTML = outputHTML3(data);
    //     }

    //     function outputHTML1(data) {
    //         const html = `<p>${data.cow.page1}</p>`;
    //         return html;
    //     }
    //     function outputHTML2(data) {
    //         const html = `<p>${data.cow.page2}</p>`;
    //         return html;
    //     }
    //     function outputHTML3(data) {
    //         const html = `<p>${data.cow.page3}</p>`;
    //         return html;
    //     }
    //     getData();
    // })

    // duck.addEventListener('click', function(event){
    //     header.removeAttribute('id');
    //     ducksection.className = 'showing';
    //     homepage.className = 'hidden';
    //     document.querySelector('#duckpage1').className = 'showing';

    //     next.addEventListener('click', function(event) {
    //         document.querySelector('#duckpage1').className = 'hidden';
    //         document.querySelector('#duckpage2').className = 'showing';
    //     })

    //     next2.addEventListener('click', function(event) {
    //         document.querySelector('#duckpage2').className = 'hidden';
    //         document.querySelector('#duckpage3').className = 'showing';
    //     })

    //     backhome.addEventListener('click', function(event) {
    //         document.querySelector('#cowpage3').className = 'hidden';
    //         cowsection.className = 'hidden';
    //         document.querySelector('#homepage').className = 'showing';
    //         header.setAttribute('id', 'headinghome');
    //     })

    //     back.addEventListener('click', function() {
    //         document.querySelector('#cowpage2').className = 'hidden'; 
    //         document.querySelector('#cowpage1').className = 'showing'; 
    //     })

    //     back2.addEventListener('click', function() {
    //         document.querySelector('#cowpage3').className = 'hidden'; 
    //         document.querySelector('#cowpage2').className = 'showing'; 
    //     })

    //     homeicon.addEventListener('click', function() {
    //         document.querySelector('#cowpage1').className = 'hidden';
    //         document.querySelector('#cowpage2').className = 'hidden';
    //         document.querySelector('#cowpage3').className = 'hidden';
    //         cowsection.className = 'hidden'; 
    //         homepage.className = 'showing';
    //         header.setAttribute('id', 'headinghome');
    //     })

    //     let globalData;
    //     async function getData() {
    //         const content = await fetch('data.json')
    //         const data = await content.json();
    //         globalData = data;
    //         document.querySelector(".page1text").innerHTML = outputHTML1(data);
    //         document.querySelector(".page2text").innerHTML = outputHTML2(data);
    //         document.querySelector(".page3text").innerHTML = outputHTML3(data);
    //     }

    //     function outputHTML1(data) {
    //         const html = `<p>${data.cow.page1}</p>`;
    //         return html;
    //     }
    //     function outputHTML2(data) {
    //         const html = `<p>${data.cow.page2}</p>`;
    //         return html;
    //     }
    //     function outputHTML3(data) {
    //         const html = `<p>${data.cow.page3}</p>`;
    //         return html;
    //     }
    //     getData();
    // })
})();