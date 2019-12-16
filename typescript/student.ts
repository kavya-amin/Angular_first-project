class Student{
    studentId: string;
    name: string;
    mobileNo: number;
    address: string;
    course: string;
    basicFee: number = 3000;

    constructor(studentId: string, name: string, mobileNo: number, address: string, course: string) {
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

    set StudentId(studentId: string) {
        this.studentId = studentId;
    }
    set Name(name: string) {
        if (name.length <= 15) {
            this.name = name;
        }
        else {
            console.log("Error: Name should not contain more than 15 characters....");
        }
    }
    set MobileNo(mobileNo: number) {
        if (mobileNo.toString().length == 10) {
            this.mobileNo = mobileNo;
        }
        else {
            console.log("Error: Phone number should not contain 10 digits....");
        }
    }
    set Address(address: string) {
        this.address = address;
    }
    set Course(course: string) {
        this.course = course;
    }

    get StudentId(): string {
        return this.studentId;
    }
    get Name(): string {
        return this.name;
    }
    get MobileNo(): number {
        return this.mobileNo;
    }
    get Address(): string {
        return this.address;
    }
    get Course(): string {
        return this.course;
    }

    CalculateFee(): number {
        return this.basicFee;
    }

    display(): void{
        console.log(`Student Id: ${this.StudentId} Name: ${this.Name} Mobile: ${this.MobileNo}
         Address: ${this.Address} Course: ${this.Course} Fees: ${this.CalculateFee()}`);
    }
}

class FastTrackBatchStudent extends Student {
    fee1: number = 3000;
    CalculateFee(): number {
        return super.CalculateFee() + this.fee1;
    }
}

class CorperateBatchStudent extends Student{
    fee2: number = 4000;
    CalculateFee(): number {
        return super.CalculateFee() + this.fee2;
    }
}

class WeekendBatchstudent extends Student{
    fee3: number = 5000;
    CalculateFee(): number {
        return super.CalculateFee() + this.fee3;
    }
}

class CorperateWeekendBatchStudent extends Student{
    fee4: number = 6000;
    CalculateFee(): number {
        return super.CalculateFee() + this.fee4;
    }
}

let s = new CorperateBatchStudent("123","Kavya", 9876787654, "Mangalore", "FSD");
s.display();
