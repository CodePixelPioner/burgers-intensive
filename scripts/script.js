document.getElementById("main-action-button").onclick = function () {
document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}


//валидация для полей формы
//Находим все наши input и присваиваем им переменные
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
//обработка клика по кнопке (при клике программа проходится по каждому элементу формы)
document.getElementById("order-action").onclick = function () {
    let hasError = false;
//если там поле пустое, то делаем крассный фон и высталяем флаг ошибки (hasError=true),
//если ошибки нет, то возвращаем изначальный фон
    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        }   else {
            item.parentElement.style.background = "";
        }
    });
    //благодарим за заказ если ошибки не было (не hasError) при заполнении полей формы
    if (!hasError) {
        //очищаем поля формы (чтобы пользователь мог снова оформить заказ)
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами!");
    }
}

//переменная для обработчика
let prices = document.getElementsByClassName("products-item-price");
//обработчик событий для валюты
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    //пересчитываем валюту
    let newCurrency = "$";
    let coefficient = 1;

    //проверка текущей валюты
    if (currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 80;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}
