const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
var header = document.getElementById("header23")



fetch("storage.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    localStorage.setItem("products", JSON.stringify(data));
    if(!localStorage.getItem("cart")){
        localStorage.setItem("cart", "[]");

    }
});

let products = JSON.parse(localStorage.getItem("products")); //Все продукты 
let cart = JSON.parse(localStorage.getItem("cart")); //все товары в корзине
// const cards = document.querySelectorAll(".product__info")








//Функция добавления в корзину

function addItemToCard(productId){
    let product = products.find(function(product){
        return product.id == productId;
    });

    if(cart.lenght == 0){
        cart.push(product);
    }else{
        let res = cart.find(element => element.id == productId);
        if(res == undefined){
            cart.push(product);
        }
    }   
    
    localStorage.setItem("cart", JSON.stringify(cart));
}


function removeItemfromCart(productId){
    let temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));

}

function count() {
    const display = document.getElementById("count")
    display.innerHTML = cart.length
}
count();

function updateQuantity(productId, quantity){
    for(let product of cart){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // updateDisplay(productId);
    //Обновляю дисплей
    const display = document.getElementById("count")
    if(display) {
        count();
    }else {
        console.log('Нема')
    }
}



let n1 = 0
let n2 = 0
let n3 = 0
let n4 = 0
let n5 = 0
let n6 = 0
let n7 = 0
let n8 = 0

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        header.innerText = header.textContent = "Пицца 'Сплошной сыр' добавлена в корзину!";
        toastBootstrap.show()
        addItemToCard(1);
        n1++;
        updateQuantity(1, n1);
    })
}

const toastTrigger2 = document.getElementById('liveToastBtn2')

if (toastTrigger2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger2.addEventListener('click', () => {
        header.innerText = header.textContent = "Пицца 'Карбонара' добавлена в корзину!";
        toastBootstrap.show()
        addItemToCard(2);
        n2++;
        updateQuantity(2, n2);
    })
}

const toastTrigger3 = document.getElementById('liveToastBtn3')

if (toastTrigger3) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger3.addEventListener('click', () => {
        header.innerText = header.textContent = "Пирог 'Ветчина и сыр'добавлен в корзину!";
        toastBootstrap.show()
        addItemToCard(3);
        n3++;
        updateQuantity(3, n3);
    })
}
const toastTrigger4 = document.getElementById('liveToastBtn4')

if (toastTrigger4) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger4.addEventListener('click', () => {
        header.innerText = header.textContent = "Пирог 'Чоризо барбекю' добавлен в корзину!";
        toastBootstrap.show()
        addItemToCard(4);
        n4++;
        updateQuantity(4, n4);
    })
}
const toastTrigger5 = document.getElementById('liveToastBtn5')

if (toastTrigger5) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger5.addEventListener('click', () => {
        header.innerText = header.textContent = "Комбо от Смешариков добавлено в корзину!";
        toastBootstrap.show()
        addItemToCard(5);
        n5++;
        updateQuantity(5, n5);
    })
}
const toastTrigger6 = document.getElementById('liveToastBtn6')

if (toastTrigger6) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger6.addEventListener('click', () => {
        header.innerText = header.textContent = "Комбо 'Всего по немногу' добавлено в корзину!";
        toastBootstrap.show()
        addItemToCard(6);
        n6++;
        updateQuantity(6, n6);
    })
}
const toastTrigger7 = document.getElementById('liveToastBtn7')

if (toastTrigger7) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger7.addEventListener('click', () => {
        header.innerText = header.textContent = "Какао добавлено в корзину!";
        toastBootstrap.show()
        addItemToCard(7);
        n7++;
        updateQuantity(7, n7);
    })
}
const toastTrigger8 = document.getElementById('liveToastBtn8')

if (toastTrigger8) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger8.addEventListener('click', () => {
        header.innerText = header.textContent = "Таежный чай, 10 сашетов добавлен в корзину!";
        toastBootstrap.show()
        addItemToCard(8);
        n8++;
        updateQuantity(8, n8);
    })
}















