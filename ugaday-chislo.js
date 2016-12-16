function Play(){
			var answer = parseInt(Math.random() * 10);

//while(true) - будет выполняться цикл пока не будет угадано число

for(var tryCount = 1; tryCount < 5; tryCount++){
	var userAnswer = +prompt("Введите число от 1 до 10 чтоб закончить введите 0");
	var s = 5-tryCount;
	if (userAnswer == 0){
		alert("Конец");
		break;
	}
	if(userAnswer > answer)
		alert("Ваше число слишком большое " + " осталось " + s + " попыток");
	else if(userAnswer < answer)
		alert("Ваше число слишком маленькое " + " осталось " + s + " попыток");
	else if (userAnswer == answer){
	    alert("Поздравляю, вы угадали");
	    break;
	}
	else
	 	alert("Это не число!");

}
		}