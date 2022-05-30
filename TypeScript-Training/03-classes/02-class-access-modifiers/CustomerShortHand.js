var CustomerShortHand = /** @class */ (function () {
    function CustomerShortHand(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerShortHand.prototype, "firstName", {
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
    Object.defineProperty(CustomerShortHand.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerShortHand;
}());
// create an instance
var myCustomer = new CustomerShortHand("Kyle", "Vance");
myCustomer.firstName = "John";
console.log('Hello ' + myCustomer.firstName);
console.log(myCustomer.lastName);
