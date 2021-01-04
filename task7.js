var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var oprtr =  prompt("Select the operator from (+ , -, *, /, %) ");


if("+"===oprtr){
    alert("Your Calculation is: " +parseInt(num1)+parseInt(num2));
}
if("-"===oprtr){
    alert("Your Calculation is: " +parseInt(num1)-parseInt(num2));
}
if("*"===oprtr){
    alert("Your Calculation is: " +parseInt(num1)*parseInt(num2));
}
if("/"===oprtr){
    alert("Your Calculation is: " +parseInt(num1)/parseInt(num2));
}
if("%"===oprtr){
    alert("Your Calculation is: " +parseInt(num1)%parseInt(num2));
}

