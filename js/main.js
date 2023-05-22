let section = document.querySelectorAll('section')

window.onscroll = () => {
    // STICKY
    let header = document.querySelector('#header');
    let item = [...section][0].getBoundingClientRect();
    header.classList.toggle('sticky', item.top <= 0);
};