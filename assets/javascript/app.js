var counter = 30; 
var questions = [
	{
	 question: "What is the name for the skin which peels away after a sunburn?",
	 answer: "blype", 
	 wrong_answers: ["flake", "probustrus", "dermidon"]
	}, 
	{
	 question: "Name the WWII British deception operation in which a deceased homeless man was disguised as an officer of the Royal Marines to misdirect Nazi operatives.", 
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
var unanswered = 0; 
var correct = 0; 
var incorrect = 0; 
var countDownTimer; 


//While there are still new questions, posts the next question to the page
//Randomly sorts the possible answers, and posts them as buttons to the page
//Starts the countdown timer. If timer gets to 0, it resets and calls the next question. 
function displayQuestion(n){
	if(n<questions.length){
		countDownTimer = 
			setInterval(function(){ 
				$("#timer").html(--counter);
				if(counter==0) {
					clearInterval(countDownTimer); 
					checkAnswer(questionNumber, ""); 
				} 
			}, 1000);
		$("p").html(questions[n].question + "<br>");
		var answers = JSON.parse(JSON.stringify(questions[n].wrong_answers)); 
		answers.push(questions[n].answer); 
		answers.sort(function(a,b){ //randomizes order of answers in the array
			return 0.5-Math.random();
		})
		for(var i=0; i<answers.length; i++){
			var button = $("<button>"); 
			button.text(answers[i]); 
			$("p").append(button); 
		}
		questionNumber++; 
	}else{
		displayScore();
	}	
}

//Displays final score of trivia quiz
//Gives player option of re-starting the game
function displayScore(){
	clearInterval(countDownTimer); 
	$("h2").hide(); 
	$("p").html(`Your Score: <br>
		Correct: ${correct} <br>
		Incorrect: ${incorrect} <br>
		Unanswered: ${unanswered}`); 
	$("#buttons").html("<button>Restart</button>"); 
}

//Checks whether a user's guess is correct
//Talies correct score counter
//Resets countdown timer and displays next question
function checkAnswer(n, str){
	if(str == ""){
		unanswered++;
		$("p").html(`No more time to answer. <br>
			The correct answer was ${questions[n-1].answer}`); 
		$("#buttons").empty(); 
		setTimeout(function(){
			counter = 30;
			$("#timer").html(counter);
			displayQuestion(questionNumber); 
		}, 3000); 		
	}
	else if(str == questions[n-1].answer){
		correct++;
		$("p").html("That's correct!"); 
		$("#buttons").empty(); 
		setTimeout(function(){
			counter = 30;
			$("#timer").html(counter);
			displayQuestion(questionNumber); 
		}, 2000); 
	}  
	else{
		incorrect++;
		$("p").html(`Sorry, the correct answer was ${questions[n-1].answer}`); 
		$("#buttons").empty(); 
		setTimeout(function(){
			counter = 30;
			$("#timer").html(counter);
			displayQuestion(questionNumber); 
			 
		}, 2000); 
	} 
}

//Displays first question on the page
displayQuestion(questionNumber); 

$(document).on("click", "button", function(){
	if($(this).text()=="Restart"){
		$("#buttons").empty(); 			
		incorrect = 0; 
		correct = 0; 
		unanswered = 0; 
		questionNumber = 0; 
		clearInterval(countDownTimer);
		displayQuestion(questionNumber);
		$("h2").show(); 
	}else{
		clearInterval(countDownTimer);
		checkAnswer(questionNumber, $(this).text()); 
	}
})


