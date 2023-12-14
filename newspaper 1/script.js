const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const shade = document.querySelector('.shade');
    const readMore = document.querySelector('.read-more');

    burger.addEventListener('click', () => {
        
        nav.classList.toggle('nav-active');

        
        burger.classList.toggle('toggle');

        
        shade.classList.toggle('shade-on');
        readMore.classList.toggle('shade-more');
    });

}

navSlide();