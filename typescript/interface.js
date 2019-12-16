var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var searchProducts = function (products, productToSearch) {
    return products.indexOf(productToSearch) >= 0;
};
var searchUsers = function (users, userToSearch) {
    return users.indexOf(userToSearch) >= 0;
};
console.log(searchProducts(['Laptop',
    'Watch', 'Shoe'], 'Watch')); //returns true
console.log(searchUsers(['Ram', 'Bill', 'Bob'], 'Will')); //returns false
var c5 = /** @class */ (function () {
    function c5() {
    }
    return c5;
}());
var c3 = /** @class */ (function (_super) {
    __extends(c3, _super);
    function c3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    c3.prototype.fun1 = function () {
        console.log(this.id1);
    };
    c3.prototype.fun2 = function () {
        console.log(this.id2);
    };
    c3.prototype.fun3 = function () {
        console.log(this.id3);
    };
    return c3;
}(c5));
var Validation;
(function (Validation) {
    var PinCodeValidator = /** @class */ (function () {
        function PinCodeValidator() {
        }
        PinCodeValidator.prototype.isValid = function (s) {
            return s.length === 6;
        };
        return PinCodeValidator;
    }());
    Validation.PinCodeValidator = PinCodeValidator;
    var UsernameValidator = /** @class */ (function () {
        function UsernameValidator() {
        }
        UsernameValidator.prototype.isValid = function (s) {
            return s.indexOf(' ') < 0;
        };
        return UsernameValidator;
    }());
    Validation.UsernameValidator = UsernameValidator;
    var pv = new PinCodeValidator();
    console.log(pv.isValid("500001"));
})(Validation || (Validation = {}));
var pv1 = new Validation.PinCodeValidator();
console.log(pv1.isValid("500001"));
var ns;
(function (ns) {
    var pv2 = new Validation.PinCodeValidator();
    console.log(pv2.isValid("500001"));
})(ns || (ns = {}));
(function (Validation) {
    var PinCodeValidator1 = /** @class */ (function () {
        function PinCodeValidator1() {
        }
        PinCodeValidator1.prototype.isValid = function (s) {
            return s.length === 6;
        };
        return PinCodeValidator1;
    }());
    Validation.PinCodeValidator1 = PinCodeValidator1;
    var pv1 = new Validation.PinCodeValidator1();
    console.log(pv1.isValid("500001"));
})(Validation || (Validation = {}));
