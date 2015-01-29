$(document).on('ready', function() {

// var names = {
// 	firstName: "Luisa",
// 	age: 25
// }; 

//   var getName = function(arg){

//   	console.log("Here is the First Name:" + names.firstName);
//   };
// getName(names);


// Exercise # 2

	// var allStrings = ['javascript', 'is', 'awesome'];

	// var  totalLetters = allStrings.reduce(function(totals, arg){
			
	// 		return totals += arg.length;

	// 	}, 0);

	// console.log("total length", totalLetters);
	// //console.log("Total Length is " + totalLength);

	// //totalLetters(to);
	// console.log("Total Length is " + totalLetters);

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



// example # 7

// var allStrings="Alabama";

// var vowels = function(arg) {
// 	//var itemsTomatch = /aeiou/g;
// 	console.log(arg);
// 	console.log("Here are all the vowels in " + arg + " " + arg.match(/[aeiouAEIOU]/ig));
// };

//  vowels(allStrings);



// example # 8

var allStrings = ['a','a','b','b', 'c', 'c'];


	var twins = function(arg, arg1){
		for (var i=0; i<arg.length; i++){
			if (arg[i]  === arg[i+1]){


			console.log(arg[i] + arg[i+1]);
		} else {
			return console.log("No!");
		} //for
	}

	};
	twins(allStrings, all);

	});
