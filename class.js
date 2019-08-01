function myClass()
{
this.firstName = undefined;
this.lastName = undefined;
}

var myClassObj = new myClass;
myClassObj.firstName = "Amita";
myClassObj.lastName = "Jethani";

console.log(myClassObj.firstName);
console.log(myClassObj.lastName);