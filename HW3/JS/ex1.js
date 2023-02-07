//1.

const num1 = Number(prompt('Enter a number between 1-100:'))
if (Number.isInteger(num1)) {
  console.log(`Thank you! You entered ${num1}, a valid number`)
  if (num1 > 100) {
    console.log(`Sorry, ${num1} is not a valid number.`)
  }
  if (num1 < 1) {
    console.log(`Sorry, ${num1} is not a valid number.`)
  }
}

//2.

const name1 = prompt('What is your name?')
const units = Number(prompt('How many units have you completed?'))
switch (true) {
  case units >= 0 && units <= 30:
    console.log(`Hello ${name1}, your grade standing is Freshman.`)
    break
  case units >= 31 && units <= 60:
    console.log(`Hello ${name1}, your grade standing is Sophmore.`)
    break
  case units >= 61 && units <= 90:
    console.log(`Hello ${name1}, your grade standing is Junior.`)
    break
  case units > 90:
    console.log(`Hello ${name1}, your grade standing is Senior.`)
    break
}

//3.
const DayEntered = prompt('Enter day of the week:')

switch (true) {
  case (DayEntered === 'sun'):
    console.log(`You entered: ${DayEntered} \n The following day is mon.`)
    break
  case (DayEntered === 'mon'):
    console.log(`You entered: ${DayEntered} \n The following day is tue.`)
    break
  case (DayEntered === 'tue'):
    console.log(`You entered: ${DayEntered} \n The following day is wed`)
    break
  case (DayEntered === 'wed'):
    console.log(`You entered: ${DayEntered} \n The following day is thu`)
    break
  case (DayEntered === 'thu'):
    console.log(`You entered: ${DayEntered} \n The following day is fri`)
    break
  case (DayEntered === 'fri'):
    console.log(`You entered: ${DayEntered} \n The following day is sat`)
    break
  case (DayEntered === 'sat'):
    console.log(`You entered: ${DayEntered} \n The following day is sun`)
    break
}

//4. 
const num_a = Number(prompt('Enter a number:'))
const num_b = Number(prompt('Enter another number:'))

console.log(`Addition: ${num_a} plus ${num_b} =`, num_a + num_b)
console.log(`Subtraction: ${num_a} minus ${num_b} =`, num_a - num_b)
console.log(`Multiplication: ${num_a} times ${num_b} =`, num_a * num_b)
console.log(`Division: ${num_a} divided by ${num_b} =`, num_a / num_b)
console.log(`Modulo: ${num_a} modulo ${num_b} =`, num_a % num_b)

//5.
const password = prompt('Enter a password:')

for (var attempt = 0; attempt <= 3; attempt++) {
  console.log(attempt)

  console.log('')
}

//6.
const m = Number(prompt('Enter another number:'))
for (var i = 0; i <= 10; i++) {
  console.log(`${m} * ${i} =`, m * i)
}

//7. Following Second - The program has the following requirements:
//Input
//Time as three values: hours, minutes, seconds (validate input)
//Output
//Output the time entered and the time one second later.
//Examples:
//Time input: 14h17m59s
//One second later: 14h18m0s
//Time input: 6h59m59s
//One second later: 7h0m0s
//Time input: 23h59m59s
//One second later: 0h0m0s


//const x = Number(prompt('Enter time:'))

function ParseTime(timeString) {
  var timeMatcher = /(\d\d):(\d\d)/;
  var result  = timeMatcher.exec(timeString);

  // The first result (result 0) is the full string,
  // the second is the number of hours, the third is the number of minutes.
  var hours = Number(result[1]);
  var minutes = Number(result[2]);

  // returns the time in number of minutes.
  return (hours * 60) + minutes;
}