var calcWithoutLastOperator = '';
var calcWithoutNegative = '';
var lastOperator = '';
var negative = false;
var hasDecimal = false;

function number(number)
{
	var addNumber = true;
	if (number == '.')
	{
		if (hasDecimal)
		{
			addNumber = false;	
		}
		else
		{
			hasDecimal = true;
		}
	}

	if (addNumber)
	{
		document.getElementById('calculation').value += number;
		lastOperator = '';
		calcWithoutLastOperator = document.getElementById('calculation').value;
	}
}

function operation(operator)
{
	if (calcWithoutLastOperator == '')
	{
		if (operator == '-')
		{
			toggleNegative();
		}
	}
	else
	{
		equals(false);
		if (lastOperator == '')
		{
			appendOperator(calcWithoutLastOperator, operator);		
		}
		else
		{
			if (operator == '-')
			{
				toggleNegative();
			}
			else
			{
				appendOperator(calcWithoutLastOperator, operator);
			}
		}
	}
}

function appendOperator(existingVal, operator)
{
	document.getElementById('calculation').value = existingVal + operator;
	lastOperator = operator;
	calcWithoutNegative = document.getElementById('calculation').value;
	negative = false;
	hasDecimal = false;
}

function toggleNegative()
{
	if (lastOperator == '-')
	{
		return;
	}

	if (negative)
	{
		document.getElementById('calculation').value = calcWithoutNegative;	
	}
	else
	{
		calcWithoutNegative = document.getElementById('calculation').value;
		document.getElementById('calculation').value += '-';
	}

	negative = !negative;
}

function equals(confirmed)
{
	var runningTotal = eval(calcWithoutLastOperator);
	if (confirmed)
	{
		document.getElementById('calculation').value = runningTotal;
		document.getElementById('total').value = '';
		calcWithoutLastOperator = runningTotal;
		calcWithoutNegative = runningTotal;
		lastOperator = '';
		negative = false;
		var runningTotalStr = '' + runningTotal;
		hasDecimal = runningTotalStr.includes('.');
	}
	else
	{
		document.getElementById('total').value = runningTotal;
	}
}

function clearAll()
{
	document.getElementById('calculation').value = '';
	document.getElementById('total').value = '';
	calcWithoutLastOperator = '';
	calcWithoutNegative = '';
	lastOperator = '';
	negative = false;
	hasDecimal = false;
}

document.onkeypress = function(event) 
{
	var keyPress = String.fromCharCode(event.charCode);

	if (isNumeric(keyPress)
	  || keyPress == '.'
	  || isOperator(keyPress))
	{
		clickButton(keyPress);
	}
	else if (keyPress == '=')
	{
		clickButton('=');
	}
	else if (keyPress == 'c' || keyPress == 'C')
	{
		clickButton('C');
	}
}

/**
* Just for esc key - keypress doesn't register.
**/
document.onkeydown = function(event) 
{
	if (event.keyCode == 27)
	{
		clickButton('C');
	}
}

function clickButton(name)
{
	document.getElementById(name).click();
}

function isNumeric(keyPress) 
{
  	return !isNaN(parseInt(keyPress));
}

function isOperator(keyPress)
{
	return keyPress == '+' || keyPress == '-' || keyPress == '*' || keyPress == '/';
}