const { readFile, writeFile, writeFileSync, readFileSync } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result

    readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result
        writeFile('./content/callback.txt',`here is the result ${first} ,${second} \n`,{flag:'a'}, (err,result)=>{
            if(err){
                console.log(err);
            }
            console.log(result);
        })
    })

})