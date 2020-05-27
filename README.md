# Тестовое задание для 'quarta' "TODO"


### Использованный стек:

- Python3
- JavaScript
- Django Rest Framework
- Vue.js
- MaterializeCSS
- SQLite3
- Git


#### Установка:

```sh
$ git clone https://github.com/hsolo0999/test_TODO.git
$ cd test_TODO/back
$ pip install -r requirements.txt
$ cd ../front
$ npm i
```

#### Запуск:

```sh
$ cd test_TODO/back
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
$ cd ../front
$ npm run serve
```
В браузере перейти по http://127.0.0.1:8080/

#### Приложение имеет 2 страницы:

- Форма создания дела
- Список дел

#### Для создания дела заполните форму:

- Заголовок
- дату когда нужно сделать
- Описание

На странице со списком дел, при клике по галочке дело примет статус "Завешено"