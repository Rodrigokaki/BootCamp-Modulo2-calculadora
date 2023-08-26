function calc(operation){
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var result = 0;

    switch(operation){
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        case '*' : result = num1 * num2; break;
        case '/' : result = num1 / num2; break;
    }
    
    document.getElementById("result").value = result;
}
