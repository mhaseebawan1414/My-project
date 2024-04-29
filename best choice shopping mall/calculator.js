let currentNumber = "";
          let previousNumber = "";
          let operator = "";
  
          function appendNumber(number) {
            currentNumber += number;
            document.getElementById("result").value = currentNumber;
          }
  
          function clearScreen() {
            currentNumber = "";
            previousNumber = "";
            operator = "";
            document.getElementById("result").value = "";
          }
  
          function appendOperator(op) {
            if (currentNumber === "") return;
            previousNumber = currentNumber;
            currentNumber = "";
            operator = op;
          }
  
          function calculate() {
            if (currentNumber === "" || previousNumber === "") return;
  
            let result = 0;
            let a = parseFloat(previousNumber);
            let b = parseFloat(currentNumber);
  
            switch (operator) {
              case "+":
                result = a + b;
                break;
              case "-":
                result = a - b;
                break;
              case "*":
                result = a * b;
                break;
              case "/":
                if (b === 0) {
                  alert("Division by zero is not allowed!");
                  return;
                }
                result = a / b;
                break;