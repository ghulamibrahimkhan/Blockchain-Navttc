// const students = [
//     { id: 11, subject: 'python' },
//     { id: 22, subject: 'javascript' }
// ]
// function getStudents() {
//     setTimeout(() => {
//         let output = ''
//         students.forEach((data, index) => {
//             output += `${index} Student id is ${data.id} and ${data.subject}\n`;
//         })
//         console.log(output);
//     }, 2000)
// }

// function createStudent(appendStudent) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             students.push(appendStudent)
//             const error = false

//             if(!error){
//                 resolve()
//             }
//             else{
//                 console.log('Something went wrong');
//             }
//         })
//     })
// }

// createStudent({id : '33', subject : 'English'})
// .then(getStudents)
// .catch(err => console.log(err))

// x = [{
//     fst: 'a',
//     snd: 'b',
//     trd: 'c'
// }]
// y = [1, 2, 3]
// x.keys.forEach((xyz) => {
//     console.log(`${xyz}`);
// });

x = [{ a: 1, a1: 2 }, { a: 11, a1: 22 }]

function alpha() {
    setTimeout(() => {
        let output = ''
        x.forEach((xyz,index) => {
            output += `The value is ${xyz[index]}`
        })
        console.log(output);
    },2000)
}
alpha()
