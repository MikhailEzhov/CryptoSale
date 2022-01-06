// Импорт основного модуля:
import gulp from "gulp";

// Импорт путей:
import {
    path
} from "./gulp/config/path.js";

// Импорт общих плагинов:
import {
    plugins
} from "./gulp/config/plugins.js";


// Глобальная переменная - app:
global.app = {
    isBuild: process.argv.includes('--build'), // ключ isBuild:  если в process.argv есть флаг --build   это режим продакшн
    isDev: !process.argv.includes('--build'), // ключ isDev:  если в process.argv нету флага --build   это режим разработчика
    gulp: gulp, // ключ gulp:   значение из основного модуля
    path: path, // ключ path:   значение из путей
    plugins: plugins // ключ plagins:   значение из общих плагинов
};


// Импорт задач:
import {
    reset
} from "./gulp/tasks/reset.js"; // для удаления
import {
    html
} from "./gulp/tasks/html.js"; // для файлов html
import {
    server
} from "./gulp/tasks/server.js"; // для локального сервера
import {
    scss
} from "./gulp/tasks/scss.js"; // для файлов scss
import {
    js
} from "./gulp/tasks/js.js"; // для файлов js
import {
    images
} from "./gulp/tasks/images.js"; // для картинок
import {
    fonts
} from "./gulp/tasks/fonts.js"; // для шрифтов
import {
    bootstrapJs
} from "./gulp/tasks/bootstrapJs.js"; // для файла js из бутстрапа
import {
    bootstrapCss
} from "./gulp/tasks/bootstrapCss.js"; // для файлов scss из бутстрапа


// Наблюдатель за изменениями в файлах:
function watcher() {
    gulp.watch(path.watch.html, html); // следить( путь к файлам за которыми надо следить,  какие действия выполнить при изменениях)
    gulp.watch(path.watch.scss, scss).on('change', plugins.browsersync.reload); // следить( путь к файлам за которыми надо следить,  какие действия выполнить при изменениях) / это помогло для перезагрузки страницы
    gulp.watch(path.watch.js, js); // следить( путь к файлам за которыми надо следить,  какие действия выполнить при изменениях)
    gulp.watch(path.watch.images, images); // следить( путь к файлам за которыми надо следить,  какие действия выполнить при изменениях)
    gulp.watch(path.watch.bootstrapCss, bootstrapCss).on('change', plugins.browsersync.reload); // следить( путь к файлам за которыми надо следить,  какие действия выполнить при изменениях) / это помогло для перезагрузки страницы
}


// Основные задачи:
const mainTasks = gulp.parallel(html, scss, js, images); // выполнять параллельно


// Сценарий выполнения задач в режиме разработчика:
const dev = gulp.series(reset, fonts, bootstrapCss, bootstrapJs, mainTasks, gulp.parallel(watcher, server)); // выполнять по очереди (что-то параллельно)
// Сценарий выполнения задач в режиме продакшн:
const build = gulp.series(reset, fonts, bootstrapCss, bootstrapJs, mainTasks); // выполнять по очереди


// Экспорт сценариев - чтобы можно было запускать в терминале:
export {
    dev
};
export {
    build
};


// Выполнение сценария по умолчанию:
gulp.task("default", dev); // задача по умолчанию