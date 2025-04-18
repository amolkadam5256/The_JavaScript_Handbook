const descripter = Object.getOwnPropertyDescriptor(Math,"PI");

console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);
console.log(descripter);