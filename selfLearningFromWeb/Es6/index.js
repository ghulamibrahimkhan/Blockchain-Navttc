// //18:20
// //String concatenation
// const name = "Ibrahim"
// console.log(`My name is Mr ${name}`);

 
// // Function 
// function getUser(user, id) {
//     return {
//         user,
//         id
//     }
// }
// const get_user = getUser("ibrahim", 2)
// console.log(get_user);


// console.log("*******object deconstruction********");
// //object deconstruction
// const student = {
//     stu_name: "Ibrahim",
//     subjects: ["Math", "English"]
// }

// const { stu_name, subjects } = student
// console.log(stu_name);
// console.log(subjects[1]);

// // Arrow function example(1)
// const arrow = () => {
//     console.log("this is arrow function");
// }
// arrow()

// // Arrow function example(2)
// const arrow2 = (name, id) => {
//     console.log(`Employee name is ${name} and his id is ${id}`);
// }
// arrow2("Ibrahim", 78)

// // Arrow function example(3)    when we just hv 1 parameter we dont need to use () on that particular parameter
// const arrow3 = bike => {
//     console.log(`${bike} is made for Pakistani market`);
// }
// arrow3("bike")
// // Arrow function example(3.1)   we can remove {} when we are returning one single thing
// const arrow301 = (num1, num2, num3) => console.log(num1 + num2 + num3);

// arrow301(3, 3, 3)


// // old java script
// var user = {
//     name: "Khan",
//     age: 25,
//     get_age: function () {
//         console.log(this.age);
//         // we have to do this. intro function cant get values by this
//         var that = this
//         var intro = function () {
//             console.log(`User name is ${that.name} and he's ${that.age} years old`);
//         }
//         intro()
//     }
// }
// user.get_age()

// //Es6

// const computer = {
//     processor: "Ryzen 3600",
//     ram: "ddr4",
//     storage: "m.2",
//     get_processor: function () {
//         console.log(this.processor);
//         const get_acessories = () => {
//             console.log(`ram=> ${this.ram}\nstorage=> ${this.storage}`);
//         }
//         get_acessories()
//     }
// }
// computer.get_processor()


// //  old js     (defualt parameters)
// var multi = function (a, b) {
//     x = a || 1
//     y = b || 1
//     console.log(x * y);
// }
// multi()

// // ES6         (defualt parameters)
// const sum = (a = 1, b = 1,c = 1) => {
//     console.log(a + b-c);
// }
// sum(3,7,5) //we can send keyword arguments 
// sum(11,11,2) 


// // for each 
// i = 0
// const shopping_list = ['milk', 'eggs', 'cream', 'meat', 'vegetables']
// shopping_list.forEach((product, index) => {
//     console.log(`${i} Index ${index} and the product is ${product}`);
//     i++
// })

// // Map 
// const new_list = shopping_list.map(item => "new " + item)
// // console.log(new_list);
// console.log(new_list)

// // filter
// const filter_list = shopping_list.filter(item =>{
//     // return item === "eggs"
//     return item !== "eggs"
// })
// console.log(filter_list);




//old javascript
// constructur function & classes

// function Person(person_name,person_age,person_height){
//     this.name = person_name;
//     this.age = person_age;
//     this.height = person_height
//     this.person = function(){
//         console.log(`the name is ${this.name}`);
//     }
// }
// Person.prototype.height_in_cm = function(){
//     console.log(this.height*30.48);
// }

// var xyz = new Person("ibm",23,"5.9")
// console.log(xyz.person());

// xyz.height_in_cm()

// another construction function
// function ibraim_khan(occupation,hobbies)


// function person(p_height,p_age,p_color){
//     this.height  = p_height;
//     this.age   = p_age;
//     this.color = p_color;
//     this.p_detail = function(){
//         console.log(`Height is ${this.height}`);
//     }  
// }
// person.prototype.human = function(){
//     console.log(`This human's age is ${this.age} and body tone is ${this.color}`);
// }

// testingP = new person(5.6,24,"brown")
// testingP.p_detail()
// testingP.human()

// function candinate(cn_name,cn_number,p_height,p_age,p_color){
//     person.call(this, p_height,p_age,p_color)
//     this.name  = cn_name
//     this.number= cn_number
// }

// candinate.prototype = Object.create(person.prototype)

// const ibrahim = new candinate("ibrahim",7,"6ft",20,"brown",)
// console.log(ibrahim);

// ibrahim.human()
// ibrahim.p_detail()


//Es6
class employee {
    constructor(id,tasks,salary){
        this.id     = id
        this.tasks   = tasks
        this.salary = salary
    }
    get_salary(){
        console.log(this.salary);
    }
}
const emp_info = new employee(25,["web","app","nft"],50000)
// console.log();
emp_info.get_salary()

class manager extends employee{
    constructor(id,tasks,salary,time,departments){
        super(id,tasks,salary);
        this.time = time
        this.departments = departments
    }
}
 