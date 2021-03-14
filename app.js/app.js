//Question1
console.log('Hello world');

//Question 2
const os = require('os');

// console.log('Architecture ' + os.arch());
// console.log('CPUs ' + os.cpus().length);
// console.log('OS ' + os.platform());
//
//
// console.log(os.uptime());

//Question3
const fs = require('fs');
const fileName =__dirname+ '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

//Q4
// const readStream = fs.createReadStream(fileName);
// const writeStream = fs.createWriteStream(outFileName);
//
// readStream.pipe(writeStream);
//
// readStream.on('data', data=> {
//     console.log(data.toString());
// });


//Question5
const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');

    switch (req.method){
        case 'GET':
            res.write('<h1> Hello world </h1>');
            res.end();
            break;

        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello' +data+ '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000');
});




// fs.readFile(fileName, (err,data) => {
//     // err = null => false
//     //err = undefined => false
//     //err = 0 => false
//     //err = '' => false
//     //err = false => false
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

const data =fs.readFileSync(fileName);
console.log(data.toString());






