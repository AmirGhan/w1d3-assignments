function countLetters(string) {
	var words = string.split("")
	var counter = {}
	for (var i=0; i < words.length; i++) {
		if (words[i] === " ") {
			continue
		} 
		if (counter[words[i]] === undefined) {
			counter[words[i]] = [i]
		} else {
			counter[words[i]].push(i) 
		}
	}
return counter
}
console.log(countLetters("lighthouse in the house"))