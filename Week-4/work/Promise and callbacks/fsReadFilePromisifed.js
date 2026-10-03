const fs = require("fs");

function fsReadFilePromise(filename, encoding) {

    return new Promise(function(resolve, reject) {

        fs.readFile(filename, encoding, function(err, data) {

            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });

    });
}

fsReadFilePromise("a.txt", "utf-8")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(e) {
        console.log("error while reading");
    });