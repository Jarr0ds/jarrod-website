const textElement = document.getElementById('senioritofficer-title');
const textToDisplayOrHide = document.getElementById('senioritofficer-history-small');

textElement.addEventListener('click', () => {
    if (textToDisplayOrHide.style.display === 'block') {
        textToDisplayOrHide.style.display = 'none';
    } else {
        textToDisplayOrHide.style.display = 'block';
    }
});



