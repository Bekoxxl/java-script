alert("Welcome");
var firstName = prompt("Your name:", "");
var surName = prompt("Your surname:", "");
var age = prompt("How old are you:", "");

var birthYear = 2022 - age;
var month = age * 12;
var week = age * 52;
var day = week * 7;
var hour = day * 24;
var secunt = hour * 60;

alert(`Qadirdonim ${firstName} ${surName} siz ${birthYear}-yilda kelib, ${month} oy, ${week} hafta, ${day} kun, ${hour} soatu ${secunt} sekund yashab qoyibszu sizga o'sha gap`);

// console.log(`Qadirdonim ${fristName} ${surName} siz ${brithYear}-yilda kelib, ${month} oy, ${week} hafta, ${day} kun, ${hour} soatu ${secunt} sekund yashab qoyibszu sizga o'sha gap`)