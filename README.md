<h1 align="left">📍 Дипломная работа "Movies Explorer"</h1>

<div align="left">
  <a href="https://movies-explorer.isakhno.nomoreparties.co/">
    <img width="600" alt="Основной экран приложения" src="https://github.com/IrinaSakhno/movies-explorer-frontend/assets/110684477/db5cd995-3bda-4636-988b-425a883a1152">

  </a>
</div>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#technologies">Стек технологий</a></li>
      <li><a href="#installation">Установка и запуск приложения в локальном репозитории, эксплуатация</a></li>
      <li><a href="#functionality">Функционал</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Данная проектная работа реализована в рамках курса по Веб-разработке от <a href="https://practicum.yandex.ru/">Яндекс Практикума</a>. Проект представляет собой SPA-приложение с адаптивной версткой, написанное на "React" (часть frontend) и "Node" (часть backend), с возможностью регистрации личного кабинета пользователя, поиска и просмотра фильмов, а также сохранения фильмов в избранное.

Проект был написан на "React". Отдельно написана логика серверной части с использованием фреймворка "Express". И в завершение обе части объединены и задеплоены на виртуальную машину, размещенную на <a href="https://cloud.yandex.ru/">Яндекс Облаке</a>.

<b>Ссылки на проект:</b>
<br>
Frontend https://irina-sakhno.students.nomoreparties.sbs/
<br>
Backend https://api.irina-sakhno.students.nomoreparties.sbs/

<a name="technologies"><h2>2. Стек технологий</h2></a>
<span>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Иконка React">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="Иконка React Router">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Иконка 'JavaScript'">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Иконка CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="Иконка HTML5">
  <a href=""><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Иконка 'Express'"></a>
  <a href=""><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Иконка 'Node JS'"></a>
  <a href=""><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="Иконка 'MongoDB'"></a>
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Иконка 'NGINX'">
</span>


<a name="installation"><h2>3. Установка и запуск приложения на локальной машине</h2></a>

1. `git clone https://github.com/IrinaSakhno/movies-explorer-api` - клонировать репозиторий на свое устройство
2. `npm i` - установить зависимости 
3. `npm run dev` - запустить приложение в режиме разработчика в папке `backend` (можно предварительно настроить `порт 3001`)
4. `git clone https://github.com/IrinaSakhno/movies-explorer-frontend.git` - клонировать репозиторий на свое устройство
2. `cd movies-explorer` - перейти в папку movies-explorer
3. `npm i` - установить зависимости 
5. `npm run start` - запустить приложение в режиме разработчика 

<a name="functionality"><h2>4. Функциональность</h2></a>
1. Регистрация и авторизация пользователей
2. Редактирование данных пользователя (с появлением модального окна при успешном изменении данных)
3. Поиск фильмов (есть возможность отсортировать короткометражные фильмы)
4. Добавление фильмов в избранное (и удаление)
5. Прелоадер при поиске фильмов
6. Открытие и закрытие модальных окон (по кнопке, оверлею и клавише "Escape")


<div align="right">(<a href="#summary">к оглавлению</a>)</div>

