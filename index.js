#! /usr/local/bin/node

const fs = require('fs');
const filePath = '/Users/andrasnemeth/.bash_profile';
const content = 'export http_proxy=http://3.220.4.16:80 \nexport https_proxy=http://3.220.4.16:80 \nexport no_proxy=localhost,ge.com\n';

function deleteFile() {
    fs.unlinkSync(filePath);
    console.log('successfully deleted' + filePath);
}

function writeFile() {
    fs.writeFile(filePath, content, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved! " + filePath);
    });
}

if (fs.existsSync(filePath)) {
    deleteFile();
}else{
    writeFile();
}

