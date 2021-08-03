function sum(a, b) {
  return a + b
}

function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}

function concat(a, b) {
  return "" + a + b
}

function contains(a, b) {
  return ("" + b).contains(b)
}

module.exports = sum
