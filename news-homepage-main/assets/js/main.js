const button = document.getElementById('icon-menu');
const navegation = document.querySelector('nav.cabecalho__menu');

function transformDisplay() {
    
    if (navegation.style.display === 'block') {
        navegation.style.display = 'none';
    } else {
        navegation.style.display = 'block';
    }
}