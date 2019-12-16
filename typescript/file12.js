"use strict";
exports.__esModule = true;
//pincode-validator.ts
exports.numberRegexp = /^[0-9]+$/;
var PincodeValidator = /** @class */ (function () {
    function PincodeValidator() {
    }
    PincodeValidator.prototype.isValid = function (s) {
        return s.length === 6 && exports.numberRegexp.test(s);
    };
    return PincodeValidator;
}());
exports.PincodeValidator = PincodeValidator;
