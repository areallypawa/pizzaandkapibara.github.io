const cartStorage = JSON.parse(localStorage.getItem("products") || "[]"); //Все продукты
const cartStorageCat = JSON.parse(localStorage.getItem("categorys") || "[]"); //все категории
const cartBaner = JSON.parse(localStorage.getItem("banners") || "[]"); //все банеры



//добавляем на страницу
if (cartStorageCat.length) {
  const cartSideCat = document.querySelector(".hear");
  const NavCatside = document.querySelector(".line")
  cartStorageCat.forEach((el) => {
    const { categorya, id } = el;
    // Добавляю категории
    // Create Section(Name of cart)
    const newCardCat = document.createElement('div')
    newCardCat.id = `scrollspyHeading${id}`
    newCardCat.className = `Name_section`;
    newCardCat.innerHTML = `<div class="name">${categorya}</div>`;
    cartSideCat.appendChild(newCardCat);

    // Create navmenu on categorys
    const NavCat = document.createElement('a')
    NavCat.className = 'menu'
    NavCat.href = `#scrollspyHeading${id}`
    NavCat.innerHTML = `${categorya}`
    NavCatside.appendChild(NavCat);

    // Добавляю товары
    // Добавил новый сектор для добавления в него товара
    const sectionP = document.createElement('section')
    sectionP.className = `production${categorya}`;
    cartSideCat.appendChild(sectionP);

    cartStorage.forEach((el) => {
      const { name, price, quantity, id, category, img, about_one, about_sec } = el;
      if (category === categorya) {

        const newCardPhoto = document.createElement('div')
        const newCardInfo = document.createElement('div')

        newCardPhoto.className = `product__photo`;
        newCardInfo.className = `product__info`;

        newCardPhoto.innerHTML = `<div class="photo-container"><div class="photo-main"><div class="controls"><img src="https://i.ibb.co/pzsC5m3/share.png" class="material-icons" alt=""><img src="https://i.ibb.co/CztxcWG/like.png" class="material-icons" alt=""></div><img class="eda" src="${img}" alt="green apple slice"></div></div>`;
        newCardInfo.innerHTML = `<div class="title"><h1>${name}</h1></div><div class="price"><span>${price}</span>₽</div><div class="description"><ul><li>${ about_one }</li><li>${ about_sec }</li></ul></div><button class="buy--btn liveToastBtn1" id="liveToastBtn${id}" name="buy--btn">В КОРЗИНУ</button>`;

        const sectionProduct = document.querySelector(`.production${categorya}`);
        sectionProduct.classList.add('product');

        if (sectionProduct) {
          sectionProduct.appendChild(newCardPhoto);
          sectionProduct.appendChild(newCardInfo);
          // console.log(`добавлен в ${category} -- ${name}`)
        } else {
          console.log("Секция не найдена");
        }

      } else {
        // console.log("Елемент не удовлетворяет условию")
      }
    })
  });
} else {
  console.error()
}
// Подключаю банеры
if (cartBaner.length) {
  const cartBanerSide = document.getElementById('container')
  cartBaner.forEach((el) => {
    const { text, scr } = el;

    const Banner = document.createElement('div')
    Banner.className = 'col-lg-2 col-sm-2 col-2'
    Banner.innerHTML = `<div class="image"><span>${ text }</span><img src="${ scr }" alt="INTeRNeT!"></div>`
    // console.log(Banner)
    // console.log(cartBanerSide)
    cartBanerSide.appendChild(Banner)
  })
  if (cartBaner.length < 6) {
    const STR = document.getElementsByClassName('control')
    STR.className = "hide"
  }
} else {
  console.log('Файл с банерами пустой или не читается!')
}


// Отслеживаю нажатие кнопки 
const buttons = document.getElementsByName("buy--btn")
buttons.forEach(button => {
  button.addEventListener('click', function () {
    var productID = this.id.replace('liveToastBtn', '');// Получаем цифровую часть id кнопки

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)

    // Тост с названием добавленного товара
    const nameItem = getNameItem(productID);
    // console.log(nameItem)

    header.innerText = header.textContent = `${nameItem} уже в корзине!`;
    toastBootstrap.show()
    addItemToCard(productID);
    let count = Quantity(productID)
    count++;
    updateQuantity(productID, count);

  });
});
