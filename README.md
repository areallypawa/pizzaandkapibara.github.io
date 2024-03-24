<p align="center">
      <a href="https://areallypawa.github.io/pizzaandkapibara.github.io/"><img src="https://i.ibb.co/ckS3VTj/image.jpg" alt="image" border="0"></a>
</p>


## :large_blue_diamond: Pizzeria "Pizza and Capybara" school project | Пиццерия "Пицца и Капибара" школьный проект

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: Hello everyone! You now have an almost ready-made project in front of you, the development of which took a lot of effort and time. This is my first big project in the field of IT website creation. Now I will try to briefly describe the essence of the project, its purpose and how it works. The goal of the project is to create an online marketplace for ordering any product on the site and transfer the order data to a convenient environment for order analysis.Using HTML5 and CSS, I made the layout of the site.

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Всем привет! Перед вами сейчас расположен почти готовый проект, на разработку которого ушло не мало сил и времени. Это мой первый большой проект в сфере IT создания веб-сайтов. Сейчас я постараюсь кратко описать суть проекта его цель и то как он работает. Цель проекта - создать онлайн маркетплейс для заказа какого-либо товара на сайте и передать данные заказа в удобную среду для анализа заказа.Используя HTML5 и CSS сделал макет сайта. 

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: The question arose about how to make a basket of goods and the first thing that came to mind was to create a server for downloading goods, but then I would have to study JS frameworks, and there was not much time for this, especially since I did not plan to make more products on the site, this method would only complicate the creation process. After studying JS, I learned about localStorage, which formed the basis for creating a bucket (Then I will return to the discussion of this method). I decided to choose telegram as the medium for processing information, since it is a popular social network in which you can conveniently create a bot. There were also convenient options that also took place in the project: sending an order by e-mail, sending an exel table. :email:


>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Встал вопрос о том как сделать корзину товаров и первое что полезло на ум - создание сервера для загрузки товаров, но тогда пришлось бы изучать фреймворки JS, а на это времени особо не было, тем более что я не планировал делать больше количество товаров на сайте, этот способ только усложнял бы процесс создания. После изучения JS я узнал о localStorage, который и лег в основе создания корзины (Далее я еще вернуть к обсуждению данного способа). В качестве среды для обработки информации я решил выбрать телеграм, так как это популярная соц-сеть в которой можно удобно создать бота. Были еще удобные варианты, которые тоже имели место быть в проекте: отправка заказа на e-mail, отправка таблицы exel. :email:

<p align="center">
  <a href="https://ibb.co/HXwNLg7"><img src="https://i.ibb.co/ZN4HRTd/local-storage-1.png" alt="local-storage-1" border="0"></a>
</p>

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: Local storage provides storage for data on an ongoing basis. Data from local storage is not automatically deleted and has no expiration date. This storage was perfect for my requirements, and there were enough videos on how to create a shopping cart on the site using localStorage. After learning the basics of JS, I started searching on YouTube for information on how to create a shopping cart. Unfortunately, most of the videos seemed too sophisticated and incomprehensible to me, I was looking for an easier way to create a shopping cart, but not all videos were useless. I found two videos that helped me create the SIMPLEST SHOPPING CART (The videos are attached below).

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Local storage представляет хранилище для данных на постоянной основе. Данные из local storage автоматически не удаляются и не имеют срока действия. Это хранилище идеально подходило под мои требования, да и было достаточное количество видео о том, как создать корзину на сайте при помощи LocalStorage. Изучив основу JS я начал искать на ютубе информаию о том, как создать корзину. К сожалению, большинство видео для меня показались слишком замудренными и непонятными, я искал более простой способ для создания корзины, однако не все видео ролики были бесполезными. Я нашел два видео которые помогли мне создать САМУЮ ПРОСТУЮ КОРЗИНУ (Видео прикрепленны ниже).

