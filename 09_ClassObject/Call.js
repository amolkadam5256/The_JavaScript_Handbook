function SetUserName(username) {
    // complex calcu
    this.username = username;
    console.log("Call");
}

function CreateUser(username,email,password){
    SetUserName.call(this, username);

    this.email=email
    this.password=password
}

const chai = new CreateUser("amol", "chai@1234","123");
console.log(chai)
