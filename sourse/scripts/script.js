let cart = JSON.parse(localStorage.getItem("cart")); //все товары в корзине
const cartSide = document.querySelector(".cart")
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")


//добавляем в таблицу
if (cartStorage.length) {
    cartStorage.forEach(el => {
        const { name, price, quantity, id } = el
        const newCard = document.createElement('tr')

        newCard.className = `newCarto${id}`;
        newCard.innerHTML = `<tr><td><div class="title"><h1>${name}</h1></div></td><td><div class="title"><h1>${price}</h1></div></td><td><div class="title"><h1 id="prices${id}">${quantity}</h1></div></td><td><div class="doing"><button class="btn btN counter mbtn btn-danger" id="minus${id}">Del</button><button class="btn btN counter pbtn btn-primary" id="plus${id}">plus</button></div></td></tr>`
        cartSide.appendChild(newCard)

        getTotal();
    });
} else {
    //Скрываю оформить заказ и таблицу если нет товаров в корзине
    let tabl = document.getElementsByClassName("tabl")[0];
    let oblzak = document.getElementsByClassName("obl")[0];

    tabl.classList.add("hide");
    oblzak.classList.add("hide");

}

// Конечная сумма
function getTotal() {
    const result = document.getElementsByClassName("result")[0];
    let temp = cart.map(function (item) {
        return parseInt(item.price * item.quantity);
    });

    let sum = temp.reduce(function (prev, next) {
        return prev + next;
    }, 0);
    const sumi = sum
    result.innerHTML = `${sumi} ₽`
}

//Функция удаления из корзины единично
function removeItemfromCart(productId) {
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));

    location.reload();
}

//Удалить все
function removeAll() {
    localStorage.setItem("cart", "[]");
    location.reload();
}
//Кнопка удалить все - удаляем все
delall = document.getElementsByClassName('delall')[0];
delall.addEventListener('click', () => {
    removeAll();
})

//Узнаем кол-во 
function Quantity(productId) {
    for (let product of cart) {
        if (product.id == productId) {
            return product.quantity;
        }
    }
}

//Обновить кол-во товара в LS + Обнова дисплея
function updateQuantity(productId, quantity) {
    for (let product of cart) {
        if (product.id == productId) {
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(`prices${productId}`).innerHTML = Quantity(productId);
            document.getElementById(`result`).innerHTML = `${getTotal()} Р`;
        }
    };
    xhttp.open("GET", "korzina.html", true);
    xhttp.send();

}


// ============================= Взаимодействие с товарами =====================================

// Отслеживаю нажатие кнопки ПЛЮС
const plusbuttons = document.querySelectorAll('.pbtn')
plusbuttons.forEach(button => {
    button.addEventListener('click', function () {
        var productID = this.id.replace('plus', '');// Получаем цифровую часть id кнопки

        let count = Quantity(productID)

        count++;
        updateQuantity(productID, count);
    });
});

// Отслеживаю нажатие кнопки МИНУС
const minusbuttons = document.querySelectorAll('.mbtn')
minusbuttons.forEach(button => {
    button.addEventListener('click', function () {
        var productID = this.id.replace('minus', '');// Получаем цифровую часть id кнопки
        let count = Quantity(productID)

        if ((count - 1) > 0) {
            count--;
            updateQuantity(productID, count);
        } else {
            removeItemfromCart(productID);
        }
    });
});

