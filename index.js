// Kahoot Workshop Starter Repo
const Kahoot = require("kahoot.js-updated"); 
const client = new Kahoot();
let array;
client.join('GameCode', Math.random() + "- UserName");

client.on("QuizStart", () => {
	console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
	console.log("The quiz has ended.");
});


client.on("QuestionStart", question => {
	let finalNo;
	console.log("New question!");
	console.log(question.numberOfChoices);
	// for (let i = 0, i <= question.numberOfChoices)
	console.log(question.question);
	// console.log(question);
	// console.log(question.choices);
	// console.log(question.choices[0]);
	// console.log(question.choices[0].correct);
	// console.log(question.choices.correct);

	question.choices.forEach(function(value, i) {
		if (question.choices[i].correct === true) {
			finalNo = i;
			console.log(finalNo, "is the correct answer");
		}
		
	})
	console.log(finalNo);
	question.answer(finalNo);

	// function verifyProperty(array) {

	// 	let finalNo
	// 	array.forEach(function(value, i) {
	// 		if ("QuestionStart".choices[value].correct === true) {finalNo = i}
	// 		console.log(finalNo, "is the correct answer")
	// 	});
	// 	return(finalNo)
	// }
});
