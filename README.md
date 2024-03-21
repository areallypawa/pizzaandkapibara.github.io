<p align="center">
      <a href="https://areallypawa.github.io/pizzaandkapibara.github.io/"><img src="https://i.ibb.co/ckS3VTj/image.jpg" alt="image" border="0"></a>
</p>


## :large_blue_diamond: Pizzeria "Pizza and Capybara" school project | Пиццерия "Пицца и Капибара" школьный проект

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: Hello everyone! You now have an almost ready-made project in front of you, the development of which took a lot of effort and time. This is my first big project in the field of IT website creation. Now I will try to briefly describe the essence of the project, its purpose and how it works. The goal of the project is to create an online marketplace for ordering any product on the site and transfer the order data to a convenient environment for order analysis.Using HTML5 and CSS, I made the layout of the site.

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Всем привет! Перед вами сейчас расположен почти готовый проект, на разработку которого ушло не мало сил и времени. Это мой первый большой проект в сфере IT создания веб-сайтов. Сейчас я постараюсь кратко описать суть проекта его цель и то как он работает. Цель проекта - создать онлайн маркетплейс для заказа какого-либо товара на сайте и передать данные заказа в удобную среду для анализа заказа.Используя HTML5 и CSS сделал макет сайта. 

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: The question arose about how to make a basket of goods and the first thing that came to mind was to create a server for downloading goods, but then I would have to study JS frameworks, and there was not much time for this, especially since I did not plan to make more products on the site, this method would only complicate the creation process. After studying JS, I learned about localStorage, which formed the basis for creating a bucket (Then I will return to the discussion of this method). I decided to choose telegram as the medium for processing information, since it is a popular social network in which you can conveniently create a bot. There were also convenient options that also took place in the project: sending an order by e-mail, sending an exel table.

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Встал вопрос о том как сделать корзину товаров и первое что полезло на ум - создание сервера для загрузки товаров, но тогда пришлось бы изучать фреймворки JS, а на это времени особо не было, тем более что я не планировал делать больше количество товаров на сайте, этот способ только усложнял бы процесс создания. После изучения JS я узнал о localStorage, который и лег в основе создания корзины (Далее я еще вернуть к обсуждению данного способа). В качестве среды для обработки информации я решил выбрать телеграм, так как это популярная соц-сеть в которой можно удобно создать бота. Были еще удобные варианты, которые тоже имели место быть в проекте: отправка заказа на e-mail, отправка таблицы exel. :email:

<p align="center">
  <a href="https://ibb.co/HXwNLg7"><img src="https://i.ibb.co/ZN4HRTd/local-storage-1.png" alt="local-storage-1" border="0"></a>
