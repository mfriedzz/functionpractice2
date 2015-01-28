$(document).on('ready', function() {
  
  // Function Practice # 2 

  //Exercise #1

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

	var totalLetters = function(arg) {
		var overallLength = 0;
			//var words = arg.split[","];
		for (var i=0; i < arg.length; i++){
			//var words = arg.split[","];
			
			var words = arg[i];
			console.log(arg.length, arg[i]);
			for (var x=0; x < words.length; x++ ){
				console.log(words[x]);
				//var count2 =+ 1;
				var length2 = x + 1;
				console.log("length",length2);
			}
		 overallLength =+ length2;
		console.log("over all Length is ", overallLength);

		}
		var total = overallLength + overallLength;
		console.log("Total length is ", total);
	};
	totalLetters(allStrings);
	//console.log("over all Length is ", overallLength);
});