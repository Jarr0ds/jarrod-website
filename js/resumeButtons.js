
const textElement = document.getElementById('senioritofficer-title');
const textToDisplayOrHide = document.getElementById('senioritofficer-history-small');


const textElement1 = document.getElementById('ictofficer-title');
const textToDisplayOrHide1 = document.getElementById('itofficer-history-small');

const textElement2 = document.getElementById('it-trainee-title');
const textToDisplayOrHide2 = document.getElementById('itsupport-trainee-history-small')

textElement.addEventListener('click', () => {

    if (textToDisplayOrHide.style.display === 'block') {
        textToDisplayOrHide.style.display = 'none';

    } else {
        textToDisplayOrHide.style.display = 'block';


    }
});

textElement1.addEventListener('click', () => {

    if (textToDisplayOrHide1.style.display === 'block') {
        textToDisplayOrHide1.style.display = 'none';

    } else {
        textToDisplayOrHide1.style.display = 'block';


    }
});


textElement2.addEventListener('click', () => {

    if (textToDisplayOrHide2.style.display === 'block') {
        textToDisplayOrHide2.style.display = 'none';

    } else {
        textToDisplayOrHide2.style.display = 'block';


    }
});

