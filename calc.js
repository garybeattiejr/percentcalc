/* var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY'); 
*/ 

var numField1 = document.getElementById('num1');
var numField2 = document.getElementById('num2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('form1'); 


form.addEventListener('submit', function(event) {
    if (!num1.value || !num2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        
        var result = x / y; 
        var percent = result * 100;
        
        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }   
});








