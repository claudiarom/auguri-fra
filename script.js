const pageHome = document.getElementById('page-home');
const pageDuck = document.getElementById('page-duck');
const cliccamiButton = document.getElementById('cliccami-button');
const goBackButton = document.getElementById('go-back-button');
const duckStage = document.getElementById('duck-stage');

function showPage(page) {
    if (page === 'home') {
        pageHome.classList.remove('hidden');
        pageDuck.classList.add('hidden');
        pageDuck.style.opacity = '0';
        
        duckStage.classList.remove('jumping-element');

    } else if (page === 'duck') {
        pageHome.classList.add('hidden');
        pageDuck.classList.remove('hidden');
        
        setTimeout(() => {
            pageDuck.style.opacity = '1';
        }, 50);

        duckStage.classList.add('jumping-element');
    }
}

cliccamiButton.addEventListener('click', () => showPage('duck'));
goBackButton.addEventListener('click', () => showPage('home'));

window.onload = () => {
    showPage('home');
};
