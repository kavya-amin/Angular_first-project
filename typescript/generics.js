var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function fun1() {
    console.log("fun");
}
//combine 2 arrays, return the combined array
function combineArrays(a1, a2) {
    return __spreadArrays(a1, a2);
}
fun1();
var l1 = combineArrays(["Sonu", "Monu"], ["abc", "def"]);
//let l2 = combineArrays<string> ([10, 20], [30,40]);
var l3 = combineArrays([10, 20], [30, 40]);
//let l5=combineArrays<string> ([10, "asdf"], [true, undefined]);
