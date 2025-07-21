//task 1.1
/*
var message = prompt("Enter your message:");
for (var i = 1; i <= 6; i++) {
  document.write("<h" + i + ">" + message + "</h" + i + ">");
}
*/


//task 1.2
/*
var n = prompt("Enter a number (n):");
n = Number(n);

  var sum = 0;
  for (var i = 0; i < n; i++) {
    var input = prompt("Enter number:");
    var number = Number(input);

    if (number === 0) {
      break;
    }
    sum += number;
    if (sum > 100) {
      break;
    }
  }
  alert("Total sum: " + sum);
  */





  //task 2.1
  /*
  var input1 = prompt("Enter a string:");
  var cnt = 0;
    for (var i = 0; i < input1.length; i++) {
      if (input1[i] === 'e') {
        cnt++;
      }
    }
    alert("The number of (e) is: " + cnt);
  */

    
//task 2.2
var input2 = prompt("Enter a string:");
var c = confirm("Do you want case sensitivity?");

    if (c == true) {
      input2 = input2.toLowerCase();
    }

    var reversed = "";
    for (var i = input2.length - 1; i >= 0; i--) {
      reversed += input2[i];
    }

    if (input2 === reversed) { alert("It is a palindrome"); } 
    else { alert("NOT a palindrome."); }



  