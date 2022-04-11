/*let tr = $(this).closest('tr').index();
let td = $(this).closest('td').index();
let number = $('#calculate_table tr:eq('+ tr + ')>td:eq('+ td +')').text();*/

$( document ).ready(function() {
	pushButton();
	signButton();
	
	acButton();
	dotButton();
	equalButton();
	
});

const specialRegExp = /[\+\-\*\/]/;	// 특수문자가 포함되어 있는지 확인하는 정규식
let resultValue = "";
let calValue = "0";


function isRegExp (input){
	return specialRegExp.test(input);
}


function showResultValue(){
	console.log( getResultValue() );
	$("#result_value").text(getResultValue());
}

function showCalValue(){
	console.log( getCalValue() );
	$("#calculating_value").text(getCalValue());
}

function clearCalValue(){
	setCalValue("0");
	showCalValue();
}

// 버튼 이벤트
function pushButton(){
	$(".number").on("click", function(){
		let number = $(this).text();
		console.log("number %s", number);
		
		if ("0" == getCalValue()){
			setCalValue("");
		}
		
		let inputValue = getCalValue() + number;
		
		setCalValue(inputValue);
		
		showCalValue();
	});
}

function signButton(){
	$(".sign").on("click", function(){
		let sign = $(this).val();
		console.log("sign : " + sign);
		
		
		if ( "" == getResultValue() ){		// result 값이 없을 경우
			setResultValue(getCalValue() + sign);
			console.log("setResultValue " + getResultValue());
			setCalValue("0");
			
		} else {		// result 값이 있을 경우
			let result = getResultValue();
			let regExp = result.charAt(result.length-1);

			if ( "0" == getCalValue() && isRegExp(result.charAt(result.length-1))){
				setResultValue( result.replace(regExp, sign) );
			} else {
				
				setResultValue( eval(getResultValue() + getCalValue() + sign   );
			}
			
		}
		
		
		showResultValue();
	});
}


function acButton(){
	$("#ac_btn").on("click", function(){
		console.log("ac");
		
		setResultValue("");
		setCalValue("0");
		
		showResultValue();
		showCalValue();
	});
}


function dotButton(){
	$("#dot_btn").on("click", function(){
		console.log("dot");
		
		let dot = $("#dot_btn").text();
		
		if ( getCalValue().includes(dot) ){
			return;
		}
		
		let inputValue = getCalValue() + dot; 
		setCalValue(inputValue);
		
		showCalValue();
	});
}


function equalButton(){
	$("#equal_btn").on("click", function(){
		console.log("equal");
		
	});
}



// get/set

function getResultValue(){
	return resultValue;
}

function setResultValue(input){
	resultValue = input;
}

function getCalValue(){
	return calValue;
}

function setCalValue(input){
	calValue = input;
}