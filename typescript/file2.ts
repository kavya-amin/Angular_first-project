namespace Validation{
    ///<reference path="file1.ts"/>
    export class PinCodeValidator1 implements StringValidator{
        isValid(s: string): boolean{
            return s.length ===6;
        }
    }
    var pv1 = new Validation.PinCodeValidator1();
    console.log(pv1.isValid("500001"));
}