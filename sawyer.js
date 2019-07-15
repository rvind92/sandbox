//
// function sawyer(number, carlsberg) {
//   carlsberg(number)
// }
//
// function aravind(value) {
//   console.log('The value plus 2 is ' + (2 + value))
// }
//
// sawyer(3, aravind)



//------------------------------------------

function first() {
  console.log('1')
}

function second() {
  setTimeout(function() {
    console.log('2');
  }, 0)

}

function third() {
  console.log('3');
}

first()
second()
third()
