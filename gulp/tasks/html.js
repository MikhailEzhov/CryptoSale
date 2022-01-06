// app. - глобальная переменная в файле gulpfile.js

// Подключаем сюда:
import fileInclude from "gulp-file-include"; // подключать файлы-модули

// Экспортируем: функция для html:
export const html = () => {
    return app.gulp.src(app.path.src.html) // получение исходных файлов
        .pipe(app.plugins.plumber( // плагин plumber обрабатывает ошибки:
            app.plugins.notify.onError({ // плагину notify сообщает:
                title: "HTML", // заголовок
                message: "Error: <%= error.message %>" // сообщение
            })
        ))
        .pipe(fileInclude()) // запускаем плагин fileInclude чтобы подключать файлы-модули
        .pipe(app.plugins.replace(/@img\//g, 'img/')) // плагин replace ищет и заменяет
        .pipe(app.gulp.dest(app.path.build.html)) // выгрузка финальных файлов
        .pipe(app.plugins.browsersync.stream()); // плагин browsersync обновляет браузер
};