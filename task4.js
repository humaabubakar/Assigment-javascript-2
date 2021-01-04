var name = prompt("Enter Your Name");
var accounting = prompt("Enter Your Accounting Marks");
var finance = prompt("Enter Your Finance Marks");
var management = prompt("Enter Your Management Marks");
var obtained_marks = parseInt(accounting) + parseInt(finance) + parseInt(management);
var percentage = obtained_marks * 100 / 300;

document.write("<br> Your Name:" + name  );
document.write("<br> Total Marks:" + "300" );
document.write("<br> obtained Marks:" + obtained_marks  );
document.write("<br> Percentage:" + percentage  );
// Percentage
if(percentage >= 80){
    document.write(" <br> Grade: A-one")
}
 else if(percentage >= 70){
    document.write(" <br> Grade: A")
}
 else if(percentage >= 60){
    document.write(" <br> Grade: B")
}
else if(percentage >= 50){
    document.write(" <br> Grade: Fail")
}
// Remarks 
if(percentage >= 80){
    document.write(" <br> Remarks: Exceklent")
}
 else if(percentage >= 70){
    document.write(" <br> Remarks: Good")
}
 else if(percentage >= 60){
    document.write(" <br> Remarks: You need to improve")
}
else if(percentage >= 50){
    document.write(" <br> Remarks: Fail!")
}

