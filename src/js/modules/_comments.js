import Glide from '@glidejs/glide';


export function comments() {

    // слайдер:
    const glideComments = new Glide('.comments__slider-glide', {
        type: 'slider',
        startAt: 0,
        gap: 11,
        perView: 1,
    });



    // функция для проверки ширины экрана:
    function getWindowWidth() {
        return window.innerWidth || document.body.clientWidth;
    }

    if (getWindowWidth() > 991) {
        // console.log('> 991');
    } else {
        // console.log('< 991');
        glideComments.mount(); // запускаем слайдер
    }

}