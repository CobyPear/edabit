const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
"U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};
/*
score <= 60:   "NOT TOO GOOD"

61 <= score <= 300:  "PRETTY GOOD"

301 <= score <= 599:  "VERY GOOD"

score >= 600:  "THE BEST"
*/

function nameScore(name) {
    // variable to hold total
    let totalScore = 0
    if (name.includes(' ')) name = name.split(' ').join('') // remove any spaces from the name
    console.log(name)
    // loop over the string
    for (let i = 0; i < name.length; i++) {
        // add to total score using the scores object. name[i].toUpperCase() will be a letter in the scores object, and we can add to the score this way
        totalScore += scores[name[i].toUpperCase()]
    }
		let resultString = "NOT TOO GOOD"
		if (totalScore >= 600) {
			resultString = "THE BEST"
		} else if (301 <= totalScore && totalScore <= 599) {
			resultString = "VERY GOOD"
		} else if (61 <= totalScore && totalScore <= 300) {
			resultString = "PRETTY GOOD"
		}
	console.log(totalScore)
	return resultString
}


console.log(nameScore('MUBASHIR'))
console.log(nameScore('MATT'))
console.log(nameScore('PAKISTAN'))
console.log(nameScore('BILL GATES'))