var answer1 = 0

function multipleOfThreeAndFive () {
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer1 += i
    }
  }
}

multipleOfThreeAndFive()
document.getElementById('answer1').innerHTML = answer1

var answer2 = 0

function evenFibonacci () {
  var nth = 0
  var nth_1 = 1
  var nth_2 = 1
  while (nth <= 4000000) {
    nth = nth_1 + nth_2
    if (nth % 2 === 0) {
      answer2 += nth
    }
    nth_2 = nth_1
    nth_1 = nth
  }
}

evenFibonacci()
document.getElementById('answer2').innerHTML = answer2

var answer3 = 0

function isPrime (num) {
  if (num === 1) {
    return false
  } else if (num === 2) {
    return true
  } else if (num % 2 === 0) {
    return false
  } else {
    for (var i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}

function largestPrimeFactor (num2) {
  for (var i = num2; i >= 1; i--) {
    if (isPrime(i)) {
      if (num2 % i === 0) {
        return i
      }
    }
  }
  return false
}

// 9999999 is the largest number for this algorithm. Any bigger and it "hangs"
answer3 = largestPrimeFactor(9999999)
document.getElementById('answer3').innerHTML = answer3

function showDiv (toggle) {
  document.getElementById(toggle).style.display = 'inline'
}
