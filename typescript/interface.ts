interface ContainsItem{
    (items: string[], itemToSearch: string): boolean;
}
const searchProducts: ContainsItem =
    (products: string[], productToSearch: string): boolean =>{
        return products.indexOf(productToSearch) >= 0;
    }
const searchUsers: ContainsItem =
    (users: string[], userToSearch: string): boolean =>{
        return users.indexOf(userToSearch) >=0;
    }
console.log(searchProducts(['Laptop',
'Watch', 'Shoe'], 'Watch'
));             //returns true
console.log(searchUsers(
    ['Ram', 'Bill', 'Bob'],
    'Will'
));     //returns false

interface In1{
    id1: number;
    fun1(): void;
}

interface In2 extends In1{
    id2: number;
    fun2(): void;
}

interface In4{
    id4: number;
}

class c5{
    id5: number;
}

class c3 extends c5 implements In2, In4{
    id1: number;
    id2: number;
    id3: number;
    id4: number;
    fun1(): void{
        console.log(this.id1);
    }
    fun2(): void{
        console.log(this.id2);
    }
    fun3(): void{
        console.log(this.id3);
    }
}

namespace Validation{
    export interface StringValidator{
        isValid(s: string): boolean;
    }
    export class PinCodeValidator implements StringValidator{
        isValid(s: string): boolean{
            return s.length ===6;
        }
    }
    export class UsernameValidator implements StringValidator{
        isValid(s: string): boolean{
            return s.indexOf(' ') < 0;
        }
    }
    var pv = new PinCodeValidator();
    console.log(pv.isValid("500001"));
}
var pv1 = new Validation.PinCodeValidator();
console.log(pv1.isValid("500001"));

namespace ns{
    var pv2 = new Validation.PinCodeValidator();
    console.log(pv2.isValid("500001"));
}