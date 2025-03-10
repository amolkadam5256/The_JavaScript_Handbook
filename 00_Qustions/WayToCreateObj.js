// possible ways to create objects in JavaScript:

let person = {
    name: "Amol",
    age: 26,
    city: "Pune",
    greet: function () {
        console.log("Welcome to Object");
        return this.city="return value of greeat function ";
    }

};

console.table(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.greet());


console.log("====================== ==========================");

let obj1 = Object.create(person);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.city);
console.log(obj1.greet());



// function personinfo (name , age ,city){
//     this.name=name;
//     this.age=age;
//     this.city=city;
// }

// let personino= new personinfo("amit",56,"Lohara");``