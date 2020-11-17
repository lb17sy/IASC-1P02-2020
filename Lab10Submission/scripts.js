function calculate(s){
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  if(s=="add"){
    document.getElementById("output").innerHTML = num1 + num2;
  }
  else if (s=="sub"){
    document.getElementById("output").innerHTML = num1 - num2;
  }
  else if (s=="mul"){
    document.getElementById("output").innerHTML = num1 * num2;
  }
  else if (s=="div"){
    document.getElementById("output").innerHTML = num1 / num2;
  }
}
