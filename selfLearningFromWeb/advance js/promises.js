const posts = [
    { title: 'Post 1', body: 'This is  post 1' },
    { title: 'Post 2', body: 'This is  post 2' }
]
function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `${post.title} and the index is ${index} \n`
        })
        console.log(output);
    }, 1000)
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;

            if (!error) {
                resolve()
            }
            else {
                console.log('some thing went wrong ');
            }
        }, 2000)
    })
}


// postThree = { title: 'Post 3', body: 'this is post 3' }
// createPost(postThree)

//     .then(getPost)
//     .catch(err => console.log(err))

// Promise.all
// const promise1 = Promise.resolve('Hello Wolrd')
// const promise2 = 10
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 2000, 'goodbye')
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// Promise.all([promise1,promise2,promise3,promise4]).then(values=> console.log(values))
// // console.log(promise1,promise2,promise3);


// async / await fetch 
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await res.json()
    console.log(data);
}
fetchUsers()