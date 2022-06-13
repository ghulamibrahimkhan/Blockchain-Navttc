students = [
    {
        id: 11,
        sname: 'ibrahim'
    },{
        id :12,
        sname: 'sulaman'
    }
]

console.log(students);
const oneStudent =  setTimeout(()=>{
    students.push(studentObj);
    console.log(students);
},1000)

var studentObj = {
    id : 3,
    sname : 'Tahira'
}


