// app. - глобальная переменная в файле gulpfile.js

// Подключаем сюда:
import del from "del";

// Экспортируем: функция для удаления
export const reset = () => {
    return del(app.path.clean); // очищение папки с финальными файлами
};