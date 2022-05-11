// a = 1
// b = "2"
// x = 1 + b
// console.log(x);


//*** Nested if
// x = prompt("Enter value of x")
// y = 20
// z = 30
// if(x < y){
//     if(y == 30){
//         console.log("You won")
//     }
//     else if(z > y){
//         console.log("You won")
//     }
// }

// for(i = 0; i < 3; i++){
//     for(j = 0; j < 3;j++){
//         document.write(i + " is " + j+ "<br>")
//     }
// }

// var word = "civiv"
// var check = ""
// for(i = word.length-1;i >= 0; i--){
//     check += word[i]
// }
// if(word === check){
//     console.log(word + " is palindrome word")
// }

// var val1 = +prompt("Enter your 1st value")
// var val2 = +prompt("Enter your 2nd value")
// var sign = prompt("Enter your sign")
// console.log(val1+sign+val2)
// if(sign == '+'){
//     alert(val1+val2)
// }
// else if(sign == '-'){
//     alert(val1-val2)
// }
// else if(sign == '/'){
//     alert(val1/val2)
// }
// else if(sign == '*'){
//     alert(val1*val2)
// }

// var equ = 2+2
//  for (var i = 0;i <equ.length; i++){
//      if
//  }

//******* Class # 13

// for(i = 1; i <= 100 ; i += 10){
//     for(j = i; j < i + 10;j++){
//         document.write(" "+j+"\t");
//         console.log(j + "\n ")
//     }
//     document.write("<br>");
//     // console.log("\n")

// }

// *** chainging case
// var city = prompt("Enter city name")
// city = city.toLocaleLowerCase()
// var city_array = ["Karachi","Lahore","Mltan"]
//  for(i=0; i<city_array.length; i++){
//      if(city === city_array[i].toLocaleLowerCase()){
//          console.log(city + " is a city");
//          break
//      }
//      else{
//          console.log(city +" is NOT");
//      }
//  }

// checking specific letter or word
// var word = prompt("Enter Your word")
// for(i = 0; i < word.length;i++){
//     if(word.slice(i,i+1) === "  "){
//         console.log("Word  Found")
//         break
//     }
//     else{
//         console.log("Word not found")
//     }
// }
// x = prompt("GG")
// console.log(x)


// checking & replacig in patagraph
// text = "Harry famous potter is a famous movies and book series"
// for(i = 0; i < text.length; i++){
//     if(text.slice(i,i+6) === "famous"){
//         text = text.slice(0,i) + "Very good" + text.slice(i + 6)
//     }
// }
// console.log(text);


// checking & replacig in patagraph by index of

// text = "Harry potter is a famous potter movies and book series"
// replaceIndex  = text.indexOf("potter")
// replace = "Bhai"
// beforeReplace = text.slice(0,replaceIndex)
// afterReplace  = text.slice(replaceIndex+6)
// console.log(beforeReplace+replace+afterReplace)

// finding a character at location
//  var x = "Ibrahim"
//  console.log(x.charAt(2))


// Replacing string

// text = "Harry potter is a famous potter movies and book series"
// var text_rep = text.replace("potter","BHAI")
// console.log(text_rep);


// // Replacing string GLOBAL

// text = "Harry potter is a famous potter movies and book series"
// var text_rep = text.replace(  /potter/g,"BHAI")
// console.log(text_rep);

// x = 1.1
// y = 1.5
// z = 1.9

// // Math.round
// console.log(x+" round to " + Math.round(x));
// console.log(y+" round to " + Math.round(y));
// console.log(z+" round to " + Math.round(z));


// Math.ceil
// console.log(x+" ceil to " + Math.ceil(x));
// console.log(y+" ceil to " + Math.ceil(y));
// console.log(z+" ceil to " + Math.ceil(zfloor


// Math.floor
// console.log(x+" floor to " + Math.floor(x));
// console.log(y+" floor to " + Math.floor(y));
// console.log(z+" floor to " + Math.floor(z));

// Math.random 
// console.log(" round to " + Math.random ()*2);
// console.log(" round to " + Math.random ()*3);
// console.log(" round to " + Math.random ()*4);

// str to num num to str
// num = 10
// str = "20"
// float = 20.6
// console.log(2+parseInt(str));
// console.log(Number(str));
// console.log(num.toString(num));

// controlling the length of decimal
// x = 11.5492314999
// console.log(x.toFixed(2));

// ***class 14***

// Date Time

// var date = new Date()
// date_str = date.toString()
// // day = date.slice(0,4)
// // day = date.slice(4,10)
// console.log(date)
// console.log(date_str)
// console.log(date.getTime())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getSeconds())
// console.log(date.getFullYear())

// var dob = new Date("Jan 30 2000")
// var dob_mili = dob.getTime()
// console.log(dob_mili);

// var today = new Date()
// var tod_mili = today.getTime()
// console.log(tod_mili);

// var dob_diff = tod_mili - dob_mili
// console.log(dob_diff);

// var diff_year = dob_diff/(1000*60*60*24*30*12)
// console.log(Math.floor(diff_year));

// ** Functions
// function add(a,b,c){
//     plus = a+b+c
//     return plus
// }
// x = add(1,2,3)
// console.log(x);


// Function Of Age Calculator
// function dob_calculator(db_month, db_date, db_year) {
//     var date = new Date()
//     var dob = new Date(db_month,db_date,db_year)

//     var date_mili = date.getTime()
//     var dob_mili = dob.getTime()

//     var age_mili = date_mili - dob_mili
//     var age = Math.floor(age_mili / (1000 * 60 * 60 * 24 * 30 * 12))
//     console.log(age);
//     return age
// }
// x = dob_calculator(10,1,2000)
// console.log(x);


// function sum(a,b,c){
//     console.log("a "+a);
//     console.log("b "+b);
//     console.log("c "+c);
    
//     console.log("a "+a);

// }
// sum(c=3,b=2,a=1) // There are no keyword argumenta in javascript

// Switch
// id = 110
// switch (id) {
//     case 100:
//         console.log("abc");
//         break;
//     case 110:
//         console.log("GG");
//         break;

//     default:
//         console.log("xyz");
//         break;
// }

// While
// x = 10
// while(x > 0){
//     console.log(x);
//     x--
// }
// console.log(x);


// word = "civic"
// plnd_check = ""
// z = 0
// while(z < word.length){
//     plnd_check += word[z]
//     z++
// }
// switch (word) {
//     case plnd_check:
//         console.log("The word is Palindrome");
//         break;

//     default:
//         console.log("F");
//         break;
// }


// function add(x,y){
//     z = x+y
//     console.log(z);
// }

// js arrow function

var arroFun = (a,b) => a + b

console.log(arroFun(2,2));