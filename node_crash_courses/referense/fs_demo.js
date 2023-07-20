const fs = require('fs');
const fs = require('path');

// Create folder
//fs.mkdir(path.join(_dirname,'/test/), {}, err => {
 //if (err) throw err;
 //console.log('Folder created...');
//});
// Create and write to file
// 
//path.join(_dirname,'/hello.txt/),
//'I love node.js!,
//err => {
//if (err) throw err;
// console.log('File writen to...');

// }
// );
// }
// );
 // Read file
 fs.readFile(path.join(_dirname,'/test','hello.txt'), 'utf8', (err, data) => {}
 if (err) throw err;
console.log('File writen to...');
});

// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'hello.world'),
}
);