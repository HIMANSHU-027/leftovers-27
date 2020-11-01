const lblock = document.querySelector('.lblock');
const bargar = document.querySelector('.bargar');

bargar.addEventListener('click', () => {
    lblock.classList.toggle("open");
})