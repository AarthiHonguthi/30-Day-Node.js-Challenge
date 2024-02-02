//import {writeFile} from fs;
const fs = require('fs');

function writeToFile(filePath, content){
    fs.writeFile(filePath, content, "utf8", (err)=>{
        if(err){
            console.log("Error :- " + err);
        }
        else{
            console.log("Data written to Sample.txt!");       
        }
    });
}


writeToFile('Day2/testfiles/Sample.txt', 'Sample Text.');
writeToFile('testfiles/nonexistent-folder/Sample.txt', 'Content in a non-existent folder.');