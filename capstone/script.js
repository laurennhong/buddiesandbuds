(function(){
    "use strict";
    console.log('js is running');

    const header = document.querySelector('.heading');
    const homepage = document.querySelector("#homepage");

    const homeicon = document.querySelector(".homeicon");
    const homeicon2 = document.querySelector(".homeicon2");
    const homeicon3 = document.querySelector(".homeicon3");
    const homeicon4 = document.querySelector(".homeicon4");
    const homeicon5 = document.querySelector(".homeicon5");
    const homeicon6 = document.querySelector(".homeicon6");

    const hi = document.querySelector(".hi");
    const hi2 = document.querySelector(".hi2");
    const hi3 = document.querySelector(".hi3");
    const hi4 = document.querySelector(".hi4");
    const hi5 = document.querySelector(".hi5");
    const hi6 = document.querySelector(".hi6");

    const back = document.querySelector('.back');
    const back2 = document.querySelector('.back2');
    const back3 = document.querySelector('.back3');
    const back4 = document.querySelector('.back4');
    const back5 = document.querySelector('.back5');
    const back6 = document.querySelector('.back6');
    const back7 = document.querySelector('.back7');
    const back8 = document.querySelector('.back8');
    const back9 = document.querySelector('.back9');
    const back10 = document.querySelector('.back10');
    const back11 = document.querySelector('.back11');
    const back12 = document.querySelector('.back12');

    const b = document.querySelector('.b');
    const b2 = document.querySelector('.b2');
    const b3 = document.querySelector('.b3');
    const b4 = document.querySelector('.b4');
    const b5 = document.querySelector('.b5');
    const b6 = document.querySelector('.b6');
    const b7 = document.querySelector('.b7');
    const b8 = document.querySelector('.b8');
    const b9 = document.querySelector('.b9');
    const b10 = document.querySelector('.b10');
    const b11 = document.querySelector('.b11');
    const b12 = document.querySelector('.b12');

    const next = document.querySelector('.next');
    const next2 = document.querySelector('.next2');
    const next3 = document.querySelector('.next3');
    const next4 = document.querySelector('.next4');
    const next5 = document.querySelector('.next5');
    const next6 = document.querySelector('.next6');
    const next7 = document.querySelector('.next7');
    const next8 = document.querySelector('.next8');
    const next9 = document.querySelector('.next9');
    const next10 = document.querySelector('.next10');
    const next11 = document.querySelector('.next11');
    const next12 = document.querySelector('.next12');

    const n = document.querySelector('.n');
    const n2 = document.querySelector('.n2');
    const n3 = document.querySelector('.n3');
    const n4 = document.querySelector('.n4');
    const n5 = document.querySelector('.n5');
    const n6 = document.querySelector('.n6');
    const n7 = document.querySelector('.n7');
    const n8 = document.querySelector('.n8');
    const n9 = document.querySelector('.n9');
    const n10 = document.querySelector('.n10');
    const n11 = document.querySelector('.n11');
    const n12 = document.querySelector('.n12');


    const backhome = document.querySelector('.backhome');
    const backhome2 = document.querySelector('.backhome2');
    const backhome3 = document.querySelector('.backhome3');
    const backhome4 = document.querySelector('.backhome4');
    const backhome5 = document.querySelector('.backhome5');
    const backhome6 = document.querySelector('.backhome6');

    const bh = document.querySelector('.bh');
    const bh2 = document.querySelector('.bh2');
    const bh3 = document.querySelector('.bh3');
    const bh4 = document.querySelector('.bh4');
    const bh5 = document.querySelector('.bh5');
    const bh6 = document.querySelector('.bh6');

    
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
    const squirrel = document.querySelector('#squirrel');
    const squirrelsection = document.querySelector("#squirrelsection");
    const squirrel1 = document.querySelector('#squirrelpage1');
    const squirrel2 = document.querySelector('#squirrelpage2');
    const squirrel3 = document.querySelector('#squirrelpage3');
    const turkey = document.querySelector('#turkey');
    const turkeysection = document.querySelector("#turkeysection");
    const turkey1 = document.querySelector('#turkeypage1');
    const turkey2 = document.querySelector('#turkeypage2');
    const turkey3 = document.querySelector('#turkeypage3');
    const magpie = document.querySelector('#magpie');
    const magpiesection = document.querySelector("#magpiesection");
    const magpie1 = document.querySelector('#magpiepage1');
    const magpie2 = document.querySelector('#magpiepage2');
    const magpie3 = document.querySelector('#magpiepage3');
    const turtle = document.querySelector('#turtle');
    const turtlesection = document.querySelector("#turtlesection");
    const turtle1 = document.querySelector('#turtlepage1');
    const turtle2 = document.querySelector('#turtlepage2');
    const turtle3 = document.querySelector('#turtlepage3');

    const redwood = document.querySelector('#redwood');
    const redwoodsection = document.querySelector("#redwoodsection");
    const redwood1 = document.querySelector('#redwoodpage1');
    const redwood2 = document.querySelector('#redwoodpage2');
    const redwood3 = document.querySelector('#redwoodpage3');
    const poppy = document.querySelector('#poppy');
    const poppysection = document.querySelector("#poppysection");
    const poppy1 = document.querySelector('#poppypage1');
    const poppy2 = document.querySelector('#poppypage2');
    const poppy3 = document.querySelector('#poppypage3');
    const ginkgo = document.querySelector('#ginkgo');
    const ginkgosection = document.querySelector("#ginkgosection");
    const ginkgo1 = document.querySelector('#ginkgopage1');
    const ginkgo2 = document.querySelector('#ginkgopage2');
    const ginkgo3 = document.querySelector('#ginkgopage3');
    const lilac = document.querySelector('#lilac');
    const lilacsection = document.querySelector("#lilacsection");
    const lilac1 = document.querySelector('#lilacpage1');
    const lilac2 = document.querySelector('#lilacpage2');
    const lilac3 = document.querySelector('#lilacpage3');
    const oak = document.querySelector('#oak');
    const oaksection = document.querySelector("#oaksection");
    const oak1 = document.querySelector('#oakpage1');
    const oak2 = document.querySelector('#oakpage2');
    const oak3 = document.querySelector('#oakpage3');
    const rose = document.querySelector('#rose');
    const rosesection = document.querySelector("#rosesection");
    const rose1 = document.querySelector('#rosepage1');
    const rose2 = document.querySelector('#rosepage2');
    const rose3 = document.querySelector('#rosepage3');

    cow.addEventListener('click', function(event){
        const click = "clicked";
        console.log(click);
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

        next3.addEventListener('click', function(event) {
            duck1.className = 'hidden';
            duck2.className = 'showing';
        })

        next4.addEventListener('click', function(event) {
            duck2.className = 'hidden';
            duck3.className = 'showing';
        })

        backhome2.addEventListener('click', function(event) {
            duck3.className = 'hidden';
            ducksection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back3.addEventListener('click', function() {
            duck2.className = 'hidden'; 
            duck1.className = 'showing'; 
        })

        back4.addEventListener('click', function() {
            duck3.className = 'hidden'; 
            duck2.className = 'showing'; 
        })

        homeicon2.addEventListener('click', function() {
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
            document.querySelector(".page4text").innerHTML = outputHTML4(data);
            document.querySelector(".page5text").innerHTML = outputHTML5(data);
            document.querySelector(".page6text").innerHTML = outputHTML6(data);
        }

        function outputHTML4(data) {
            const html = `<p>${data.duck.page1}</p>`;
            return html;
        }
        function outputHTML5(data) {
            const html = `<p>${data.duck.page2}</p>`;
            return html;
        }
        function outputHTML6(data) {
            const html = `<p>${data.duck.page3}</p>`;
            return html;
        }
        getData();
    })

    squirrel.addEventListener('click', function(event){
        header.removeAttribute('id');
        squirrelsection.className = 'showing';
        homepage.className = 'hidden';
        squirrel1.className = 'showing';

        next5.addEventListener('click', function(event) {
            squirrel1.className = 'hidden';
            squirrel2.className = 'showing';
        })

        next6.addEventListener('click', function(event) {
            squirrel2.className = 'hidden';
            squirrel3.className = 'showing';
        })

        backhome3.addEventListener('click', function(event) {
            squirrel3.className = 'hidden';
            squirrelsection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back5.addEventListener('click', function() {
            squirrel2.className = 'hidden'; 
            squirrel1.className = 'showing'; 
        })

        back6.addEventListener('click', function() {
            squirrel3.className = 'hidden'; 
            squirrel2.className = 'showing'; 
        })

        homeicon3.addEventListener('click', function() {
            squirrel1.className = 'hidden';
            squirrel2.className = 'hidden';
            squirrel3.className = 'hidden';
            squirrelsection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page7text").innerHTML = outputHTML7(data);
            document.querySelector(".page8text").innerHTML = outputHTML8(data);
            document.querySelector(".page9text").innerHTML = outputHTML9(data);
        }

        function outputHTML7(data) {
            const html = `<p>${data.squirrel.page1}</p>`;
            return html;
        }
        function outputHTML8(data) {
            const html = `<p>${data.squirrel.page2}</p>`;
            return html;
        }
        function outputHTML9(data) {
            const html = `<p>${data.squirrel.page3}</p>`;
            return html;
        }
        getData();
    })

    turkey.addEventListener('click', function(event){
        header.removeAttribute('id');
        turkeysection.className = 'showing';
        homepage.className = 'hidden';
        turkey1.className = 'showing';

        next7.addEventListener('click', function(event) {
            turkey1.className = 'hidden';
            turkey2.className = 'showing';
        })

        next8.addEventListener('click', function(event) {
            turkey2.className = 'hidden';
            turkey3.className = 'showing';
        })

        backhome4.addEventListener('click', function(event) {
            turkey3.className = 'hidden';
            turkeysection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back7.addEventListener('click', function() {
            turkey2.className = 'hidden'; 
            turkey1.className = 'showing'; 
        })

        back8.addEventListener('click', function() {
            turkey3.className = 'hidden'; 
            turkey2.className = 'showing'; 
        })

        homeicon4.addEventListener('click', function() {
            turkey1.className = 'hidden';
            turkey2.className = 'hidden';
            turkey3.className = 'hidden';
            turkeysection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page10text").innerHTML = outputHTML10(data);
            document.querySelector(".page11text").innerHTML = outputHTML11(data);
            document.querySelector(".page12text").innerHTML = outputHTML12(data);
        }

        function outputHTML10(data) {
            const html = `<p>${data.turkey.page1}</p>`;
            return html;
        }
        function outputHTML11(data) {
            const html = `<p>${data.turkey.page2}</p>`;
            return html;
        }
        function outputHTML12(data) {
            const html = `<p>${data.turkey.page3}</p>`;
            return html;
        }
        getData();
    })

    magpie.addEventListener('click', function(event){
        header.removeAttribute('id');
        magpiesection.className = 'showing';
        homepage.className = 'hidden';
        magpie1.className = 'showing';

        next9.addEventListener('click', function(event) {
            magpie1.className = 'hidden';
            magpie2.className = 'showing';
        })

        next10.addEventListener('click', function(event) {
            magpie2.className = 'hidden';
            magpie3.className = 'showing';
        })

        backhome5.addEventListener('click', function(event) {
            magpie3.className = 'hidden';
            magpiesection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back9.addEventListener('click', function() {
            magpie2.className = 'hidden'; 
            magpie1.className = 'showing'; 
        })

        back10.addEventListener('click', function() {
            magpie3.className = 'hidden'; 
            magpie2.className = 'showing'; 
        })

        homeicon5.addEventListener('click', function() {
            magpie1.className = 'hidden';
            magpie2.className = 'hidden';
            magpie3.className = 'hidden';
            magpiesection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page13text").innerHTML = outputHTML13(data);
            document.querySelector(".page14text").innerHTML = outputHTML14(data);
            document.querySelector(".page15text").innerHTML = outputHTML15(data);
        }

        function outputHTML13(data) {
            const html = `<p>${data.magpie.page1}</p>`;
            return html;
        }
        function outputHTML14(data) {
            const html = `<p>${data.magpie.page2}</p>`;
            return html;
        }
        function outputHTML15(data) {
            const html = `<p>${data.magpie.page3}</p>`;
            return html;
        }
        getData();
    })

    turtle.addEventListener('click', function(event){
        header.removeAttribute('id');
        turtlesection.className = 'showing';
        homepage.className = 'hidden';
        turtle1.className = 'showing';

        next11.addEventListener('click', function(event) {
            turtle1.className = 'hidden';
            turtle2.className = 'showing';
        })

        next12.addEventListener('click', function(event) {
            turtle2.className = 'hidden';
            turtle3.className = 'showing';
        })

        backhome6.addEventListener('click', function(event) {
            turtle3.className = 'hidden';
            turtlesection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        back11.addEventListener('click', function() {
            turtle2.className = 'hidden'; 
            turtle1.className = 'showing'; 
        })

        back12.addEventListener('click', function() {
            turtle3.className = 'hidden'; 
            turtle2.className = 'showing'; 
        })

        homeicon6.addEventListener('click', function() {
            turtle1.className = 'hidden';
            turtle2.className = 'hidden';
            turtle3.className = 'hidden';
            turtlesection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page16text").innerHTML = outputHTML16(data);
            document.querySelector(".page17text").innerHTML = outputHTML17(data);
            document.querySelector(".page18text").innerHTML = outputHTML18(data);
        }

        function outputHTML16(data) {
            const html = `<p>${data.turtle.page1}</p>`;
            return html;
        }
        function outputHTML17(data) {
            const html = `<p>${data.turtle.page2}</p>`;
            return html;
        }
        function outputHTML18(data) {
            const html = `<p>${data.turtle.page3}</p>`;
            return html;
        }
        getData();
    })

    redwood.addEventListener('click', function(event){
        header.removeAttribute('id');
        redwoodsection.className = 'showing';
        homepage.className = 'hidden';
        redwood1.className = 'showing';

        n.addEventListener('click', function(event) {
            redwood1.className = 'hidden';
            redwood2.className = 'showing';
        })

        n2.addEventListener('click', function(event) {
            redwood2.className = 'hidden';
            redwood3.className = 'showing';
        })

        bh.addEventListener('click', function(event) {
            redwood3.className = 'hidden';
            redwoodsection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        b.addEventListener('click', function() {
            redwood2.className = 'hidden'; 
            redwood1.className = 'showing'; 
        })

        b2.addEventListener('click', function() {
            redwood3.className = 'hidden'; 
            redwood2.className = 'showing'; 
        })

        hi.addEventListener('click', function() {
            redwood1.className = 'hidden';
            redwood2.className = 'hidden';
            redwood3.className = 'hidden';
            redwoodsection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page19text").innerHTML = outputHTML19(data);
            document.querySelector(".page20text").innerHTML = outputHTML20(data);
            document.querySelector(".page21text").innerHTML = outputHTML21(data);
        }

        function outputHTML19(data) {
            const html = `<p>${data.redwood.page1}</p>`;
            return html;
        }
        function outputHTML20(data) {
            const html = `<p>${data.redwood.page2}</p>`;
            return html;
        }
        function outputHTML21(data) {
            const html = `<p>${data.redwood.page3}</p>`;
            return html;
        }
        getData();
    })

    poppy.addEventListener('click', function(event){
        header.removeAttribute('id');
        poppysection.className = 'showing';
        homepage.className = 'hidden';
        poppy1.className = 'showing';

        n3.addEventListener('click', function(event) {
            poppy1.className = 'hidden';
            poppy2.className = 'showing';
        })

        n4.addEventListener('click', function(event) {
            poppy2.className = 'hidden';
            poppy3.className = 'showing';
        })

        bh2.addEventListener('click', function(event) {
            poppy3.className = 'hidden';
            poppysection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        b3.addEventListener('click', function() {
            poppy2.className = 'hidden'; 
            poppy1.className = 'showing'; 
        })

        b4.addEventListener('click', function() {
            poppy3.className = 'hidden'; 
            poppy2.className = 'showing'; 
        })

        hi2.addEventListener('click', function() {
            poppy1.className = 'hidden';
            poppy2.className = 'hidden';
            poppy3.className = 'hidden';
            poppysection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page22text").innerHTML = outputHTML22(data);
            document.querySelector(".page23text").innerHTML = outputHTML23(data);
            document.querySelector(".page24text").innerHTML = outputHTML24(data);
        }

        function outputHTML22(data) {
            const html = `<p>${data.poppy.page1}</p>`;
            return html;
        }
        function outputHTML23(data) {
            const html = `<p>${data.poppy.page2}</p>`;
            return html;
        }
        function outputHTML24(data) {
            const html = `<p>${data.poppy.page3}</p>`;
            return html;
        }
        getData();
    })

    ginkgo.addEventListener('click', function(event){
        header.removeAttribute('id');
        ginkgosection.className = 'showing';
        homepage.className = 'hidden';
        ginkgo1.className = 'showing';

        n5.addEventListener('click', function(event) {
            ginkgo1.className = 'hidden';
            ginkgo2.className = 'showing';
        })

        n6.addEventListener('click', function(event) {
            ginkgo2.className = 'hidden';
            ginkgo3.className = 'showing';
        })

        bh3.addEventListener('click', function(event) {
            ginkgo3.className = 'hidden';
            ginkgosection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        b5.addEventListener('click', function() {
            ginkgo2.className = 'hidden'; 
            ginkgo1.className = 'showing'; 
        })

        b6.addEventListener('click', function() {
            ginkgo3.className = 'hidden'; 
            ginkgo2.className = 'showing'; 
        })

        hi3.addEventListener('click', function() {
            ginkgo1.className = 'hidden';
            ginkgo2.className = 'hidden';
            ginkgo3.className = 'hidden';
            ginkgosection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page25text").innerHTML = outputHTML25(data);
            document.querySelector(".page26text").innerHTML = outputHTML26(data);
            document.querySelector(".page27text").innerHTML = outputHTML27(data);
        }

        function outputHTML25(data) {
            const html = `<p>${data.ginkgo.page1}</p>`;
            return html;
        }
        function outputHTML26(data) {
            const html = `<p>${data.ginkgo.page2}</p>`;
            return html;
        }
        function outputHTML27(data) {
            const html = `<p>${data.ginkgo.page3}</p>`;
            return html;
        }
        getData();
    })

    lilac.addEventListener('click', function(event){
        header.removeAttribute('id');
        lilacsection.className = 'showing';
        homepage.className = 'hidden';
        lilac1.className = 'showing';

        n7.addEventListener('click', function(event) {
            lilac1.className = 'hidden';
            lilac2.className = 'showing';
        })

        n8.addEventListener('click', function(event) {
            lilac2.className = 'hidden';
            lilac3.className = 'showing';
        })

        bh4.addEventListener('click', function(event) {
            lilac3.className = 'hidden';
            lilacsection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        b7.addEventListener('click', function() {
            lilac2.className = 'hidden'; 
            lilac1.className = 'showing'; 
        })

        b8.addEventListener('click', function() {
            lilac3.className = 'hidden'; 
            lilac2.className = 'showing'; 
        })

        hi4.addEventListener('click', function() {
            lilac1.className = 'hidden';
            lilac2.className = 'hidden';
            lilac3.className = 'hidden';
            lilacsection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page28text").innerHTML = outputHTML28(data);
            document.querySelector(".page29text").innerHTML = outputHTML29(data);
            document.querySelector(".page30text").innerHTML = outputHTML30(data);
        }

        function outputHTML28(data) {
            const html = `<p>${data.lilac.page1}</p>`;
            return html;
        }
        function outputHTML29(data) {
            const html = `<p>${data.lilac.page2}</p>`;
            return html;
        }
        function outputHTML30(data) {
            const html = `<p>${data.lilac.page3}</p>`;
            return html;
        }
        getData();
    })

    oak.addEventListener('click', function(event){
        header.removeAttribute('id');
        oaksection.className = 'showing';
        homepage.className = 'hidden';
        oak1.className = 'showing';

        n9.addEventListener('click', function(event) {
            oak1.className = 'hidden';
            oak2.className = 'showing';
        })

        n10.addEventListener('click', function(event) {
            oak2.className = 'hidden';
            oak3.className = 'showing';
        })

        bh5.addEventListener('click', function(event) {
            oak3.className = 'hidden';
            oaksection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        b9.addEventListener('click', function() {
            oak2.className = 'hidden'; 
            oak1.className = 'showing'; 
        })

        b10.addEventListener('click', function() {
            oak3.className = 'hidden'; 
            oak2.className = 'showing'; 
        })

        hi5.addEventListener('click', function() {
            oak1.className = 'hidden';
            oak2.className = 'hidden';
            oak3.className = 'hidden';
            oaksection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page31text").innerHTML = outputHTML31(data);
            document.querySelector(".page32text").innerHTML = outputHTML32(data);
            document.querySelector(".page33text").innerHTML = outputHTML33(data);
        }

        function outputHTML31(data) {
            const html = `<p>${data.oak.page1}</p>`;
            return html;
        }
        function outputHTML32(data) {
            const html = `<p>${data.oak.page2}</p>`;
            return html;
        }
        function outputHTML33(data) {
            const html = `<p>${data.oak.page3}</p>`;
            return html;
        }
        getData();
    })

    rose.addEventListener('click', function(event){
        header.removeAttribute('id');
        rosesection.className = 'showing';
        homepage.className = 'hidden';
        rose1.className = 'showing';

        n11.addEventListener('click', function(event) {
            rose1.className = 'hidden';
            rose2.className = 'showing';
        })

        n12.addEventListener('click', function(event) {
            rose2.className = 'hidden';
            rose3.className = 'showing';
        })

        bh6.addEventListener('click', function(event) {
            rose3.className = 'hidden';
            rosesection.className = 'hidden';
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        b11.addEventListener('click', function() {
            rose2.className = 'hidden'; 
            rose1.className = 'showing'; 
        })

        b12.addEventListener('click', function() {
            rose3.className = 'hidden'; 
            rose2.className = 'showing'; 
        })

        hi6.addEventListener('click', function() {
            rose1.className = 'hidden';
            rose2.className = 'hidden';
            rose3.className = 'hidden';
            rosesection.className = 'hidden'; 
            homepage.className = 'showing';
            header.setAttribute('id', 'headinghome');
        })

        let globalData;
        async function getData() {
            const content = await fetch('data.json')
            const data = await content.json();
            globalData = data;
            document.querySelector(".page34text").innerHTML = outputHTML34(data);
            document.querySelector(".page35text").innerHTML = outputHTML35(data);
            document.querySelector(".page36text").innerHTML = outputHTML36(data);
        }

        function outputHTML34(data) {
            const html = `<p>${data.rose.page1}</p>`;
            return html;
        }
        function outputHTML35(data) {
            const html = `<p>${data.rose.page2}</p>`;
            return html;
        }
        function outputHTML36(data) {
            const html = `<p>${data.rose.page3}</p>`;
            return html;
        }
        getData();
    })
})();