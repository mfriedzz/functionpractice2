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

var allStrings = { a: 10,
 					b: 20,

  					c: 30 };

var allStrings2 = { 
		firstName: "pork",
		lastName: "chops"};

  var printObject = (function(arg) {
  	for (var temp in arg) {

  			 console.log(temp + " is " + arg[temp]);
  	}
  	//console.log("got here 1", arg);
  	//return console.log(" here");
  	
  });
  	
	//console.log (allStrings2);
  printObject(allStrings2);
  //	console.log(" Here are the Print Objects " + _.keys(allStrings) + " is "
  //		+ _.values(allStrings) );


// example # 7

// var allStrings="Alabama";

// var vowels = function(arg) {
// 	//var itemsTomatch = /aeiou/g;
// 	console.log(arg);
// 	console.log("Here are all the vowels in " + arg + " " + arg.match(/[aeiouAEIOU]/ig));
// };

//  vowels(allStrings);



// example # 8

// var allStrings = ['a','a','b','b', 'c', 'c']; //true
// var allStrings2 = ['a', 'a', 'b']; //false
// var allStrings3 = ['a', 'a', 'b', undefined]; //false
	

// 	var twins = function(arg1){
// 		var flag = false;
// 		for (var i=0; i<arg1.length; i+=2){
			
// 			if (arg1[i] === arg1[i+1]){

// 				flag = true;
				
// 			//console.log(" First if ==  True " , arg1[i]);
// 		} else {
// 			//console.log("Second if === False" , arg1[i]);
// 			flag = false;
// 			return console.log("False, Not Twins ");
// 			break;
// 		} //if
	
// 	} //for
// 		if (flag){
// 			console.log("Flag:" , flag);
// 			return console.log(" All are Twins!");
// 		}
	
// 	}; //function
// 		twins(allStrings3);










//example # 9

// var orr = [false, false, true, false];
// var orr2 = [false, false, false];
// var orr3 = [];

// var or = orr3.some(function(arg) {
// 	//console.log("argument " + arg)
	
// 	if (arg === true) {
// 		console.log("Got here");
// 		return true;
// 	}
	
// });

//   console.log("The Array is " + or );




//example # 10

// var items = ['a','b','a','c','d','d'];

// var items2 = ['todd', 'avery', 'maria', 'avery'];


// console.log('_uniq:', _.uniq(items2));



	});



