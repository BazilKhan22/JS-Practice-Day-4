//  Objects (OOP)

// 1st task car obj with start method()

// let car = {
//  name : "civic" ,
//  model : 2022 ,
//  price : 400000 ,
//  owner : "Bazil"    ,
//  start : function(){
//     console.log(`the owner name is ${this.owner} , the car is ${this.name} , car model is ${this.model} , the final price of car is ${this.price}  `);
//  }
// }
// car.start()

// 2nd task Fetch API

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(posts => {
    posts.forEach(post => console.log(post.title) + console.log(post.body)
    );
})
.catch(error => console.log("Error fetching posts:", error));
