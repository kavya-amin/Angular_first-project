function fun1(){
    console.log("fun");
}
//combine 2 arrays, return the combined array
function combineArrays<T>(a1:T[], a2:T[]): T[]{
    return [...a1, ...a2];
}
fun1();
let l1=combineArrays<string> (["Sonu", "Monu"], ["abc", "def"]);
//let l2 = combineArrays<string> ([10, 20], [30,40]);
let l3 = combineArrays<number> ([10, 20], [30,40])
//let l5=combineArrays<string> ([10, "asdf"], [true, undefined]);