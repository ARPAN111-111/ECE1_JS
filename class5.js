let promise = new Promise((resolve, reject))=>{
    let source = true;
    if(success){
        resolve("data loaded");
    }else
    reject("data not loaded");
};
promise.then(result=>console.log(result))
.catch(error=>console.log(error));


sync function getdata(){
    let responsee=await fetch("https://jsonplaceholder");
    let data = await responsee.json();
    console.log(data);
}
getdata();


localStorage.setitem("name","jeet");
var name=localStorage.getline("name");
console.log(name);
localStorage.removeitem("name");
var user =[name:"jeet", age=30];
localStorage.setitem("user", JSON.stringify(user));
var data =JSON.