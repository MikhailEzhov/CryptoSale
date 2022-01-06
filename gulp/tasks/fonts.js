// app. - глобальная переменная в файле gulpfile.js

// Экспортируем: функция для шрифтов:
export const fonts = () => {
    return app.gulp.src(app.path.src.fonts) // получение исходных файлов
        .pipe(app.gulp.dest(app.path.build.fonts)); // выгрузка финальных файлов
};