var obj = {
	key1: 'a string',
	'key-2': true,
	key_3: {
		key31: 10,
		key32: null,
		key33: undefined
	},
	somearray: [ 10, 20, 30 ],
	sommethod: function( x, y ) {
		return x + y;
	}
};
console.log(obj);
console.log(obj["key-2"]);
console.log(obj.key1);
console.log(obj.key_3.key31);
console.log(obj.somearray[1]);
console.log(obj.sommethod(10,20));