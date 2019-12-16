var num1=10
function fun(){
    console.log(num1)
}
fun()

function foo(){
var a=1;
console.log('a = '+a);
console.log('b = '+b);
var b=2;
console.log('b = '+b)
}
foo()

var strTen='10';
var numTen=10;
console.log(strTen==numTen);
console.log(strTen===numTen);

console.log(1/0);
console.log(-1/0)


var myKanndaVocabulary=['Beku','Beda','Gothu','kannad gothila','Yen Maga','Adjust maadi'];
for (wordIndex=0, howmanyWordsIKnow = myKanndaVocabulary.length;wordIndex < howmanyWordsIKnow; wordIndex++){
    console.log(myKanndaVocabulary[wordIndex]);
    wordIndex++;
}

function sayHello(){
    console.log('Hello there!')
}
sayHello();
console.log(sayHello());

var sumOrconcatente = function(a,b){
    return a+b;
};
console.log(sumOrconcatente('Mr. ','Bond'));
console.log(sumOrconcatente(1,2));

//syntax #1
(function(x){
    var y=20;
    console.log(x,y);
})(10);

//syntax #2
(function(x){
    var y=30;
    console.log(x,y);
}(10));

console.log(sayHello1);
var sayHello1=function(){
    console.log("Hello there!");
}
sayHello1();

function sum(a,b){
    return a+b;
}
console.log(sum(1));
console.log(sum('hello'));

function fun2(){
    document.write("Hello");
}