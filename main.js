
// var names = {
// 	firstName: "Luisa",
// 	age: 25
// }; 

//   var getName = function(arg){

//   	console.log("Here is the First Name:" + names.firstName);
//   };
// getName(names);


// Exercise # 2

	var allStrings = ['javascript', 'is', 'awesome'];

	var  totalLetters =function(array) { 
		var temp = array.reduce(function(totals, arg){
			
			return totals += arg.length;
		}, 0);
	//console.log("Total Length is " + totalLength);

	//totalLetters(to);
	console.log("Total Length is " , totalLetters(allStrings));

// example # 3

// 	var allObject = ['city', 'Denver'];
		
	
// 	var keyValue = function(arg) {

// 		console.log(arg);
// 		var newCity = {
// 			city: arg[1]
// 		}
// 		return newCity;

// 		};

// console.log(keyValue(allObject));

// example # 4

// var allstrings = ['a', 'b', 'c', 'd', 'e'];
// var negnum = -2;

//  var negativeIndex = function( arg, arg2){
// 			for (i=0; i<arg.length; i++){
// 	 		//return console.log(arg[arg.length + arg2]);
// 	 		//return console.log(arg.length);
// 	 		var position = arg.length + arg2;
// 	 		return console.log(arg[position]);
// 	 	}
// 	 	};
// 	// console.log("The Array index is " + neg);
// 	 negativeIndex(allstrings,negnum);


// example # 5

// var allstrings = "This is a family memory here today";

// var removeM = function(arg){
// 	console.log(arg);
// 	return console.log("Here is the Phrase " + arg.replace(/m/g, " "));
// };

// 	removeM(allstrings);



// example # 6

// 






