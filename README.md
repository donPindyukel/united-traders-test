`npm i`

`npm start` - запуск на 3000 порту

# Тестовое задание на должность Frontend Developer
## Цель
Написать клавиатурный тренажер на стеке React+Redux+etc. 

## Состояния приложения
* Начало тренировки – пользователь видит кнопку “Старт”
* Тренировка https://drive.google.com/open?id=15y2KkW9OIHI0i7F5nF1GrS1QPlXwzSGN
* Отображение результатов – пользователь видит: кол-во ошибок, затраченное время, общее кол-во символов в тренировке, кнопку «Заново» для повторной тренировки


## Как это работает

* Пользователь загружает приложение, приложение находится в состоянии 1
* После нажатия на кнопку “Старт”, приложение выводит на экран случайную строку, и запускает таймер (состояние 2)
* В этот момент приложение ожидает от пользователя ввода символа с клавиатуры
* Если введенный символ равен первому символу в строке
* Уменьшаем строку на один символ ( фывапролдж → ывапролдж)
* Обновляем значения счетчиков
* В случае если этот символ был последним – показываем результаты тренировки, и кнопку “Заново” (состояние 3)
* Если введенный символ неверный
* Обновляем значения счетчиков
* Подсвечиваем первый символ строки красным цветом
* На выполнение тренировки пользователю отводится одна минута, в случае если пользователь не успевает пройти тренировку – заканчиваем тренировку, показываем результат (состояние 3)
* Нажатие на кнопку “Закончить” приводит к аналогичным последствиям (состояние 3)

## Примечания
* Готовый результат необходимо выложить на github и прислать нам ссылку
* Приложение должно собираться с помощью webpack, желательно использовать кастомную сборку
* Внешний вид приложения не очень важен, однако оно должно быть написанно с оглядкой на то, что его будет верстать верстальщик(либо программист который не очень хорошо разбирается в React)