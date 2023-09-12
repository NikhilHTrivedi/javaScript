const accountId = 144553
let accountEmail = "trivedi@google.com"
var accountPasword = "12345"
accountCity = "jaipur"

//accountId = 2 // not allowed

accountEmail = "hdjj@fg.com"
accountPasword = "212121"
accountCity = "Udaipur"
let accountState;
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPasword, accountCity, accountState ])