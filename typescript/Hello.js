//var age: number = 32;    //number variable
//var empName: string = "John";    //string variable
//var isUpdated: boolean = true;    //boolean variable
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
//age="someage";
//empName=true;
//isUpdated="asdf";
//console.log(typeof age);
//console.log(typeof empName);
//console.log(typeof isUpdated);
// function display(id: number, name: string): void{
//     console.log("ID = "+id+", Name = "+name);
// }
// display(10,"asdf");
// display("asdf",10);
// var employee :{
//     id: number;
//     name: String;
// };
// employee = {
//     id: number;
//     name: String;
// };
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var fruits;
fruits = ['Apple', 'Orange', 'Banana'];
console.log(list1);
console.log(list2[2]);
fruits[2] = 'Guava';
console.log(fruits);
var employee = [1, "Steve"];
var person = [1, "Steve", true];
var user = [12, "Steve", true, 2000, "US"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
// enum Color {Red = 1, Green, Blue}
// let c :Color= Color.Green;
// enum Color {Red = 1, Green = 2, Blue  = 4}
// let c: Color=Color.Green;
// var v1: number = 10;
// v1 = 20;
// v1 = "asdf";
// var v2: any = 10;
// v2 = 20;
var code = 123;
var employeeCode = code;
var code2 = 123;
var employeeCode2 = code;
console.log(typeof code);
console.log(typeof employeeCode);
// let a1 = 10;
// let b1 = "10";
// a1=b1; //error
//Union Types
// let employeeId: string | number;
// employeeId = 111; //OK
// employeeId = "E11" //OK
// employeeId = true ; //compile error
// function padLeft(value: string, padding: string | number){
//     // ....
// }
// let indentedString;
// indentedString = padLeft("Hello world", 0);//fine
// indentedString = padLeft("Hello world", " ");//fine
// indentedString = padLeft("Hello world", true);//error
//Named function
function add(x, y) {
    return x = y;
}
//Anonymous function
var add2 = function (x, y) { return x + y; };
//Arrow function
var add3 = function (x, y) { return x + y; };
console.log(add3(10, 20));
function add_number(a, b) {
    console.log(a + b);
    return a + b;
}
function greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
greet("hello", "John", "Doe");
greet("hello");
//type erasure
// let id: number;
// let bookName: string;
// id=true; //error
// bookName = "Life's amazing secrets";
// class Book {
//     name: string;
//     author: string;
//     constructor(name: string, author: string) {
//         this.name = name;
//         this.author = author;
//     }
//     show() {
//         console.log(`Book name: ${this.name}`);
//         console.log(`Author name: ${this.author}`);
//     }
// }
// let obj1: Book = new Book("Let Us C", "Kanikar");
// obj1.show();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog('Tommy');
dog.bark();
dog.move(10);
var p = {
    firstName: 'Hari',
    age: 25,
    introduceSelf: function (lastName) {
        console.log("Hello, I am " + this.firstName + " " + lastName);
        console.log("Hello, I am " + this.firstName + " " + lastName);
    }
};
p.introduceSelf('Krishna');
console.log(p.firstName);
var Employee1 = /** @class */ (function () {
    function Employee1() {
        this.firstName = "Sonu";
    }
    Employee1.prototype.introduceSelf = function (lastName) {
        console.log("Hi I am " + lastName + ".");
    };
    return Employee1;
}());
var emp = new Employee1();
emp.introduceSelf("Monu");
