const path = require('path');


// both ways are right and returns the same thing
//but this one returns path with os seperators
// const pathX = path.join('/content','subfolder','test.txt')
// const pathX = path.join('/content/subfolder/test.txt')
// console.log(pathX);


// // **
// const filePath= path.join('/content/subfolder/test.txt')
// console.log(filePath);


// const fileParse = path.parse(filePath)
// console.log(fileParse);

//'format' is opposite of 'parse'
// const pathY = path.format({
//     'dir': '/content/subfolder',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
//   })
// console.log(pathY);


// const fileBase = path.basename(filePath)
// console.log(fileBase);

// ** resolved 
// const absolutePath= path.resolve(filePath)
// console.log(absolutePath);