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
var Student = /** @class */ (function () {
    function Student(studentId, name, mobileNo, address, course) {
        this.basicFee = 3000;
        this.studentId = studentId;
        if (name.length <= 15) {
            this.name = name;
        }
        else {
            console.log("Error: Name should not contain more than 15 characters....");
        }
        if (mobileNo.toString().length == 10) {
            this.mobileNo = mobileNo;
        }
        else {
            console.log("Error: Phone number should not contain 10 digits....");
        }
        this.address = address;
        this.course = course;
    }
    Object.defineProperty(Student.prototype, "StudentId", {
        get: function () {
            return this.studentId;
        },
        set: function (studentId) {
            this.studentId = studentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            if (name.length <= 15) {
                this.name = name;
            }
            else {
                console.log("Error: Name should not contain more than 15 characters....");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "MobileNo", {
        get: function () {
            return this.mobileNo;
        },
        set: function (mobileNo) {
            if (mobileNo.toString().length == 10) {
                this.mobileNo = mobileNo;
            }
            else {
                console.log("Error: Phone number should not contain 10 digits....");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Address", {
        get: function () {
            return this.address;
        },
        set: function (address) {
            this.address = address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Course", {
        get: function () {
            return this.course;
        },
        set: function (course) {
            this.course = course;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.CalculateFee = function () {
        return this.basicFee;
    };
    Student.prototype.display = function () {
        console.log("Student Id: " + this.StudentId + " Name: " + this.Name + " Mobile: " + this.MobileNo + "\n         Address: " + this.Address + " Course: " + this.Course + " Fees: " + this.CalculateFee());
    };
    return Student;
}());
var FastTrackBatchStudent = /** @class */ (function (_super) {
    __extends(FastTrackBatchStudent, _super);
    function FastTrackBatchStudent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fee1 = 3000;
        return _this;
    }
    FastTrackBatchStudent.prototype.CalculateFee = function () {
        return _super.prototype.CalculateFee.call(this) + this.fee1;
    };
    return FastTrackBatchStudent;
}(Student));
var CorperateBatchStudent = /** @class */ (function (_super) {
    __extends(CorperateBatchStudent, _super);
    function CorperateBatchStudent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fee2 = 4000;
        return _this;
    }
    CorperateBatchStudent.prototype.CalculateFee = function () {
        return _super.prototype.CalculateFee.call(this) + this.fee2;
    };
    return CorperateBatchStudent;
}(Student));
var WeekendBatchstudent = /** @class */ (function (_super) {
    __extends(WeekendBatchstudent, _super);
    function WeekendBatchstudent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fee3 = 5000;
        return _this;
    }
    WeekendBatchstudent.prototype.CalculateFee = function () {
        return _super.prototype.CalculateFee.call(this) + this.fee3;
    };
    return WeekendBatchstudent;
}(Student));
var CorperateWeekendBatchStudent = /** @class */ (function (_super) {
    __extends(CorperateWeekendBatchStudent, _super);
    function CorperateWeekendBatchStudent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fee4 = 6000;
        return _this;
    }
    CorperateWeekendBatchStudent.prototype.CalculateFee = function () {
        return _super.prototype.CalculateFee.call(this) + this.fee4;
    };
    return CorperateWeekendBatchStudent;
}(Student));
var s = new CorperateBatchStudent("123", "Kavya", 9876787654, "Mangalore", "FSD");
s.display();