</p>

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: Local storage provides storage for data on an ongoing basis. Data from local storage is not automatically deleted and has no expiration date. This storage was perfect for my requirements, and there were enough videos on how to create a shopping cart on the site using localStorage. After learning the basics of JS, I started searching on YouTube for information on how to create a shopping cart. Unfortunately, most of the videos seemed too sophisticated and incomprehensible to me, I was looking for an easier way to create a shopping cart, but not all videos were useless. I found two videos that helped me create the SIMPLEST SHOPPING CART (The videos are attached below).

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Local storage представляет хранилище для данных на постоянной основе. Данные из local storage автоматически не удаляются и не имеют срока действия. Это хранилище идеально подходило под мои требовая, да и было достаточное количество видео о том, как создать корзину на сайте при помощи LocalStorage. Изучив основу JS я начал искать на ютубе информаию о том, как создать корзину. К сожалению, большинство видео для меня показались слишком замудренными и непонятными, я искал более простой способ для создания корзины, однако не все видео ролики были бесполезными. Я нашел два видео которые помогли мне создать САМУЮ ПРОСТУЮ КОРЗИНУ (Видео прикрепленны ниже).

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: This technology is based on a JSON file that initially stores a list of products. With it, you can not write code for each card, but use a script to make sure that the goods themselves are added! In my project, I did not use this idea because this method is effective when there are 10 types of goods. Next, the script tracks the click on each button on the site and records the click on the individual counter n. In the code you can find a lot of functions, comments to which I tried to write well and I think you can figure out what each of them does. Briefly: When you click on the button, an element from the "products" key (All products) is transferred to the "cart" key. Then, using the function, everything in the "cart" is transferred to a specific column in the table. The final sum is displayed at the bottom of the table, which is calculated by the function. After clicking on the "Send order" button, using the "Axios" module (Link below), an overgrowth is sent to the bot in the telegram, which displays the text in the group chat message.

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: В основе этой технологии - файл JSON в котором изначально хранится список товаров. С помощью него можно не писать код для каждой карточки, а при помощи скрипта сделать так чтобы товары сами добавлялись! В своем проекте я не использовал эту идею так как этот метод эффективен когда товаров от 10 видов. Далее скрипт отслеживает нажатие на каждую кнопку на сайте и записывает нажатие на инживидуальный счетчик n. В коде вы можете найти множество функций, комметарии к которым я постарался хорошо написать и думаю вы сможете раобраться что делает каждая из них. Кратко: При нажатии на кнопку в ключ "cart" переносится элемент из ключа "products" (Все товары). Потом при помощи функции все что находится в "cart" переноситься в определенный столбец таблицы. Снизу таблицы выведена конечная сумма, которая подсчитывается функцией. После нажатия на кнопку "Отправить заказ" при помощи модуля "Axios" (Ссылка снизу) посылается зарос на бота в телеграмме который выводит текст в сообщении чата группы.

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: This is what it looks like in a telegram:
>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Вот как это выглядит в телеграмме:
<p align="center">
            <img src="https://i.ibb.co/BVchtwk/2024-03-21-201618.png" alt="2024-03-21-201618" height="400px" border="0">
            <img src="https://i.ibb.co/L0VQVPt/image.png" alt="image" height="400px" border="0">

</p>

## :large_blue_diamond:  :bookmark_tabs: Documentation - Video :movie_camera: | :bookmark_tabs: Документация - Видео :movie_camera:

> [!TIP]
> :ru: Видео частично помогут решить основные задачи.

- [RU: :movie_camera: Курс HTML + CSS, который я прошел перед созданием макета сайта](https://www.youtube.com/watch?v=Bmtu5eNnjK8)
- [RU: :movie_camera: Корзина JS на чистом DOM](https://www.youtube.com/watch?v=DkJMklGYsHE&list=LL&index=15&t=10s)
- [US: :movie_camera: Local storage shopping cart. | Insert, update, remove products from the browser's local storage.](https://www.youtube.com/watch?v=pRkHOD_nkH4&list=LL&index=4&t=172s)
- > Видео крайне полезно! Оно предоставляет почти готовое решения которое я подкрутил.
- [RU: :movie_camera: Отправляем html форму с сайта на telegram + с документом на JavaScript](https://www.youtube.com/watch?v=RviYQrNdDok&list=LL&index=3&t=111s)
- > Мужик отлично рассказал о Axios и как им пользоваться.

## :large_blue_diamond: :mag_right: Services - Libraries :books: | :mag_right: Сервисы - Библиотеки :books:

> [!NOTE]
> :ru: Сервисы помогут в создании проекта.

- [Bootstrap :crystal_ball:](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Colors :rainbow:](https://coolors.co/d30c7b-efabff-012622-0094c6-e3b505)
- [Favicon :trophy:](https://favicon.io/favicon-generator/)
- [ChatGPT :bookmark:](https://chat-gpt.org/chat)

## :large_blue_diamond: About developers :dizzy: | О разработчиках :dizzy:

- [ :star: Developer - areallypawa ](https://github.com/areallypawa)
- [ :star2: A fellow assistant - orewaee ](https://github.com/orewaee)

## :large_blue_diamond: License | Лицензия
Project Pizzeria "Pizza and Capybara" is distributed under the MIT license
