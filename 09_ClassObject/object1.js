function myltiplyBy5(num) {
    return (num * 5);
}

myltiplyBy5.power= 2;
console.log(myltiplyBy5(2));
console.log(myltiplyBy5.power);
console.log(myltiplyBy5.prototype);



function CreateUser(username, score){
    this.username= username;
    this.score=score;
}

CreateUser.prototype.increment = function(){
    this.score++;
    
}

CreateUser.prototype.prinMe= function(){
console.log(`score of ${this.username}`);
}


const chai = new CreateUser("Amol", 25);
const tea = new CreateUser("tea", 22);


console.log(chai);
console.log(tea);


chai.prinMe();