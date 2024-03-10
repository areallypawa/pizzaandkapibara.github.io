let cart = JSON.parse(localStorage.getItem("cart")); //все товары в корзине
const cartSide = document.querySelector(".cart")
const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]")



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




//добавляем в таблицу
if (cartStorage.length) {
    cartStorage.forEach(el => {
        const { name, price, quantity, id } = el
        const newCard = document.createElement('tr')

        newCard.className = `newCarto${id}`;
        newCard.innerHTML = `<tr><td><div class="title"><h1>${name}</h1></div></td><td><div class="title"><h1>${price}</h1></div></td><td><div class="title"><h1 id="prices${id}">${quantity}</h1></div></td><td><div class="doing"><button class="btn btN mbtn${id} btn-danger">Del</button><button class="btn btN pbtn${id} btn-primary">plus</button></div></td></tr>`
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






//Функция удаления из корзины единично
function removeItemfromCart(productId) {
    // console.log(1)
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));

    location.reload();
}




//Удалить все
function removeAll() {
    localStorage.setItem("cart", "[]");
    location.reload();
}



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
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(`prices${ productId }`).innerHTML = Quantity(productId); 
        document.getElementById(`result`).innerHTML = `${getTotal()} Р`; 
      }
    };
    xhttp.open("GET", "korzina.html", true);
    xhttp.send();
    location.reload();
}

let n1 = Quantity(1);
let n2 = Quantity(2);
let n3 = Quantity(3);
let n4 = Quantity(4);
let n5 = Quantity(5);
let n6 = Quantity(6);
let n7 = Quantity(7);
let n8 = Quantity(8);

//Кнопка -
mtriger = document.getElementsByClassName('mbtn1')[0];
mtriger2 = document.getElementsByClassName('mbtn2')[0];
mtriger3 = document.getElementsByClassName('mbtn3')[0];
mtriger4 = document.getElementsByClassName('mbtn4')[0];
mtriger5 = document.getElementsByClassName('mbtn5')[0];
mtriger6 = document.getElementsByClassName('mbtn6')[0];
mtriger7 = document.getElementsByClassName('mbtn7')[0];
mtriger8 = document.getElementsByClassName('mbtn8')[0];
//Кнопка +
ptriger = document.getElementsByClassName('pbtn1')[0];
ptriger2 = document.getElementsByClassName('pbtn2')[0];
ptriger3 = document.getElementsByClassName('pbtn3')[0];
ptriger4 = document.getElementsByClassName('pbtn4')[0];
ptriger5 = document.getElementsByClassName('pbtn5')[0];
ptriger6 = document.getElementsByClassName('pbtn6')[0];
ptriger7 = document.getElementsByClassName('pbtn7')[0];
ptriger8 = document.getElementsByClassName('pbtn8')[0];

//Кнопка удалить все
delall = document.getElementsByClassName('delall')[0];
delall.addEventListener('click', () => {
    removeAll();
})



if (mtriger) {
    mtriger.addEventListener('click', () => {
        
        if ((n1 - 1) > 0) {
            n1--;
            updateQuantity(1, n1);
        }else {
            removeItemfromCart(1);

        }
    });
    ptriger.addEventListener('click', () => {
        n1++;
        updateQuantity(1, n1);
    });
}


if (mtriger2) {
    mtriger2.addEventListener('click', () => {
        if ((n2 - 1) > 0) {
            n2--;
            updateQuantity(2, n2);
        } else {
            removeItemfromCart(2);
        }
    });
    ptriger2.addEventListener('click', () => {
        n2++;
        updateQuantity(2, n2);
    });
}

if (mtriger3) {
    mtriger3.addEventListener('click', () => {
        if ((n3 - 1) > 0) {
            n3--;
            updateQuantity(3, n3);
        } else {
            removeItemfromCart(3);
        }
    });
    ptriger3.addEventListener('click', () => {
        n3++;
        updateQuantity(3, n3);
    });
}


if (mtriger4) {
    mtriger4.addEventListener('click', () => {
        if ((n4 - 1) > 0) {
            n4--;
            updateQuantity(4, n4);
        } else {
            removeItemfromCart(4);
        }
    });
    ptriger4.addEventListener('click', () => {
        n4++;
        updateQuantity(4, n4);
    });
}


if (mtriger5) {
    mtriger5.addEventListener('click', () => {
        if ((n5 - 1) > 0) {
            n5--;
            updateQuantity(5, n5);
        } else {
            removeItemfromCart(5);
        }
    });
    ptriger5.addEventListener('click', () => {
        n5++;
        updateQuantity(5, n5);
    });
}


if (mtriger6) {
    mtriger6.addEventListener('click', () => {
        if ((n6 - 1) > 0) {
            n6--;
            updateQuantity(6, n6);
        } else {
            removeItemfromCart(6);
        }
    });
    ptriger6.addEventListener('click', () => {
        n6++;
        updateQuantity(6, n6);
    });
}


if (mtriger7) {
    mtriger7.addEventListener('click', () => {
        if ((n7 - 1) > 0) {
            n7--;
            updateQuantity(7, n7);
        } else {
            removeItemfromCart(7);
        }
    });
    ptriger7.addEventListener('click', () => {
        n7++;
        updateQuantity(7, n7);
    });
}


if (mtriger8) {
    mtriger8.addEventListener('click', () => {
        if ((n8 - 1) > 0) {
            n8--;
            updateQuantity(8, n8);
        } else {
            removeItemfromCart(8);
        }
    });
    ptriger8.addEventListener('click', () => {
        n8++;
        updateQuantity(8, n8);
    });
}

