function fibonacciEvenNumberSum(max_num) {
  let current_num = 1;
  let next_num = 2;
  let sum = 0;

  while(current_num <= max_num) {
    if (isEven((current_num))) {
      sum += current_num;
    }

    let prev_num = current_num;
    current_num = next_num;
    next_num += prev_num;
  }

  return sum;
}

function isEven(num) {
  return num % 2 === 0;
}

module.exports = fibonacciEvenNumberSum;
