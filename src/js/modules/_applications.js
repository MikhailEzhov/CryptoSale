import Glide from '@glidejs/glide';


export function applications() {

    // слайдер:
    const glide = new Glide('.applications__glide-slider', {
        type: 'slider',
        startAt: 0,
        gap: 0,
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
        glide.mount(); // запускаем слайдер
    }

}