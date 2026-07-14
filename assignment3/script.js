function calculate() {

    var n = parseInt(document.getElementById("num").value);

    // Input Validation
    if (isNaN(n) || n < 1 || n > 10) {
        alert("Please enter a number between 1 and 10.");
        return;
    }

    // Fibonacci using while loop
    var a = 0, b = 1, i = 1;
    var fib = "";

    while (i <= n) {
        fib += a + " ";
        var temp = a + b;
        a = b;
        b = temp;
        i++;
    }

    // Factorial using do-while loop
    var fact = 1;
    var j = 1;

    do {
        fact = fact * j;
        j++;
    } while (j <= n);

    // Display Output
    document.getElementById("output").innerHTML =
        "<h3>Result</h3>" +
        "<b>Fibonacci Series:</b> " + fib + "<br><br>" +
        "<b>Factorial of " + n + ":</b> " + fact;
}