<p align='center'>
      <img src="https://i.ibb.co/64MdGkn/2024-03-24-000745.png" alt="2024-03-24-000745" height="200px" border="0">
</p>


&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: After I made a shopping cart that automatically adds products, I started thinking about how to automatically add new products to the page. The idea is exactly the same - to parse information from a JSON file into local Storage and upload elements to the page from there. Yes, the method may seem strange, slow and impractical, but it was the best thing that came to my mind. Below are examples of the contents of JSON files.

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: После того, как я сделал корзину, в которую автоматически добавляются товары, начал думать о том, как автоматически добавлять на страницу новые товары. Идея точно такая же - парсить информацию из JSON файла в local Storage и уже от туда подгружать элементы на страницу. Да, метод может показаться странным, медленным и нецелесообразным, но это было лучшее, что пришло мне на ум. Ниже приведены примеры содержания JSON файлов.

:small_orange_diamond: BANNERS - Advertisement :bookmark: / Реклама - Банеры :bookmark:
```json
[
    {
        "text": "Турнир по игре<br>Dota2 на купон!&#127942;",
        "scr": "https://i.ibb.co/fGTdYyY/image.jpg"
    },
    ...
[
```
:small_orange_diamond: Categorys :white_check_mark: / Категории :white_check_mark:
```json
[
    {
        "categorya": "Пицца",
        "id": 1
    },
    ...
[
```
:small_orange_diamond: Cards :outbox_tray: / Карточки товара :outbox_tray:
```json
[
    {
        "id": 1,
        "name": "Пицца 'Сплошной сыр'",
        "img": "https://i.ibb.co/C9gyzf2/PIZZA-SIR.png",
        "price": 499,
        "category": "Пицца",
        "quantity": 0,
        "about_one": "30 см, традиционное тесто, 470 г" ,
        "about_sec": "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо, Традиционное тесто"
    },
    ...
[
```

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: This technology is based on a JSON file that initially stores a list of products, advertising banners, and categories. With it, you can not write code for each card, but use a script to make products, banners and categories add themselves! Next, the script tracks the click on each button on the site and records the click on the individual counter n. In the code you can find a lot of functions, comments to which I tried to write well and I think you can figure out what each of them does. Briefly: When you click on the button, an element from the "products" key (All products) is transferred to the "cart" key. Then, using the function, everything in the "cart" is transferred to a specific column in the table. The final sum is displayed at the bottom of the table, which is calculated by the function. After clicking on the "Send order" button, using the "Axios" module (Link below), an overgrowth is sent to the bot in the telegram, which displays the text in the group chat message.

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: В основе этой технологии - файл JSON в котором изначально хранится список товаров, банеры рекламы, категории. С помощью него можно не писать код для каждой карточки, а при помощи скрипта сделать так чтобы товары, банера и категории добавлялись сами! Далее скрипт отслеживает нажатие на каждую кнопку на сайте и записывает нажатие на индивидуальный счетчик n. В коде вы можете найти множество функций, комметарии к которым я постарался хорошо написать и думаю вы сможете раобраться что делает каждая из них. Кратко: При нажатии на кнопку в ключ "cart" переносится элемент из ключа "products" (Все товары). Потом при помощи функции все что находится в "cart" переноситься в определенный столбец таблицы. Снизу таблицы выведена конечная сумма, которая подсчитывается функцией. После нажатия на кнопку "Отправить заказ" при помощи модуля "Axios" (Ссылка снизу) посылается зарос на бота в телеграмме который выводит текст в сообщении чата группы.

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: This is what it looks like in a telegram:
>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Вот как это выглядит в телеграмме:
<p align="center">
            <img src="https://i.ibb.co/BVchtwk/2024-03-21-201618.png" alt="2024-03-21-201618" height="400px" border="0">
            <img src="https://i.ibb.co/L0VQVPt/image.png" alt="image" height="400px" border="0">
