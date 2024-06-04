const accountID=122;
let accountEmail="shaina@gmail.com"; //local scope
var accountPassword="Shaina"; //global scope --- not recommended
accountCity="Pune"; //not recommended
let accountState; //undefined


//console.log(accountID);
//console.log(accountEmail);
//console.log(accountPassword);
//console.log(accountCity);

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);