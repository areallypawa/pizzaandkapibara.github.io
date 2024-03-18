const toastTrigger = document.getElementById('liveToastBtn1')
const toastLiveExample = document.getElementById('liveToast')
var header = document.getElementById("header23")

// КНОПКИ ВРАЩЕНИЯ Находим кнопку и добавляем событие клика
// Находим контейнер, который может прокручиваться, и добавляем событие клика на кнопку
const container = document.querySelector('#container');
const buttonR = document.querySelector('#right');
buttonR.addEventListener('click', function () {
    container.scrollBy({
        left: 500,
        behavior: "smooth"
    });
});
const buttonL = document.querySelector('#left');
buttonL.addEventListener('click', function () {
    container.scrollBy({
        left: -500,
        behavior: "smooth"
    });
});

// Парсим файл с продуктами
fetch("sourse/files/json/storage.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem("products", JSON.stringify(data));
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");

        }
    });

let products = JSON.parse(localStorage.getItem("products")); //Все продукты 
let cart = JSON.parse(localStorage.getItem("cart")); //все товары в корзине

// Парсим файл с категориями
fetch("sourse/files/json/category.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem("categorys", JSON.stringify(data));
    });

//Парсим файл с рекламой
fetch("sourse/files/json/banners.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        localStorage.setItem("banners", JSON.stringify(data));
    });

//Функция добавления в корзину
function addItemToCard(productId) {
    let product = products.find(function (product) {
        return product.id == productId;
    });

    if (cart.lenght == 0) {
        cart.push(product);
    } else {
        let res = cart.find(element => element.id == productId);
        if (res == undefined) {
            cart.push(product);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Удалить из корзины
function removeItemfromCart(productId) {
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));

}
// Имя карточки товара
function getNameItem(productId) {
    for (let product of products) {
        if (product.id == productId) {
            return product.name;
        }
    }
}
//Узнаем кол-во 
function Quantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")); //все товары в корзине
    for (let product of cart) {
        if (product.id == productId) {
            return product.quantity;
        }
    }
}

// Счетчик на главной странице
function count() {
    const display = document.getElementById("count")
    display.innerHTML = cart.length
}
count();
// Обновить кол-во
function updateQuantity(productId, quantity) {
    for (let product of cart) {
        if (product.id == productId) {
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // updateDisplay(productId);
    //Обновляю дисплей счетчик
    const display = document.getElementById("count")
    if (display) {
        count();
    } else {
        console.log('Нема')
    }
}

// Далее - функционал с товарами в файле appendFiles
