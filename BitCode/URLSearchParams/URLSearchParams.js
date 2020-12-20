// BitCode

// URL = https://filisantillan.com/?name=Fili&age=24

const urlParams = window.location.search;
const params = new URLSearchParams(urlParams);

let name = params.get("name");
let age = params.get("age");

console.log(name); // Fili
console.log(age); // 24
