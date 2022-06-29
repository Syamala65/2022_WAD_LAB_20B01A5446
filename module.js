
// var os = require('os')
// os.hostname
// console.log(os)

// var fs = require('fs')
// fs.readFile("./text.txt","utf8",function(err,data){
//     if(err)
//         console.log("error in reading file")
//     else
//         console.log(data)
// });

// var cowsay = require('cowsay')
// console.log(cowsay.say({text : "example text" }))

// var cowsay = require('cowsay')
// console.log(cowsay.say({text : "example text",e:"%%",T:"$$"}))

// var calci=require('./calci')
// console.log(calci.add(11,13))
// console.log(calci.sub(15,13))
// console.log(calci.mul(5,3))
// calci.div(12,2,(err,result)=>{
//     if(err)
//         console.log(err)
//     else    
//         console.log(result)
// })


/* JSON */

// var book = {title:"core java",authors:"Herbert Shield",price:500,publisher:"Tata McGrills"};
// var jsonbook = JSON.stringify(book);
// console.log(jsonbook);
// var bookobj = JSON.parse(jsonbook);
// for(ele in bookobj){
//     console.log(ele+":"+bookobj[ele]);
// }

var chalk =require('chalk')

console.log(chalk.blue('Hello world!'));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// // ES2015 template literal
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// // Use RGB colors in terminal emulators that support it.
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));
// Easily define your own themes:

// import chalk from 'chalk';

// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));
// Take advantage of console.log string substitution:

// import chalk from 'chalk';

// const name = 'Sindre';
// console.log(chalk.green('Hello %s'), name);
// //=> 'Hello Sindre'
