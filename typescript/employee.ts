class Employee{
    empId: number;
    firstName: string;
    lastName: string;
    address: string;
    pincode: number;
    readonly salary: number;
    protected basic: number;
    allowance: number;
    deductions: number;

    constructor(empId: number, firstName: string, lastName: string, address: string, pincode: number,
        salary: number, basic: number, allowance: number, deductions: number){
            this.empId=empId;
            this.firstName=firstName;
            this.lastName=lastName;
            this.address=address;
            this.pincode=pincode;
            this.salary=this.basic+this.allowance-this.deductions;
            this.basic=basic;
            this.allowance=allowance;
            this.deductions=deductions;
        }

        set realname(firstlast: string){
            if(firstlast.length>0){
                let arr: string[]=firstlast.split("");
                this.firstName=arr[0];
                this.lastName=arr[1];
            }
            else{
                console.log("Enter a name");
            }
        }

        get realname(): string{
            return `${this.firstName} ${this.lastName}`;
        }

        CalcSalary(): number{
            return this.salary;
        }

}

class PartTimeEmployee extends Employee{
    CalcSalary(): number{
        return super.basic;
    }
}
class FullTimeEmployee extends Employee{
    bonus: number=3000;
    CalcSalary(): number{
        return super.CalcSalary()+this.bonus;
    }
}
class NightShiftEmployee extends Employee{
    extraAllowance: number=2000;
    CalcSalary(): number{
        return super.CalcSalary()+this.extraAllowance;
    }
}