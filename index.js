// Task 1
//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));


function formatDate(date) {

    let difference = new Date() - date

    if (difference < 1000) {
        return 'now'
    }

    let seconds = new Date(difference).getSeconds()

    if (difference < 60000) {
        return `${seconds} seconds ago`
    }

    let minutes = new Date(difference).getMinutes()

    if (difference < 3600000) {
        return `${minutes} minutes ago`
    }

    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`

}


// Task 2
// высчитываем сколько секунд осталось до завтра

console.log(`до завтра осталось ${getSecondsToTomorrow()} секунд`)

function getSecondsToTomorrow() {
    let now = new Date()
    let nowInSec = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()
    let dayInSec = 24 * 3600

    return dayInSec - nowInSec
}

// Task 3
// высчитываем сколько сегодня прошло секунд с начала дня

console.log(`с начала дня прошло ${getSecondsToday()} секунд`)

function getSecondsToday() {
    let now = new Date()

    return (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()

}


//Task 4
// возвращаем последний день указанного месяца

console.log(getLastDayOfMonth(2012, 1)) // 29

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month + 1, 0)

    return date.getDate()

}


//Task 5
///Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

let date5 = new Date(2015, 0, 2);

console.log(getDateAgo(date5, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date5, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date5, 365)); // 2, (2 Jan 2014)


function getDateAgo(date, daysAgo) {

    let settedDate = new Date(date)

    settedDate.setDate(settedDate.getDate() - daysAgo)

    return settedDate
}


//Task 6
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log(date); // 1 Mar 2016

//Task 7
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date1 = new Date(2024, 10, 30);
console.log(getWeekDay1(date1));
console.log(getWeekDay2(date1));

function getWeekDay1(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}

// вариант2

function getWeekDay2(date) {


    switch (date.getDay()) {
        case 0:
            return 'ВС';
        case 1:
            return 'ПН';
        case 2:
            return 'ВТ';
        case 3:
            return 'СР';
        case 4:
            return 'ЧТ';
        case 5:
            return 'ПТ';
        case 6:
            return 'СБ';
        default:
            return 'error'
    }

}

//Task 8
// выводим дату в формате дд.мм.гг

function formatDate8(date){

    return date.toLocaleDateString('ua', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    })
}

//вариант 2

function formatDate82(date){
    let data

    if(date.getDate() < 10){
        data = `0${date.getDate()}`
    }

    let month

    if(date.getMonth() < 10){
        month = `0${date.getMonth()+1}`
    }

    let year = date.getFullYear().toString().slice(2,4)

    return `${data}.${month}.${year}`
}

let date8 = new Date(2007, 1, 1)
console.log(formatDate8(date8))
console.log(formatDate82(date8))