</p>

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: I have a new task in front of me - the functionality of the bot in the telegram. I have never worked with bots in telegram before, only in online constructors. Realizing that the designer's site was not enough for me, I started writing a bot in Python. Why Python? Because it is a convenient and understandable programming language that I have known for 2 years. After studying the material that is needed to create bots in telegram using the pyTelegramBotAPI library, I wrote two bots. The first is the identifier. The bot can send a link to the group if the person sends the correct password. The second one is a bot for the group. It also monitors the pressing of the "Confirm" and "Delete" buttons. A piece of code from the second bot:

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Передо мной встала новая задача - функционал бота в телеграмме. Прежде я никогда не работал с ботами в телеграмме, только в онлайн-конструкторах. Поняв, что сайта конструктора мне не хватит, я принялся писать бота на Python. Почему Python? Потому что удобный и для меня понятный язык программирования который я знаю уже 2 года. Изучив материал который нужен для создания ботов в телеграмме при помощи библиотеки pyTelegramBotAPI, написал двух ботов. Первый - аунтификатор. Бот может прислать ссылку на группу, если человек отправит верный пароль. Второй - бот для группы. Он же, отслеживает нажатие кнопок "Подтвердить" и  "Удалить". Частица кода со второго бота:

:small_orange_diamond: A bot that tracks button clicks in a group \ Бот отслеживающий нажатие на кнопки в группе
```python
import telebot
from telebot import types

# Токен бота с группы
TOKEN_BotGROUP = '6895427216:AAHUd-VmtQNfR6MB_v32bO9_SQkwOEHXf-g'
bot = telebot.TeleBot(TOKEN_BotGROUP)

# Чекаю нажатие на кнопки
@bot.callback_query_handler(func=lambda call: True)
def callback_inline(call):
    try:
        if call.message:
            # Если подтвердить то закрепляю сообщение
            if call.data == 'accept':
                bot.pin_chat_message(call.message.chat.id, call.message.message_id)       

            # Если удалить - удаляю сообщение
            elif call.data == 'delete':
                bot.delete_message(call.message.chat.id, call.message.message_id)
                
    except Exception as e:
        print(repr(e))

bot.polling(none_stop=True)


```
<p align="center">
      <img src="https://i.ibb.co/w6Ljx9r/image.png" alt="image" height="400px" border="0">
      <img src="https://i.ibb.co/3p6wY0V/image.png" alt="image" height="400px" border="0">
</p>
&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: Bots are written, but how do you keep them running on an ongoing basis? One of the videos below helped me find the answer. Hosting. After studying 2-5 hosting sites, I put forward the best one. replit.com - a site where you can run your code, and which may include a bot for some time. The advantages of this service:

