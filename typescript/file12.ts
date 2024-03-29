import { StringValidator } from "./file11";

//pincode-validator.ts
export const numberRegexp=/^[0-9]+$/;
export class PincodeValidator implements StringValidator{
    isValid(s: string): boolean{
        return s.length === 6 && numberRegexp.test(s);
    }
}