let select = document.getElementById('age');
const titre = document.querySelector('h2');
const img = document.getElementById('img');

// /* Methode 1 / 15 lignes  */

select.addEventListener('change', () => {

    value = select.selectedIndex;

    switch (value) {

        case 1:
            titre.innerHTML = 'Nous vous consseillon le film Cendrillon';
            img.innerHTML = `<img src="https://fr.web.img6.acsta.net/pictures/14/11/19/15/31/350162.jpg">`;
            break;

        case 2:
            titre.innerHTML = 'Nous vous consseillon le film Matrix';
            img.innerHTML = `<img src="https://www.ecranlarge.com/uploads/image/001/453/peoqbqtlc4ccwdudqxmedswpwtz-206.jpg">`;
            break;

        case 3:
            titre.innerHTML = 'Nous vous consseillon le film Top Gun';
            img.innerHTML = `<img src="https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg">`;
            break;
        default: titre.innerHTML = 'Choisissez votre âge :'
    }
});




/* Methode 2 / 14 lignes (préférable) */

// select.addEventListener('change', () => {

//     value = select.selectedIndex;

//     if (value === 1) {
//         titre.innerHTML = 'Nous vous consseillon le film Cendrillon';
//         img.innerHTML = `<img src="https://fr.web.img6.acsta.net/pictures/14/11/19/15/31/350162.jpg">`;
//     }
//     else if (value === 2) {
//         titre.innerHTML = 'Nous vous consseillon le film Matrix';
//         img.innerHTML = `<img src="https://www.ecranlarge.com/uploads/image/001/453/peoqbqtlc4ccwdudqxmedswpwtz-206.jpg">`;
//     }
//     else if (value === 3) {
//         titre.innerHTML = 'Nous vous consseillon le film Top Gun';
//         img.innerHTML = `<img src="https://fr.web.img3.acsta.net/pictures/22/03/29/15/12/0827894.jpg">`;
//     }

//     else {
//         titre.innerHTML = 'Choisissez votre âge :';
//         img.innerHTML = ``;
//     }
// });
