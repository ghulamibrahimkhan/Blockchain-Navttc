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


async function init() {

    postThree = { title: 'Post 3', body: 'this is post 3' }
    await createPost(postThree)
    getPost()
}
init()

