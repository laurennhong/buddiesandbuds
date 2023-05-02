(function() {
    "use strict";
    console.log('js is running');

    let globalData;
    async function getData() {
        const mySongs = await fetch('data/data.json')
        const data = await mySongs.json();
        globalData = data;
        document.querySelector("#song").innerHTML = outputHTML1(data);
        document.querySelector("#lyrics").innerHTML = outputHTML2(data);
        document.querySelector("#time").innerHTML = createSelectList(data);
        const albumcover = document.querySelector("#albumcover");
    }

    function outputHTML1(data) {
        const html = `<p>${data.point1.song}</p><br><p>${data.point1.artist}</p>`;
        return html;
    }
    function outputHTML2(data) {
        const html = `<p>${data.point1.lyrics}</p>`;
        return html;
    }

    function createSelectList(data){
        let html = '<option>---</option>';
        const dataPoints = Object.keys(data);
        dataPoints.forEach(function(eachPoint) {
            html += `<option value="${eachPoint}">${data[eachPoint].time}</option>`;
        });
        return html;
    }

    document.querySelector("#time").addEventListener('change', function() {
        const newValue = this.value;
        updateInterface(newValue, globalData);
    })

    function updateInterface(value, jsonData){
        let html='<p>';
        html += `${jsonData[value].song}`;
        html +='</p><br>';
        html +='<p>';
        html += `${jsonData[value].artist}`;
        html +='</p>';
        document.querySelector("#song").innerHTML = html;

        let html2 ='<p>';
        html2 += `${jsonData[value].lyrics}`;
        html2 +='</p>';
        document.querySelector("#lyrics").innerHTML = html2;

        albumcover.src = `images/${value}.png`;
    }

    getData();
})();