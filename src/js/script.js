"use strict";

// подключаю (нужную функцию или другой тип данных) из определенного модуля (синтаксис ES6 Modules):
import {
    loadScript
} from "./modules/_loadScript.js";
import {
    header
} from "./modules/_header.js";
import {
    exchange
} from "./modules/_exchange.js";
import {
    applications
} from "./modules/_applications.js";
import {
    comments
} from "./modules/_comments.js";
import {
    modalRegistration
} from "./modules/_modal-registration.js";
import {
    modalLogin
} from "./modules/_modal-login.js";



window.addEventListener("DOMContentLoaded", () => {

    // запускаю на странице (нужную функцию или другой тип данных), передаю аргументы если надо:
    loadScript("bootstrap/bootstrap.bundle.min.js");
    header();
    exchange();
    applications();
    comments();
    modalRegistration();
    modalLogin();

});