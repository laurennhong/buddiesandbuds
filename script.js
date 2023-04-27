(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    const bear1 = document.getElementById('bear1');
    const lsh1 = document.getElementById('lsh1');
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            lsh1.src="images/lsh2.png";
            banner.className = 'switch';
            bear1.src="images/bear2.png";
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            lsh1.src="images/lsh1.png";
            banner.removeAttribute('class');
            bear1.src="images/bear1.png";
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })
})()