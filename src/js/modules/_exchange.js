import {
    postData
} from "../services/_services.js";
// import {
//     getData
// } from "../services/_services.js";

export function exchange() {

    // тут задавать курс криптовалют к рублю:
    const btc = 3506858.46;
    const bch = 32947.94;
    const eth = 277734.52;
    const ltc = 11103.56;



    // получаю элементы:
    const form = document.querySelector(".exchange__form"); // форма
    const switchBtn = document.querySelector(".exchange__switch"); // кнопка перевората
    const blockGive = document.querySelector(".exchange__give"); // блок отдать
    const blockReceive = document.querySelector(".exchange__receive"); // блок получить
    const rubBtc = document.querySelector(".exchange__value_rub-btc"); // курс биткоина к рублю
    const inputCheckbox = document.querySelector(".exchange__checkbox"); // чекбокс
    let inputGive = document.querySelector("#inputGive"); // инпут отдать
    let inputReceive = document.querySelector("#inputReceive"); // инпут получить
    let inputCrypto = document.querySelector('#selectCrypto'); // инпут с выбором криптовалюты
    let inputBank = document.querySelector('#selectBank'); // инпут с выбором банка



    // функция - когда кликаем на кнопку переворота:
    function switchInputs() {
        let start = 0;

        switchBtn.addEventListener("click", () => {
            let num = start;
            start++;

            if (num % 2 == 0) {
                inputGive.replaceWith(inputReceive); // замена
                inputCrypto.replaceWith(inputBank); // замена
                blockReceive.append(inputGive); // добавить в конец
                blockReceive.append(inputCrypto); // добавить в конец
            } else {
                inputReceive.replaceWith(inputGive); // замена
                inputBank.replaceWith(inputCrypto); // замена
                blockReceive.append(inputReceive); // добавить в конец
                blockReceive.append(inputBank); // добавить в конец
            }
        });
    }
    switchInputs();



    // динамически помещаю на страницу курс биткоина к рублю:
    rubBtc.textContent = btc;



    // курс выбранной криптовалюты
    let multiplier = 1;



    // когда в инпут give что-то вводится:
    inputGive.addEventListener('input', () => {
        let valueAmountCrypto = inputGive.value;
        inputReceive.value = parseFloat(valueAmountCrypto * multiplier).toFixed(2);
        //console.log(valueAmountCrypto);
    });



    // когда в инпут receive что-то вводится:
    inputReceive.addEventListener('input', () => {
        let valueAmountRub = inputReceive.value;
        inputGive.value = parseFloat(valueAmountRub / multiplier).toFixed(2);
        //console.log(valueAmountRub);
    });



    // когда выбрали криптовалюту из списка:
    inputCrypto.addEventListener("click", () => {
        inputGive.value = "";
        inputReceive.value = "";
        let data = inputCrypto.value;
        switch (data) {
            case "": // если value="">Choose the currency
                multiplier = 1;
                break;
            case "1": // если value="1">BTC
                multiplier = btc;
                break;
            case "2": // value="2">BCH
                multiplier = bch;
                break;
            case "3": // value="3">ETH
                multiplier = eth;
                break;
            case "4": // value="4">LTC
                multiplier = ltc;
                break;
        }
        //console.log(data, cryptoCurrency);
    });


    //------------------------------------------------------------------------------------------
    // POST - отправка на сервер:
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // отменяем стандартное поведение браузера

        // объект для отправки:
        let object = {
            give: inputGive.value,
            crypto: inputCrypto.value,
            receive: inputReceive.value,
            bank: inputBank.value,
            checkbox: inputCheckbox.checked,
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