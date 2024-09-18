function calculate(num1, num2, operator) {
  num1 = Number(num1);

  console.log(num2);
  console.log(typeof num1);
  console.log(typeof num2);
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
var result = calculate(3, 0, "x");
console.log(result)