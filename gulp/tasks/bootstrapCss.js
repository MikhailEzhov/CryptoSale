// app. - глобальная переменная в файле gulpfile.js

// Подключаем сюда:
import dartSass from "sass"; // препроцессор sass
import gulpSass from "gulp-sass"; // для запуска препроцессора sass
import autoprefixer from "gulp-autoprefixer"; // добавляет вендерные префиксы

// Запускаем препроцессор sass
const sass = gulpSass(dartSass);

// Экспортируем: функция для файлов файлов scss из бутстрап:
export const bootstrapCss = () => {
    return app.gulp.src(app.path.src.bootstrapCss) // получение исходных файлов
        .pipe(app.plugins.plumber( // плагин plumber обрабатывает ошибки:
            app.plugins.notify.onError({ // плагин notify сообщает:
                title: "bootstrapSCSS", // заголовок
                message: "Error: <%= error.message %>" // сообщение
            })
        ))
        .pipe(sass({ // запуск и настройка препроцессора sass:
            outputStyle: 'expanded' // будет развернутый файл - удобен для чтения, не сжатый
        }))
        // было без плагина if:
        // .pipe(
        //     autoprefixer({ // запуск и настройка для автопрефиксов:
        //         overrideBrowserslist: ["last 5 versions"], // поддержка браузеров - последние 5 версий
        //         cascade: true // стиль написания автопрефиксов - каскад
        //     })
        // )
        // плагин if проверяет:
        .pipe(app.plugins.if(
            app.isBuild, // если это режим продакшн, то:
            autoprefixer({ // запускаем плагин autoprefixer для добавления вендерных префиксов
                overrideBrowserslist: ["last 5 versions"], // поддержка браузеров - последние 5 версий
                cascade: true // стиль написания автопрефиксов - каскад
            })
        ))
        .pipe(app.gulp.dest(app.path.build.bootstrapCss)) // выгрузка финальных файлов
        .pipe(app.plugins.browsersync.stream()); // плагин browsersync обновляет браузер
};