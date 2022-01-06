// Получаем имя папки проекта:
import * as nodePath from "path"; // подключаем сюда модуль path
const rootFolder = nodePath.basename(nodePath.resolve()); // rootFolder =  будет называтся как сам проект


const buildFolder = `./dist`; // папка для финального проекта /  вместо dist можно использовать rootFolder
const srcFolder = `./src`; // папка с исходниками


// Экспортируем: пути для gulp:
export const path = {

    // куда выгружать финальные файлы:
    build: {
        js: `${buildFolder}/js/`, // js:   в buildFolder/js
        fonts: `${buildFolder}/fonts/`, // fonts:   в buildFolder/fonts
        images: `${buildFolder}/img/`, // images:   в buildFolder/img
        css: `${buildFolder}/css/`, // css:   в buildFolder/css
        html: `${buildFolder}/`, // html:   в buildFolder
        bootstrapJs: `${buildFolder}/bootstrap/`, // bootstrapJs:   в buildFolder/bootstrap
        bootstrapCss: `${buildFolder}/bootstrap/`, // bootstrapCss:   в buildFolder/bootstrap
    },

    // откуда получать исходные файлы:
    src: {
        js: `${srcFolder}/js/script.js`, // js:   из srcFolder/js/файл script.js
        fonts: `${srcFolder}/fonts/**/*.{woff,woff2}`, // fonts:   из srcFolder/fonts/все подпапки/любые файлы с этими расширениями 
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`, // images:   из srcFolder/img/все подпапки/любые файлы с этими расширениями 
        svg: `${srcFolder}/img/**/*.svg`, // svg:   из srcFolder/img/все подпапки/любые файлы с расширением svg
        scss: `${srcFolder}/scss/style.scss`, // scss:   из srcFolder/scss/файл style.scss
        html: `${srcFolder}/*.html`, // html:   из srcFolder/любые файлы с этим расширением
        bootstrapJs: `${srcFolder}/bootstrap/*.js`, // bootstrapJs:   из srcFolder/bootstrap/любые файлы с расширением js
        bootstrapCss: `${srcFolder}/bootstrap/bootstrap.scss`, // bootstrapCss:   из srcFolder/bootstrap/только этот файл
    },

    // откуда получать исходные файлы, за которыми надо следить:
    watch: {
        js: `${srcFolder}/js/**/*.js`, // js:   за srcFolder/js/все подпапки/любые файлы с расширением js
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`, // images:   за srcFolder/img/все подпапки/любые файлы с этими расширениями 
        scss: `${srcFolder}/scss/**/*.scss`, // scss:   за srcFolder/scss/все подпапки/любые файлы с расширением scss
        html: `${srcFolder}/**/*.html`, // html:   за srcFolder/все подпапки/любые файлы с этим расширением
        bootstrapCss: `${srcFolder}/bootstrap/**/*.scss`, // bootstrapCss:   за srcFolder/bootstrap/все подпапки/любые файлы с расширением scss
    },

    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `` // папка на удаленном ftp сервере
};