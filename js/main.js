let section = document.querySelectorAll('section')

window.onscroll = () => {
    let item = [...section][0].getBoundingClientRect();
    let header = document.querySelector('#header');


    header.classList.toggle('sticky', item.top <= 0);
};