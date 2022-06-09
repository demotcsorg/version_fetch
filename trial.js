const fs = require('fs');
const result = [];

const searchFull = (filename, text) => {

    return new Promise((resolve) => {
        
        const regEx = new RegExp(text, "i")
        

        fs.readFile(filename + ".txt", 'utf8', function (err, contents) {
            console.log(err)
            let lines = contents.toString().split("\n");
            lines.forEach(line => {
                if (line && line.search(regEx) >= 0) {
                    console.log('found in file ', filename)
                    result.push(line)
                    
                }
                
            })
            console.log('finished search');
            resolve(result);
            console.log(result[0]);
        })
        
    });
}

searchFull('requirements','Flask');