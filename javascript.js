document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const body = document.querySelector('body');
    
    card.addEventListener('click', () => {
        card.classList.toggle('opened');
        body.classList.toggle('opened');
    });
});
