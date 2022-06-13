// Class 15

// //for on click
// function greet(mesg) {
//     alert(mesg)
// }

// function getName() {
//     user_name = document.getElementById('name2')
//     // user_name.value = "Ibrahim"  
//     console.log(user1_name.value);

//     user1_name.value = "s"
// }
// getName()

function setName() {
    user_name = document.getElementById('my_name')
    user_name.value = "Ibrahim"  
    console.log(user_name.value);
}
setName()

function setPara() {
    var paraName = document.getElementById("para")

    paraName.innerHTML = "Hello world"
}
setPara()
