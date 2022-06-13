const {readFileSync,writeFileSync} = require('fs')

// const path = './content'
const first = readFileSync('./content/first.txt','utf8')
const text = readFileSync('./content/subfolder/text.txt')

writeFileSync(
    './content/result-sync.txt',`Here is the result ${first} , ${text} \n`,{flag:'a'}
)