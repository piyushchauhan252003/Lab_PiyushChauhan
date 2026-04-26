function add() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("result").innerHTML ="Result:"+(parseInt(a)+parseInt(b));
}