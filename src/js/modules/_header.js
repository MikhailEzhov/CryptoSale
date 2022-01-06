export function header() {

    // получаю элемент(ы):
    const headerIcon = document.querySelector(".header__menu-icon"); // родитель для иконок
    const headerNav = document.querySelector(".header__nav"); // ссылки
    const headerUserAvatar = document.querySelector(".header__user-avatar"); // аватарка пользователя
    const headerButReg = document.querySelector(".header__button_transparent"); // кнопка регистрации
    const wrapper = document.querySelector(".wrapper"); // глобальная обертка


    // блок, чтобы можно было только взаимодействовать с меню-бургер:
    const blockNull = document.createElement("div"); // создал
    blockNull.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        z-index: 50;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease 0s;
        transform: translate(-100%, 0%);
        background: rgba(4, 4, 4, 0.6);
        backdrop-filter: blur(9px);
    `;
    wrapper.append(blockNull); // поместили динамически в нужный элемент


    headerIcon.addEventListener("click", () => {
        if (headerIcon.lastElementChild.classList.contains("header__icon-burger")) { // условие-если (у элемента есть этот класс, то делаем:
            headerIcon.lastElementChild.className = "header__icon-exit"; // заменяем все классы на эти
            headerNav.className = "header__nav header-show"; // заменяем все классы на эти
            headerUserAvatar.className = "header__user-avatar header-show"; // заменяем все классы на эти
            headerButReg.className = "header__button header__button_transparent header-button-breakpoint header-show"; // заменяем все классы на эти
            blockNull.style.transform = `translate(0%, 0%)`;

            wrapper.style.cssText = `
                position: relative;
            `;

            headerUserAvatar.style.cssText = `
                position: absolute;
            `;

            headerButReg.style.cssText = `
                position: absolute;
            `;

            headerNav.style.cssText = `
                position: absolute;
            `;
        } else {
            headerIcon.lastElementChild.className = "header__icon-burger"; // заменяем все классы на эти
            headerNav.className = "header__nav"; // заменяем все классы на эти
            headerUserAvatar.className = "header__user-avatar"; // заменяем все классы на эти
            headerButReg.className = "header__button header__button_transparent"; // заменяем все классы на эти
            blockNull.style.transform = `translate(-100%, 0%)`;

            wrapper.style.cssText = "";
            headerUserAvatar.style.cssText = "";
            headerButReg.style.cssText = "";
            headerNav.style.cssText = "";
        }
    });
}