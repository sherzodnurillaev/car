// Задание 1 
/*
Конечно! Вот простое домашнее задание для начинающих учеников по JavaScript на тему "Объекты и их методы без использования DOM":⸻Тема: Знакомство с объектами в JavaScriptЦель: Понять основы работы с объектами в JavaScript и их методами.Задания:Создайте объект car, представляющий автомобиль, с полями:brand (марка автомобиля)model (модель автомобиля)year (год выпуска)color (цвет автомобиля)Выведите в консоль информацию о созданном автомобиле в формате "Марка: <brand>, Модель: <model>, Год: <year>, Цвет: <color>".Добавьте метод start, который выводит в консоль сообщение о запуске двигателя автомобиля.Добавьте метод stop, который выводит в консоль сообщение о остановке двигателя автомобиля.Создайте еще один объект person, представляющий водителя, с полями:name (имя водителя)age (возраст водителя)license (имеет ли водитель права на вождение)Выведите в консоль информацию о водителе в формате "Имя: <name>, Возраст: <age>, Права: <license>".Добавьте метод drive, который принимает объект car в качестве аргумента и, если водитель имеет права, выводит в консоль сообщение о начале поездки, иначе сообщение о том, что водитель не имеет прав.Добавьте метод park, который выводит в консоль сообщение о припарковке автомобиля.Дополнительное задание:Создайте несколько объектов car и person и проведите тестирование всех методов.⸻Это задание позволит начинающим ученикам понять основы работы с объектами в JavaScript и их методами без использования DOM.
*/

let car = {
    spark: {
    brang: 'Spark',
    model: 'Chevrole',
    year: 2024,
    color: 'Silver',
    },
    nexia: {
    brang: 'Nexia',
    model: 'Ravon',
    year: 2021,
    color: 'Black',
    },
    malibu: {
    brang: 'Malibu',
    model: 'Chevrole',
    year: 2020,
    color: 'White',
    }
}

let person = {
    sherzod: {
        name: 'Sherzod',
        age: 20,
        license: true,
    },
    akhmad: {
        name: 'Akhmad',
        age: 16,
        license: 'He is young'
    },
    farrukh: {
        name: 'Farrukh',
        age: 18,
        license: false,
    },
    daler: {
        name: 'Daler',
        age: 23,
        license: true,
    },
}

function drive(car, person) {
    console.log(car, person);
    let motor = prompt('Двигатель запушен, чтобы продолжать действие напишите (start), если хотите закончить процесс вы можете в любое время написать (stop) и закончить игру! Если кроме start и stop написать рандомное слово, в противном случае программа запустит бесконечный цикл и ваш браузер зависнет!').toLowerCase().trim()

    if (motor === 'start') {
        let dri = prompt('Выберите водилу ( Sherzod, Akhmad, Farrukh, Daler )').toLowerCase().trim()
        if (person[dri]) {
            alert(`Вы выбрали ${person[dri].name}`)
            if (person[dri].license === true) {
                alert(`Вы начали ехать с ${person[dri].name}'ом`)
                let nextCar = prompt(`Выберите машину (Malibu, Nexia, Spark)`).toLowerCase().trim()
                if (car[nextCar]) {
                    alert(`Вы выбрали ${car[nextCar].brang}`)
                    alert(`Ваша машина ${car[nextCar].brang} ваш водитель ${person[dri].name}, Счастливой поездки`)
                }
            } else if (person[dri].age < 18) {
                alert(`Вы не можете ехать с ${person[dri].name}'ом так как он еще молодой`) 
            } else if (person[dri].license === false) {
                alert(`Вы не можете ехать с ${person[dri].name}'ом так как у него нет водительских прав`)
            }
        } else if (dri != person) {
            alert(`Такого водителя нет`)
        }
    } else if (motor === 'stop') {
        alert('Двигатель остановлен так как вы написали (stop)')
    } else {
        alert('Запушен бесконечный цикл')
        for (let i = 0; i >= 0; i++) {
            console.log(i);
        }
    }

}

drive(car, person) 
