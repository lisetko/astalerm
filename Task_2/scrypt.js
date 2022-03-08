let getDayInfo = new Date(2022, 2, 8);

let day = getDayInfo.getDay();
let month = getDayInfo.getMonth();
let year = getDayInfo.getFullYear();

let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let weeks = [Math.floor(getDayInfo.getDate() / 7)];


console.log(days[day]+',', weeks.toString(), 'неделя', months[month], year, 'года');



