function countLetters(string) {
	var words = string.split(" ").join("");
	var counter = {}
	for (var i=0; i < words.length; i++) {

		if (counter[words[i]] == undefined) {
			counter[words[i]] = 1
		} else {
			counter[words[i]]= counter[words[i]] + 1
		}
	}


return counter
}
console.log(countLetters("lighthouse in the house"))


// function countLetters(string) {
// 	var words = string
// 	var counter = {}
// 	for (var i=0; i < words.length; i++) {
// 		if (words[i] === " ") {
// 			continue
// 		} 
// 		if (counter[words[i]] == undefined) {
// 			counter[words[i]] = 1
// 		} else {
// 			counter[words[i]] = counter[words[i]] + 1
// 		}
// 	}


// return counter
// }
// console.log(countLetters("lighthouse in the house"))