const path = reguire('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File exention
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
../test/hello.html
console.log(path.join(_dirname, 'test', 'hello.html'))
