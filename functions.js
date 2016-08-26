// Invoke each function you write with an example and console.log the result




// multiply
var multiply = function(num1, num2)
return num1*num2

console.log(multiply(2,4));


// isLargerThan100
var isLargerThan100 = function(num)

	var sum = 0;
for(var i = 0, len = inputs.length; i < len; i++) {
    sum += +inputs[i].value;
}
if(sum > 100) {
    return false;
};

console.log(isLargerThan100(1000));




// anyEvens

var isEven = function(number) {
    // Your code goes here!
    if (number % 2 == 0){
       return true;
    }
    else{
       return false;    
    }
};

console.log(isEven(4));

// printDataType

var printDataType = function(collection);
var value = [];

if (typeof value === "string") {
	console.log("I am a string");
	else if (typeof value === "number"){
	console.log("I am a number");
	else if (typeof value === "boolean") {
	console.log("I am a boolean");
	else if (variable.constructor === Array){
	console.log("I am an array");
	else if (typeof value === function){
		console.log("I am a function");
	} else {
		return "I do not know what you are! What are you?";
	}
	}
}
}
};

console.log(printDataType(true));

// isDivisibleBy

var isDivisibleBy = function(num1, num2);{

}









// fizzBuzz

var FizzBuzz = function(num) {
 if (num % 3 === 0 && num % 5 !== 0) {
   return "fizz";
 }

   else if (num % 5 === 0 && num % 3 !== 0) {
     return "buzz";
   }

    else if (num % 5 === 0 && num % 3 === 0){
     return "FIZZBUZZ"

    } 
}

console.log(FizzBuzz(15));
console.log(FizzBuzz(6));
console.log(FizzBuzz(20));



