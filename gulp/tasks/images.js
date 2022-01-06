// app. - глобальная переменная в файле gulpfile.js

// Подключаем сюда:
import imagemin from "gulp-imagemin"; // сжимает картинки

// Экспортируем: функция для картинок:
export const images = () => {
    return app.gulp.src(app.path.src.images) // получение исходных файлов - без svg
        .pipe(app.plugins.plumber( // плагин plumber обрабатывает ошибки:
            app.plugins.notify.onError({ // плагин notify сообщает:
                title: "IMAGES", // заголовок
                message: "Error: <%= error.message %>" // сообщение
            })
        ))
        .pipe(app.plugins.newer(app.path.build.images)) // плагин newer проверяет, может некоторые файлы не надо обновлять, они уже обновлены
        // было без плагина if:
        // .pipe(imagemin({ // плагин imagemin сжимает картинки:
        //     progressive: true,
        //     svgoPlugins: [{
        //         removeViewBox: false
        //     }],
        //     interlaced: true,
        //     optimizationLevel: 3 // сжатие: 0 to 7
        // }))
        // плагин if проверяет:
        .pipe(app.plugins.if(
            app.isBuild, // если это режим продакшн, то:
            imagemin({ // запускаем плагин imagemin для сжатия картинок
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }],
                interlaced: true,
                optimizationLevel: 3 // сжатие: 0 to 7
            })
        ))
        .pipe(app.gulp.dest(app.path.build.images)) // выгрузка финальных файлов - без svg
        .pipe(app.gulp.src(app.path.src.svg)) // получение исходных файлов - svg
        .pipe(app.gulp.dest(app.path.build.images)) // выгрузка финальных файлов - уже с svg
        .pipe(app.plugins.browsersync.stream()); // плагин browsersync обновляет браузер
};