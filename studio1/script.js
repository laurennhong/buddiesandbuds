(function() {
    "use strict";
    console.log('js is running');

    const video = document.querySelector("video");
    const introquote = document.querySelector("#introquote");
    const quote1 = document.querySelector('#quote1');
    const quote2 = document.querySelector('#quote2');
    const quote3 = document.querySelector('#quote3');
    const quote4 = document.querySelector('#quote4');
    const quotebox = {
        start: [0, 7, 14, 21, 28],
        stop: [5, 12, 19, 26, 33],
        line: [introquote, quote1, quote2, quote3, quote4]
    };
    const filters =  ["blur(3px)", "saturate(3)","brightness(150%)", "saturate(9)", "contrast(200%)", "brightness(50%)"];
    let filterCount = 0;
    const intervalID = setInterval(checkTime, 500);
    const intervalID2 = setInterval(changeFilter, 5000);

    function checkTime() {
        for (let i = 0; i < quotebox.start.length; i++) {
            if (quotebox.start[i] < video.currentTime && video.currentTime < quotebox.stop[i]) {
                quotebox.line[i].className = "showing";
            } else {
                quotebox.line[i].className = "hidden";
            }
        }
    }

    function changeFilter() {
        if (filterCount >= filters.length-1) {
            filterCount = 0;
        } else {
            filterCount ++;
        }
        video.style.filter = filters[filterCount];
    };
})();