// тут функции-сервисы:
//   это такие функции, которые можно использовать много раз, и в любом месте проекта



// Функция для отправки POST запроса:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}



// Функция для получения данных через GET запрос:
async function getData(url) {
    let response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }
    return await response.json();
}



// синтаксис ES6 Modules - экспортируем из этого модуля:
export {
    postData
};
export {
    getData
};