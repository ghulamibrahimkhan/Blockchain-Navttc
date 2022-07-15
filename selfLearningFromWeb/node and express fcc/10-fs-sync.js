const {readFileSync,writeFileSync} = require('fs')
const path = require('path')

const firstPath = './content/first.txt'
const secondPath = './content/subfolder/text.txt'
const writePath = './content/result-sync.txt'


const first = readFileSync(firstPath,'utf8')
const text = readFileSync(secondPath,'utf8')

writeFileSync(
    writePath,`Here is the result ${first} , ${text} \n`,{flag:'a' }
)

// {flag:'a' } append the data to file otherwise rewrite happen