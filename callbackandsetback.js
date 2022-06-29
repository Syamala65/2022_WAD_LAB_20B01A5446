function verifylogin(user,pwd,callback){
    if(pwd=="pwd1")
        callback(null,"correct login")
    else
        callback("Incorrect login")
}

verifylogin("user1","pwd1",function(err,result){
    if(err)
        console.log("Invalid")
     else
        console.log("valid user")
})

console.log("program is starting");
setTimeout(() => {
     console.log("inside timeout")
},2000);

console.log("after time out")
console.log("program ending")

