// app. - глобальная переменная в файле gulpfile.js

// Подключаем сюда:
import dartSass from "sass"; // препроцессор sass
import gulpSass from "gulp-sass"; // для запуска препроцессора sass
import rename from "gulp-rename"; // для переименовывания
import cleanCss from "gulp-clean-css"; // чистит и сжимает файл css
import autoprefixer from "gulp-autoprefixer"; // добавляет вендерные префиксы

// Запускаем препроцессор sass
const sass = gulpSass(dartSass);

// Экспортируем: функция для файлов scss:
export const scss = () => {
    return app.gulp.src(app.path.src.scss, { // получение исходных файлов
            // было без плагина if:
            // sourcemaps: true // используем карты исходников, чтобы понимать в каком модуле это было написано
            // с плагином if:
            sourcemaps: app.isDev // в режиме разработчика будет исходные карта, в режиме продакш карт не будет
        })
        .pipe(app.plugins.plumber( // плагин plumber обрабатывает ошибки:
            app.plugins.notify.onError({ // плагин notify сообщает:
                title: "SCSS", // заголовок
                message: "Error: <%= error.message %>" // сообщение
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/')) // плагин replace ищет и заменяет
        .pipe(sass({ // запуск и настройка препроцессора sass:
            outputStyle: 'expanded' // будет развернутый файл - удобен для чтения, не сжатый
        }))
        // было без плагина if:
        // .pipe(
        //     autoprefixer({ // запуск и настройка для автопрефиксов:
        //         grid: true, // включаем обработку grid свойств автопрефиксором
        //         overrideBrowserslist: ["last 5 versions"], // поддержка браузеров - последние 5 версий
        //         cascade: true // стиль написания автопрефиксов - каскад
        //     })
        // )
        // плагин if проверяет:
        .pipe(app.plugins.if(
            app.isBuild, // если это режим продакшн, то:
            autoprefixer({ // запускаем плагин autoprefixer для добавления вендерных префиксов
                grid: true, // включаем обработку grid свойств автопрефиксором
                overrideBrowserslist: ["last 5 versions"], // поддержка браузеров - последние 5 версий
                cascade: true // стиль написания автопрефиксов - каскад
            })
        ))
        .pipe(app.gulp.dest(app.path.build.css)) // выгрузка финальных файлов - 1 раз
        // было без плагина if:
        // .pipe(cleanCss()) // запускаем плагин cleanCss - почистит и сожмет файл
        // плагин if проверяет:
        .pipe(app.plugins.if(
            app.isBuild, // если это режим продакшн, то:
            cleanCss() // запускаем плагин cleanCss - почистит и сожмет файл
        ))
        .pipe(
            rename({
                extname: ".min.css" // переименовываем, добавляю к файлу ещё .min.css
            })
        )
        .pipe(app.gulp.dest(app.path.build.css)) // выгрузка финальных файлов - 2 раз
        .pipe(app.plugins.browsersync.stream()); // плагин browsersync обновляет браузер
};