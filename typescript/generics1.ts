// class Employee{
//     eid: number;
// }

// const hrEmployees: Employee[] =[
//     new Employee(), new Employee()
// ];

// const itEmployees: Employee[] =[
//     new Employee(), new Employee()
// ];

//let allEmployees: Employee[]= combineArrays<Employee>(hrEmployees,itEmployees);


function displayType<T, U>(id: T, name: U): void{
    console.log(`id: ${id} (type: ${typeof id})`)
    console.log(`name: ${name} (type: ${typeof name})`);
}
displayType<number, string>(1, "Steve");

class KeyValuePair<T, U> {
    private key: T;
    private val: U;
    setKeyValue(key: T,val: U): void{
        this.key=key;
        this.val=val;
    }
    display(): void{
        console.log(`key: ${this.key}, val: ${this.val}`);
    }
}
let kvp1 = new KeyValuePair<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display();
let kvp2= new KeyValuePair<string, string>();
kvp2.setKeyValue("E001", "Bill");
kvp2.display();