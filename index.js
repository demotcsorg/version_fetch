const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const result = [];

try {
  // `who-to-greet` input defined in action metadata file
  const mod_name = core.getInput('module_name');

  
  console.log(`Finding version for ${mod_name}`);

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
  

} catch (error) {
  core.setFailed(error.message);
}