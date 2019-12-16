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
var Employee = /** @class */ (function () {
    function Employee(empId, firstName, lastName, address, pincode, salary, basic, allowance, deductions) {
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.pincode = pincode;
        this.salary = this.basic + this.allowance - this.deductions;
        this.basic = basic;
        this.allowance = allowance;
        this.deductions = deductions;
    }
    Object.defineProperty(Employee.prototype, "realname", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (firstlast) {
            if (firstlast.length > 0) {
                var arr = firstlast.split("");
                this.firstName = arr[0];
                this.lastName = arr[1];
            }
            else {
                console.log("Enter a name");
            }
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.CalcSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartTimeEmployee.prototype.CalcSalary = function () {
        return _super.prototype.basic;
    };
    return PartTimeEmployee;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bonus = 3000;
        return _this;
    }
    FullTimeEmployee.prototype.CalcSalary = function () {
        return _super.prototype.CalcSalary.call(this) + this.bonus;
    };
    return FullTimeEmployee;
}(Employee));
var NightShiftEmployee = /** @class */ (function (_super) {
    __extends(NightShiftEmployee, _super);
    function NightShiftEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.extraAllowance = 2000;
        return _this;
    }
    NightShiftEmployee.prototype.CalcSalary = function () {
        return _super.prototype.CalcSalary.call(this) + this.extraAllowance;
    };
    return NightShiftEmployee;
}(Employee));
