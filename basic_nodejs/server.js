// const objectToConvert = {
//     name: "Alice",
//     age: 25
// };
// const json = JSON.stringify(objectToConvert);
// console.log(json);

// console.log('server file is running');
// function add(a,b){
//     return a+b;

// var add = function(a,b){
//     return a + b;
// }

// var result = add(2,7);
// console.log(result);

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt', 'hi ' + user.username + '!\n', () => {
    console.log('file is created');
});