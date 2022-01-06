// Подключаем сюда:
import replace from "gulp-replace"; // поиск и замена
import plumber from "gulp-plumber"; // обработка ошибок
import notify from "gulp-notify"; // сообщения (подсказки)
import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer"; // проверка обновления
import ifPlugin from "gulp-if"; // условное ветвление

// Экспортируем: объект - plugins:
export const plugins = {
    replace: replace, // ключ replace:   значение из пакета gulp-replace
    plumber: plumber, // ключ plumber:   значение из пакета gulp-plumber
    notify: notify, // ключ notify:   значение из пакета gulp-notify
    browsersync: browsersync, // ключ browsersync:   значение из пакета browser-sync
    newer: newer, // ключ newer:   значение из пакета gulp-newer
    if: ifPlugin // ключ if:   значение из пакета gulp-if
};