// Display question
// 	timer counts down from 30 seconds
// 	user chooses answer
// 		if right
// 			add to wins counter
// 			confirm guess was right
// 		if wrong
// 			add to incorrect answers counter
// 			give correct answer
// 		display next question
// 	user did not choose an anser/time ran out
// 		add to timeout counter
// 		show timeout
// 		give correct answer
// 		display next question
// All questions given
// 	display score
// 	button to restart game


var counter = 30; 
var questions = [
	{
	 question: "What is the name for the skin which peels away after a sunburn?",
	 answer: "blype", 
	 wrong_answers: ["flake", "probustrus", "dermidon"]
	}, 
	{
	 question: "Name the WWII British deception operation in which a deceased homeless man was disguised as on officer of the Royal Marines to misdirect Nazi operatives.", 
	 answer: "Operation Mincemeat", 
	 wrong_answers: ["Operation Backfire", "Operation Epsilon", "Operation Hawkeye"]
	}, 
	{
	 question: "What fraction of the world's construction cranes are located in Dubai?", 
	 answer: "1/4", 
	 wrong_answers: ["1/3", "1/8", "1/10"]
	}, 
	{
	 question: "Name the two women who were divorced by Henry VIII of England.", 
	 answer: "Catherine of Aragon and Anne of Cleves", 
	 wrong_answers: ["Catherine Parr and Anne of Cleves", "Anne Boleyn and Catherine Howard", "Jane Seymour and Catherine Parr"]
	}, 
	{
	 question: "What was the original color of Oscar the Grouch?",
	 answer: "orange", 
	 wrong_answers: ["green", "blue", "grey"]
	}, 
	{
	 question: "What name was Kool-Aid originally marketed under?",
	 answer: "Fruit Smack", 
	 wrong_answers: ["Juice-Aid", "Fruit PUNCH", "JuiceJuice"]
	}, 
	{
	 question: "What is the dot over the letter \"i\" called?", 
	 answer: "tittle", 
	 wrong_answers: ["dipple", "pit", "pip"]
	}, 
	{
	 question: "What was the Cookie Monster's real name?", 
	 answer: "Sid", 
	 wrong_answers: ["Andrew", "Jared", "Rob"]
	}, 
	{
	 question: "Who invented the term \"robot\"?", 
	 answer: "Karel Capek", 
	 wrong_answers: ["Alan Turing", "Hedy Lamarr", "Tom Stoppard"]
	}, 
	{
	 question: "The holiday song \"Good King Wenceslas\" is actually about:", 
	 answer: "A Bohemian duke named Vaclav", 
	 wrong_answers: ["The Great Freeze of 1894", "New Year's Day", "The Beatification of St. Stephen"]
	}
]; 
var questionNumber = 0; 

//sets the coundown timer for the current question
//moves to next question when timer runs out
setInterval(function(){ 
	counter--; 
	$("#timer").html(counter);
	if(counter==0) {
		displayQuestion(questionNumber);
		counter = 31;  
	} 
}, 1000); 

function displayQuestion(n){
	if(n<questions.length-1){
		
	}
}