function deleLig() {
	var n = parseInt(document.getElementById("problemEn").value);
	var result = 0;
		for (var i = 0; i < n; i++){
			if(i % 3 === 0){
			result += i;
		}
		else if(i % 5 === 0){
			result += i;
		}
	}
	document.getElementById("svarEN").innerHTML = result.toString();
};

var fibNum = function() {
	var num1 = 1;
	var num2 = 1;
	var even1 = 0;
	var even2 = 0;
	var answer = 0;

	for (num1 = 1; num1 < 4000000 && num2 < 4000000; num1 = num1 + num2)
	{
		num2 = num1 + num2;

		if (num1 % 2 == 0)
		{
			even1 += num1;

			if (num2 % 2 == 0)
			{
				even2 += num2
			}
		}
		else if (num1 % 2 !== 0 && num2 % 2 == 0)
		{
			even2 += num2;
		}
	}

	answer = even1 + even2;

	document.getElementById('fibNum_result').innerHTML = answer;
	}

	var primeFactor = function() {
	var answer = 0;
	var num = 600851475143;
	var factor = 2;

	while ( num > factor)
	{
		if (num % factor == 0)
		{
			num = num/factor;
			factor = 2;
		}
		else 
		{
			factor += 1;
		}
	}
	answer = factor;
	
	document.getElementById('primeFactor_result').innerHTML = answer;
}