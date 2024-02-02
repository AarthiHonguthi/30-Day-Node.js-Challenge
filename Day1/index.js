const fs = require("fs");

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log("File Content: \n"+data);
        }
    });
}

// Test Cases
readFileContent('Day1/first.txt');
readFileContent('Day1/empty-file.txt');
readFileContent('Day1/nonexistent-file.txt');