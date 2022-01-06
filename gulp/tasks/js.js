// app. - глобальная переменная в файле gulpfile.js

// Подключаем сюда:
import webpack from "webpack-stream"; // модуль webpack-stream

// Экспортируем: функция для файлов js:
export const js = () => {
    return app.gulp.src(app.path.src.js, { // получение исходных файлов
            // было без плагина if:
            // sourcemaps: true // используем карты исходников, чтобы понимать в каком модуле это было написано
            // с плагином if:
            sourcemaps: app.isDev // в режиме разработчика будет исходные карта, в режиме продакш карт не будет
        })
        .pipe(app.plugins.plumber( // плагин plumber обрабатывает ошибки:
            app.plugins.notify.onError({ // плагин notify сообщает:
                title: "JS", // заголовок
                message: "Error: <%= error.message %>" // сообщение
            })
        ))
        // webpack запускаем через условие:
        .pipe(app.plugins.if(
            app.isDev, // если это режим разработчика, то:
            webpack({ // запускаю webpack с этими настройками:
                mode: 'development', // режим разработчика
                output: { // на выходе:
                    filename: 'bundle.js', // имя файла
                },
            })
        ))
        // webpack запускаем через условие:
        .pipe(app.plugins.if(
            app.isBuild, // если это режим продакшн, то:
            webpack({ // запускаю webpack с этими настройками:
                mode: 'production', // режим продакшн
                output: { // на выходе:
                    filename: 'bundle.js', // имя файла
                },
                module: { // какие модули используем:
                    rules: [ // правила:
                        {
                            test: /\.m?js$/, // находим файлы js
                            exclude: /(node_modules|bower_components)/, // какие файлы исключаем
                            use: { // как и что используем:
                                loader: 'babel-loader', // загрузчик: babel-loader
                                options: { // опции:
                                    presets: [
                                        ['@babel/preset-env', { // пресеты(готовые настройки),  пресет env
                                            debug: true, // включаем debug, чтобы увидеть ошибки-проблемы
                                            corejs: 3, // библиотека core-js версия 3, чтобы подключить все возможные полифилы
                                            useBuiltIns: "usage" // - это функция от core-js:  использовать только те полифилы, которые действительно нужны
                                        }]
                                    ]
                                }
                            }
                        }
                    ]
                }
            })
        ))
        // был запуск webpack без условий:
        // .pipe(webpack({ // запускаю webpack с этими настройками:
        //     mode: 'development', // режим разработчика
        //     output: { // на выходе:
        //         filename: 'bundle.js', // имя файла
        //     }
        // }))
        .pipe(app.gulp.dest(app.path.build.js)) // выгрузка финальных файлов
        .pipe(app.plugins.browsersync.stream()); // плагин browsersync обновляет браузер
};