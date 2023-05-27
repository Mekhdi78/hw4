//  task 1 

let name = 'Alex'
let money = 10000
let account = 7777


let names = prompt('как вас зовут?').toLocaleLowerCase().trim()
if (names === 'alex') {
    schot = prompt('Номер счета?')
} else {
    alert("Пользователь не найден, досвидули.")
}
if (schot === '7777') {
    obnal = +prompt("Сколько обналичить?")
} else {
    alert("акк не найденен")
}
if (obnal >= 1 && obnal <= 10000) {
    otlichno = alert('все отлично')
    alert('вы сняли ' + obnal)
    alert('осталось ' + (10000 - obnal))
} else {
    alert('недостаточно средств')
}




// task 2

let moneys = 100

let namess = prompt("what is your name?").toLocaleLowerCase().trim()
if(namess.charAt() === 'a'){
   age = prompt("how old are you?")
}else{
    alert('get out')
}
if(age >= 20 && age <=40){
   moneys = prompt("how much money?")
}else{
    alert('get out')
}
if(moneys >= 100){
   people = prompt('how much of you are there?')
}else{
    alert('get out')
}if(people <= 50){
    alert('welcome')
}