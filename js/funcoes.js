/*var sumOLd = function(a,b)
{
	return a + b ;
}
//Arrow funcitions
var sum = (a, b) =>  a + b;
console.log(sum(5,1 5));

//obejetos
function Car(){
	this.foo = 'bar'
;}
console.log("teste "+new Car());*/
var obj = {
	showContext: function showContext(){
		this.log('teste');
	},
	log: function log(value){
		console.log(value);
	}
};
obj.showContext();
