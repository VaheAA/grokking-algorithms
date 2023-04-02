function countdown(i) {
  console.log(i);
  if (i <= 0) {
    return;
  } else {
    countdown(i - 1);
  }
}

function factorial(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

// countdown(5)
console.log(factorial(4));
