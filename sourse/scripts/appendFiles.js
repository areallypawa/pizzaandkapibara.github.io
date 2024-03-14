const cartStorage = JSON.parse(localStorage.getItem("products") || "[]"); //Все продукты
const cartStorageCat = JSON.parse(localStorage.getItem("categorys") || "[]"); //все категории





//добавляем на страницу
if (cartStorageCat.length) {
  const cartSideCat = document.querySelector(".hear");
  const NavCatside = document.querySelector(".line")
  cartStorageCat.forEach((el) => {
    const { categorya, id } = el;
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
        newCardInfo.innerHTML = `<div class="title"><h1>${name}</h1></div><div class="price"><span>${price}</span>₽</div><div class="description"><ul><li>${ about_one }</li><li>${ about_sec }</li></ul></div><button class="buy--btn liveToastBtn1" id="liveToastBtn${id}">В КОРЗИНУ</button>`;

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

// Отслеживаю нажатие кнопки 
const buttons = document.querySelectorAll('button')
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
