

function basicArthimatic(event) {
    event.preventDefault();
    alert("Basic Arthimatic Function");
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("sum").innerHTML = "Sum: " + sum;

    var product = num1 * num2;
    document.getElementById("product").innerHTML = "Product: " + product;

    var differ = num1 - num2;
    document.getElementById("differ").innerHTML = "Subtract: " + differ;

    var divide = num1 / num2;
    document.getElementById("divide").innerHTML = "Divide: " + divide;
}
