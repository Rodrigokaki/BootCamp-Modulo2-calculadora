function add(){
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;

    var result = num1 + num2;
    
    document.getElementById("result").value = result.toFixed(2);
}