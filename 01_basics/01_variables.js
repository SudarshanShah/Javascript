const accountId = 1345676
let accountEmail = "sudarshan210@dev.com"
var accountPassword = "12345"
accountCity = "Jodhpur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "ssh@dev.com"
accountPassword = "435667"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])