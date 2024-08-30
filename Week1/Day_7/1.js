function greet(name,callback){
    // console.log(name);
    callback(name)
}
function sayHello(name){
    console.log(`Hello ${name}` )
}
greet('Batman',sayHello)