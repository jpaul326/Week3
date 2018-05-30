(function() {
	"use strict";
	console.log("file connected");
// Sinfle line comment (reminders)
/*
multi
line
comment (when broken and not doing what needed, then needs to be revisited)
*/
 var words = "This is a string of letters";
 var num =1;//you can put everything/anything inside of variables
 console.log(words);
 console.log("Number of times of visited "+num);
var teams = ["Knights","Caps", "Leafs"]; 
console.log(teams[0]); //when working with arrays, first position starts at 0 not 1!

//variables hold things, functions perform actions usually falls under interactivity

function i_am_a_function() {
	console.log("i_am_a_function");
}

window.addEventListener("load",i_am_a_function, false);

})();