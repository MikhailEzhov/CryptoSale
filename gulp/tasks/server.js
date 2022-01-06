// app. - глобальная переменная в файле gulpfile.js

// Экспортируем: функция для сервера:
export const server = (done) => {
    app.plugins.browsersync.init({ // запускаем плагин browsersync:
        server: {
            baseDir: `${app.path.build.html}` // откуда запускаем файлы: папка с финальными файлами
        },
        notify: false, // отключаем сообщения
        port: 3000,
    });
};