- [x] It takes no more than 2 minutes to turn on the bot :clock9:
- [x] The working time of the bot is from 40 minutes (I don't know for sure yet) :clock12:
- [x] There is a mobile application :shipit:

<img src="https://i.ibb.co/rZGJsRd/2024-03-24-002607.png" alt="2024-03-24-002607" border="0">

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Боты написаны, но как поддерживать их работу на постоянной основе? Один из видеороликов ниже помог мне найти ответ. Хостинг. После изучения 2-5 хостингов я выдвинул лучший. replit.com - сайт на котором можно запускать свой код, и который может на протяжении некоторого времени включать бота. Плюсы эого сервиса: 


- [x] Включить бота занимает не более 2х минут :clock9:
- [x] Время работы бота от 40 минут (Точно не знаю пока что) :clock12:
- [x] Есть мобльное приложение :shipit:

<p align="center">    
<img src="https://i.ibb.co/B2t2pnq/2024-03-24-00-56-21.png" alt="2024-03-24-00-56-21" height="500px" border="0">
</p>

&nbsp;&nbsp;&nbsp;&nbsp; :small_blue_diamond: Bots can be uploaded to a full-fledged 24/7 hosting, but it's free, a good 24-hour host is currently impossible. As a result of my work, I got: A working website hosted on Github, Bots in telegram, and of course invaluable experience working with HTML, CSS, JAVASCRIPT (Local Storage), PYTHON (Bots).

>&nbsp;&nbsp;&nbsp;&nbsp; :ru: Ботов можно залить на полноценный 24/7 хостинг, но нати бесплатный, хороший круглосуточный хост на данный момент невозможно. В результате работы я получил: Рабочий сайт на хостинге Github, Ботов в телеграмме, и конечно же бесценный опыт работы с HTML, CSS, JAVASCRIPT (Local Storage), PYTHON (Bots).

  ![HTML5](https://img.shields.io/badge/-HTML-090909?style=for-the-badge&logo=html5&logoColor=orange)
  ![CSS](https://img.shields.io/badge/-CSS-090909?style=for-the-badge&logo=css3&logoColor=blue)
  ![JavaScript](https://img.shields.io/badge/-JavaScript-090909?style=for-the-badge&logo=JavaScript&logoColor=E9D54D)
  ![Python](https://img.shields.io/badge/-Python-090909?style=for-the-badge&logo=python&logoColor=green)

## :large_blue_diamond:  :bookmark_tabs: Documentation - Video :movie_camera: | :bookmark_tabs: Документация - Видео :movie_camera:

> [!TIP]
> :ru: Видео частично помогут решить основные задачи.

- [RU: :movie_camera: Курс HTML + CSS, который я прошел перед созданием макета сайта](https://www.youtube.com/watch?v=Bmtu5eNnjK8)
- [RU: :movie_camera: Корзина JS на чистом DOM](https://www.youtube.com/watch?v=DkJMklGYsHE&list=LL&index=15&t=10s)
- [US: :movie_camera: Local storage shopping cart. | Insert, update, remove products from the browser's local storage.](https://www.youtube.com/watch?v=pRkHOD_nkH4&list=LL&index=4&t=172s)
- > Видео крайне полезно! Оно предоставляет почти готовое решения которое я подкрутил.
- [RU: :movie_camera: Отправляем html форму с сайта на telegram + с документом на JavaScript](https://www.youtube.com/watch?v=RviYQrNdDok&list=LL&index=3&t=111s)
- > Мужик отлично рассказал о Axios и как им пользоваться.
- [RU: :movie_camera: Пишем TELEGRAM бота на Python](https://www.youtube.com/watch?v=M8fhrtvedHA&t=600s)
- > Почти готовый ТГ бот
- [RU: :movie_camera: БЕСПЛАТНЫЙ 24/7 ХОСТИНГ ДЛЯ БОТА ДИСКОРД! JavaScript + Python! .js + .py](https://www.youtube.com/watch?v=8k19HcVC90Y&t=837s)
- > Хостинг

## :large_blue_diamond: :mag_right: Services - Libraries :books: | :mag_right: Сервисы - Библиотеки :books:

> [!NOTE]
> :ru: Сервисы помогут в создании проекта.

- [Bootstrap :crystal_ball:](https://getbootstrap.com/docs/5.3/components/buttons/)
- [IMGBB :trophy:](https://ibb.co/album/M97Dbv)
- [Colors :rainbow:](https://coolors.co/d30c7b-efabff-012622-0094c6-e3b505)
- [Favicon :trophy:](https://favicon.io/favicon-generator/)
- [Replit :crystal_ball:](https://replit.com)
- [ChatGPT :bookmark:](https://chat-gpt.org/chat)

## :large_blue_diamond: About developers :dizzy: | О разработчиках :dizzy:

- [ :star: Developer - areallypawa ](https://github.com/areallypawa)
- [ :star2: A fellow assistant - orewaee ](https://github.com/orewaee)
- [ :star2: A fellow assistant - IlyaViz ](https://github.com/IlyaViz)

## :large_blue_diamond: License | Лицензия
Project Pizzeria "Pizza and Capybara" is distributed under the MIT license
