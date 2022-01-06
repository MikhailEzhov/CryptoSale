import {
    postData
} from "../services/_services.js";
// import {
//     getData
// } from "../services/_services.js";



export function modalLogin() {


    // получаю элементы:
    const modalTrigger = document.querySelectorAll("#modalWindowLoginBtnMain"), // кнопки
        modal = document.querySelector("#modalWindowLogin"), // модальное окно
        modalCloseBtn = document.querySelector("#modalWindowLoginBtnClose"); // кнопка закрытия



    // функция для открытия модального окна:
    function openModel() {
        modal.classList.add("_show");
        modal.classList.remove("_hide");

        document.body.style.overflow = "hidden"; // отключаю скролл-прокрутку сайта при открытом модальном окне
    }



    // функция для закрытия модального окна:
    function closeModal() {
        modal.classList.add("_hide");
        modal.classList.remove("_show");

        document.body.style.overflow = ""; // включаю скролл-прокрутку сайта, когда модальное окно закрылось
    }



    // триггеры перебираем, при клике открываем модальное окно:
    modalTrigger.forEach(button => {
        button.addEventListener("click", openModel);
    });

    // действия при клике на кнопку-закрыть в модальном окне:
    modalCloseBtn.addEventListener("click", closeModal);



    //======================================================================================================================
    // POST - отправка на сервер:


    // получаю элементы:
    const form = document.querySelector("#modalWindowLoginForm"),
        inputEmail = document.querySelector("#modalWindowLoginInputEmail"),
        inputPassword = document.querySelector("#modalWindowLoginInputPassword");


    form.addEventListener("submit", (e) => {
        e.preventDefault(); // отменяем стандартное поведение браузера

        // объект для отправки:
        let object = {
            email: inputEmail.value,
            password: inputPassword.value,
        };

        // модуль-сервис для Post отправки:
        postData('https://jsonplaceholder.typicode.com/posts', object)
            .then((data) => {
                console.log('Успех:', data);
            }).catch((error) => {
                console.error('Ошибка:', error);
            });
    });


    // GET - получение с сервера:
    // получаю кнопку:
    // const btn = document.querySelector("#btn777");

    // btn.addEventListener("click", () => {

    //     getData('https://jsonplaceholder.typicode.com/todos/1')
    //         .then((data) => {
    //             console.log('Успех:', data);
    //         });
    // });
}