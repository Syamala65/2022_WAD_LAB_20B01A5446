// console.log("Example node js application")
// var a=7
// var b=8
// var c=a+b
// console.log("addition = "+c)
// var number = [42,46,33,13,35];
// for(var x in number){
//     console.log(number[x])
// }
// var number = [42,46,33,13,35];
// number.forEach(myfunction)
// function myfunction(value){
//     console.log(value);
// }

// var number = [1,2,3];
// reverse_number = number.reverse()
// console.log(reverse_number)

// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits.sort();
// console.log(myArray)

function alphabet_order(str){
    return str.split('').sort().join('');
}
console.log(alphabet_order("webmasters"));