import telebot
from telebot import types

# Токен бота с группы
TOKEN_BotGROUP = '6895427216:AAHUd-VmtQNfR6MB_v32bO9_SQkwOEHXf-g'
bot = telebot.TeleBot(TOKEN_BotGROUP)

# Чекаю нажатие на кнопки
@bot.callback_query_handler(func=lambda call: True)
async def callback_inline(call):
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
























