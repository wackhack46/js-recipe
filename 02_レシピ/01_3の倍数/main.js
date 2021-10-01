const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || n % 10 === 3 || (30 <= n && n < 40)) {
      console.log(`${n}!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
