var priceOfOnePlus=2500;
var name="John Doe";
var shouldIPurchasePhone=true;
console.log(typeof priceOfOnePlus, typeof shouldIPurchasePhone);
console.log(typeof name);
console.log(typeof 3.14159);
console.log(typeof shouldIPurchasePhone);

var quote='With great power comes great responsibility';
var proverb="My mom says, \"An apple a day keeps the doctor away\"";
console.log(quote.length, proverb.length);
console.log(quote[6], proverb.charAt(5));

var someVariable;
console.log('SomeVariable = ', someVariable);
console.log('undefined = ',undefined);
var someVariable1=undefined;
console.log('SomeVariable1 = ', someVariable1);
var someVariable2=null;
console.log('SomeVariable2 = ', someVariable2);
console.log(someVariable+1);
console.log(typeof NaN);
console.log(NaN+1);

var flag= 0;
if(flag){
    console.log('truthy');
}
else{
    console.log('falsy');
}

var fruitsToBuy=['Apple', 'Orange', 'Banana'];
console.log(fruitsToBuy);
console.log('Number of fruits: ',fruitsToBuy.length);
console.log(fruitsToBuy[0]);
console.log(fruitsToBuy[3]);
fruitsToBuy[1]='Sweet Lime';
fruitsToBuy[3]='Strawberries';
fruitsToBuy[10]='Blueberries';
console.log(fruitsToBuy);

console.log(typeof {});
console.log(typeof function() {});

//global variable
var a='global variable';
console.log('a =',a);
function foo(){
    b='Global'
    console.log('a (inside foo) = ',a);
    console.log('b = ',b);
}
foo();
console.log('b (outside foo)= ',b);

//functio scope variable
function foo1(){
    var b='local to foo';
    console.log('b = ',b);
}
foo1();
//console.log('b = ',b); error

//functions and objects
