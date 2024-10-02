const calculator = document.getElementById("calculator");
      const display = document.getElementById("display");
      const buttons = calculator.querySelectorAll("button");

      let currentValue = "";
      let operator = "";

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const buttonValue = button.textContent;
          // console.log("this is the first curVal: ", currentValue);

          if (buttonValue === "Clear all") {
            currentValue = "";
            operator = "";
            display.textContent = "";
          } else if (
            buttonValue === "+" ||
            buttonValue === "-" ||
            buttonValue === "x" ||
            buttonValue === "/"
          ) {
            if (currentValue) {
              // console.log("this is the curVal: ", currentValue);
              operator = buttonValue;
              pastValue = currentValue;
              display.textContent+= ` ${operator} `;
              // console.log(pastValue, operator);
            }
          } else if (buttonValue === "=") {
            if (currentValue && operator) {
              const result = calculate(pastValue, operator);
              // console.log(result);
              display.textContent = result;
              console.log(currentValue)

              // if(!operator){
              //   //The '=' operator return the result as the first value and the current value as the second value
              //   display.textContent = 
              // }
              console.log(calculate(result, operator))
            }
          } else {
            currentValue = buttonValue;
            // console.log("this is the current value", currentValue);
            display.textContent += buttonValue;
          }
        });
      });

      function calculate(num1, operator) {
        num1 = Number(num1);
        const num2 = Number(currentValue);

        // console.log("the current value", num2);
        // console.log("the args value", num1);
        // console.log(typeof num2);
        switch (operator) {
          case "+":
            return num1 + num2;
          case "-":
            return num1 - num2;
          case "x":
            return num1 * num2;
          case "/":
            return num1 / num2;
          default:
            return 0;
        }
      }