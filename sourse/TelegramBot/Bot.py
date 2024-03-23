import telebot
from telebot import types

# Токен бота аунтификатора, Ссылка на ТГ группу, Пароль
TOKEN_AUTH = '7138098721:AAEcj8rRmblV7Ajm8KpjE2TC_1Em8Agu5e8' # BotToken
CHANNEL_URL = 'https://t.me/+ClquHc5npRsxMzNi'
PASSWORD = '1234'

bot = telebot.TeleBot(TOKEN_AUTH)

# Слушаю команду СТАРТ
@bot.message_handler(commands=['start'])
async def welcome(message):

    # Создаю кнопки
    markup = types.InlineKeyboardMarkup(row_width=2)
    item1 = types.InlineKeyboardButton('Войти', callback_data='password')
    item2 = types.InlineKeyboardButton('Заказать!', callback_data='web', url="https://areallypawa.github.io/pizzaandkapibara.github.io/index.html")
    markup.add(item1, item2)

    # Добавляю стикер
    stiker = open("sourse\TelegramBot\Configs\welcome.tgs", 'rb')
    bot.send_sticker(message.chat.id, stiker)

    # Отправляю сообщение
    bot.send_message(message.chat.id, "Добро пожаловать, {0.first_name}!\nЯ - <b>{1.first_name}</b>".format(message.from_user, bot.get_me()), 
        parse_mode='html', reply_markup=markup)

# Чекаю нажатие на кнопку
@bot.callback_query_handler(func=lambda call: True)
async def callback_inline(call):
    try:
        if call.message:
            # Если нажали на кнопку ВОЙТИ
            if call.data == 'password':

                # Создаю кнопку Телеграм Группы
                keyboard = types.InlineKeyboardMarkup(row_width=1)
                url_btn = types.InlineKeyboardButton(text='Группа TG', url=CHANNEL_URL)
                keyboard.add(url_btn)

                # Спрашиваю пароль
                bot.send_message(call.message.chat.id, "Введите пароль:")

                # Слушаю ответ
                @bot.message_handler(content_types=['text'])
                def lalala(message):
                    # Если правильный то отправляю ссылку на ТГ группу
                    if message.text == PASSWORD:
                        # STICKER 1
                        stiker = open("sourse\TelegramBot\Configs\sticker2.webp", 'rb')
                        bot.send_sticker(message.chat.id, stiker)

                        bot.send_message(call.message.chat.id, 'Успешная авторизация!', reply_markup=keyboard)
                    # Если пароль не подходит, оповещаю об этом
                    else:
                        # STICKER 2
                        stiker = open("sourse\TelegramBot\Configs\sticker.webm", 'rb')
                        bot.send_sticker(message.chat.id, stiker)

                        bot.send_message(call.message.chat.id, 'Пароль неверный!')

            # Удалить кнопки после нажатия
            #bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text="Добро пожаловать, {0.first_name}!\nЯ - <b>{1.first_name}</b>".format(call.from_user, bot.get_me()), 
          #parse_mode='html', reply_markup=None)
                
    except Exception as e:
        print(repr(e))

bot.polling(none_stop=True)