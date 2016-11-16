var num1 = "";
var num2 = "";
var clicked = false;

function add(addend1, addend2) {
	return addend1 + addend2;
}

function subtract(minuend, subtrahend) {
	return minuend - subtrahend;
}

function multiply(factor1, factor2) {
	return factor1 * factor2;
}

function divide(dividend, divisor) {
	if (divisor == 0) {
		return "Error";
	}
	return dividend / divisor;
}

function logNum(num) {
	console.log(num);
}

function getNum() {
	$(".num").click(function() {
		if(!clicked) {
			num1 += $(this).html()
			$(".display .container").html(num1);
		}
		else {
			num2 += $(this).html()
			$(".display .container").html(num2);
		}
	});
}

function removeContent() {
	$(".display .container").empty();
}

function executeOperation(operator, x, y) {
	switch(operator) {
		case "+":
			$(".display .container").html(add(x, y));
			break;
		case "-":
			$(".display .container").html(subtract(x, y));
			break;
		case "*":
			$(".display .container").html(multiply(x, y));
			break;
		case "/":
			$(".display .container").html(divide(x, y));
			break;
	}
}

$(document).ready(function() {
	var operator;
	getNum();
	$(".operation").click(function() {
		removeContent();
		clicked = true;
		operator = $(this).html();
	});
	$(".equals-to").click(function(){
		removeContent();
		executeOperation(operator, parseInt(num1), parseInt(num2));
		clear();
	});
});

function clear() {
	num1="";
	num2="";
	operator = null;
	clicked = false;
}

$(".clear").click(function() {
	clear();
	removeContent();
})