//var age: number = 32;    //number variable
//var empName: string = "John";    //string variable
//var isUpdated: boolean = true;    //boolean variable

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

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];
console.log(list1);
console.log(list2[2]);
fruits[2] = 'Guava';
console.log(fruits);

let employee: [number, string] = [1, "Steve"];
let person: [number, string, boolean] = [1, "Steve", true];
let user: [number, string, boolean, number, string] = [12, "Steve", true, 2000, "US"];

enum Color { Red, Green, Blue }
let c1: Color = Color.Green;

// enum Color {Red = 1, Green, Blue}
// let c :Color= Color.Green;

// enum Color {Red = 1, Green = 2, Blue  = 4}
// let c: Color=Color.Green;

// var v1: number = 10;
// v1 = 20;
// v1 = "asdf";

// var v2: any = 10;
// v2 = 20;

let code: any = 123;
let employeeCode = <number>code;

let code2: any = 123;
let employeeCode2 = code as number;
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
let add2 = function (x, y) { return x + y; };
//Arrow function
let add3 = (x, y) => x + y;
console.log(add3(10, 20));

function add_number(a: number, b: number): number {
    console.log(a + b);
    return a + b;
}

function greet(greeting: string, ...names: string[]) {
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

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog('Tommy');
dog.bark();
dog.move(10);
    //console.log(dog.color);

// let passcode = '123';
// class Employee{
//     private _fullName: string = ' ';
//     get fullName(): string{
//         return this._fullName;
//     }
//     set fullName(_fullName){
//         this._fullName=_fullName;
//     }
// }

// interface User{
//     name: string;
// }
// function greet1(user: User){
//     console.log('Hello ' + user.name);
// }   
// function show(user: ){
//     console.log('Hello ' + user.name);
//     ;}
//     const Customer1{
//         firstName='Shiv'
//     };
//     greet1(Customer1);

interface Person{
    firstName: string;
    age?: number;
    introduceSelf(lastName: string): void;
}
const p: Person = {
    firstName: 'Hari',
    age: 25, 
    introduceSelf(lastName: string): void{
        console.log(`Hello, I am ${this.firstName} ${lastName}`);
        console.log("Hello, I am "+ this.firstName+" "+lastName);
    }
};
p.introduceSelf('Krishna');
console.log(p.firstName);

class Employee1 implements Person{
    firstName: string = "Sonu";
    introduceSelf(lastName: string):void{
        console.log(`Hi I am ${lastName}.`);
    }
}

let emp = new Employee1();
emp.introduceSelf("Monu");


