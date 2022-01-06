// app. - глобальная переменная в файле gulpfile.js

// Экспортируем: функция для файла js из бутстрапа:
export const bootstrapJs = () => {
    return app.gulp.src(app.path.src.bootstrapJs) // получение исходных файлов
        .pipe(app.gulp.dest(app.path.build.bootstrapJs)); // выгрузка финальных файлов
};