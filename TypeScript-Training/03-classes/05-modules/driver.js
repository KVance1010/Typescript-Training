"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
// create an instance
var myCustomer = new Customer_1.Customer("Kyle", "Vance");
console.log('Hello ' + myCustomer.firstName);
console.log(myCustomer.lastName);
