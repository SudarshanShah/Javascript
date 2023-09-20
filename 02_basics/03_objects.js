// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sudarshan",
    age: 25,
    // this is how a Symbol is declared as key
    [mySym]: "mykey1",
    location: "Bengaluru",
    email: "sudarshan@amazon.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// not preferred way
console.log(JsUser.email)

// preferred way
console.log(JsUser["email"])
console.log(JsUser[mySym]);

// change values
JsUser.email = "sudarshan@chatgpt.com"

// after using this method on any object, 
// we can't change any property of the Object
//Object.freeze(JsUser)

JsUser.email = "sudarshan@dev.com"
console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());