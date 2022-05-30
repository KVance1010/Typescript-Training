var CustomerOldWay = /** @class */ (function () {
    function CustomerOldWay(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(CustomerOldWay.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        // the default is public
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerOldWay.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerOldWay;
}());
// create an instance
var myCustomer = new CustomerOldWay("Kyle", "Vance");
myCustomer.firstName = "John";
console.log('Hello ' + myCustomer.firstName);
console.log(myCustomer.lastName);
