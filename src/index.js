module.exports = function multiply(first, second) {
  // your solution
  let firstArray = first.split("").reverse();
  let secondArray = second.split("").reverse();
  let resArray = [];

  firstArray.forEach((firstValue, firstIndex) => {
    secondArray.forEach((secondValue, secondIndex) => {
      if (!resArray[firstIndex + secondIndex]) {
        resArray[firstIndex + secondIndex] = firstValue * secondValue;
      } else {
        resArray[firstIndex + secondIndex] += firstValue * secondValue;
      }
    });
  });

  resArray.forEach((resValue, resIndex) => {
    let number = resValue % 10;
    let overflow = Math.floor(resValue / 10);

    resArray[resIndex] = number;

    if (resArray[resIndex + 1]) {
      resArray[resIndex + 1] += overflow;
    } else if (overflow != 0) {
      resArray[resIndex + 1] = overflow;
    }
  });

  let result = resArray.reverse().join("");
  return result;
}


