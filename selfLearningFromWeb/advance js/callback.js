const posts = [
    { title: 'Post 1', body: 'This is  post 1' },
    { title: 'Post 2', body: 'This is  post 2' }
]
function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `${post.title} and the index is ${index} , ${post.body}\n`
        })
        console.log(output);
    }, 2000)
}



function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 3000)
}


postThree = { title: 'Post 3', body: 'This is post 3' }
createPost(postThree, getPost)