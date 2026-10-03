// Asycn funtion
const fs = require("fs");

fs.readFile("aa.txt", "utf-8", function (err, contents) {
    const trimmedContents = contents.trim();

    fs.writeFile("aa.txt", trimmedContents, function () {
        console.log("done!");
    });
});


// //promisefied verion
const fs = require("fs");

function cleanFile(FilePath) {
    return new Promise(function (resolve, reject) {

        fs.readFile(FilePath, "utf-8", function (err, contents) {

            if (err) {
                reject();
            } else {

                const trimmedContents = contents.trim();

                fs.writeFile(FilePath, trimmedContents, function (err) {

                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }

                });
            }
        });
    });
}

cleanFile("aa.txt")
    .then(function () {
        console.log("File has been cleaned");
    })
    .catch(function () {
        console.log("Caught an error");
    });

//Async Await

const fs = require("fs");

function cleanFile(FilePath) {
    return new Promise(function (resolve, reject) {

        fs.readFile(FilePath, "utf-8", function (err, contents) {

            if (err) {
                reject();
            } else {

                const trimmedContents = contents.trim();

                fs.writeFile(FilePath, trimmedContents, function (err) {

                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }

                });
            }
        });
    });
}
async function main() {
    try {
        await cleanFile("aa.txt");

        console.log("File has been cleaned");
    } catch (e) {
        console.log("Caught an error");
    }
}

main();


// Sync

const fs = require("fs");

function cleanFile(filepath) {
    const content = fs.readFileSync(filepath, "utf-8");

    const trimmedContents = content.trim();

    fs.writeFileSync(filepath, trimmedContents);

    return "File has been cleaned";
}

console.log(cleanFile("aa.txt"));