"use strict";

// function fruits(apple, oranges) {
//     console.log(apple, oranges);
//     const juice = `Juice with ${apple} and ${oranges}.`;
//     return juice;
// }

// fruits(5, 0)

// const data = fruits(8, 0);
// console.log(data)

// console.log(fruits(8, 0))

// function calculateYourAge(birthYear) {
//     return 2022 - birthYear;
// }

// const age1 = calculateYourAge(1999);
// // console.log(age1)

// const cal = function (birthYear) {
//     return 2022 - birthYear
// }

// // console.log(cal(1998))

// //console.log(age1, cal(1998))

// const cal1 = birthYear => 2022 - birthYear;

// console.log(cal1(1998))

// const year12 = (Year, Name) => {
//     const age_me = 2022 - Year;
//     const retirement = 65 - age_me;

//     return `Your retirement Yer is ${age_me} and your name is ${Name}`;
// }
// console.log(year12(1999, "Akash"))

// function money(n) {
//     return n * 5;
// }

// function fruitProcessor(apples, oranges) {
//     const money1 = money(apples);
//     const money2 = money(oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.
//     Give me ${money1 + money2} $`
//     return juice
// }

// console.log(fruitProcessor(1, 3))

// const year123 = (Year, Name) => {
//     const age_me = 2022 - Year;
//     const retirement = 65 - age_me;
//     const retirement_text = `Your retirement Yer is ${retirement} and your name is ${Name}`;
//     if (retirement > 0) {
//         console.log(retirement_text)
//         return age_me;
//     }
//     else {
//         console.log(`${Name} is already retired`)
//         return -1;

//     }
// }
// console.log(year123(1999, "Akash"))

// console.log(year123(2020, "Bikash"))
// console.log(year123(1765, "Bikash"))

// /* This is a function exercise (start) */
// const calAverage = (a, b, c) => {
//     return (a + b + c) / 3
// }

// console.log(calAverage(1, 2, 3))

// const score_of_A_Team = calAverage(44, 23, 71)
// const score_of_B_Team = calAverage(65, 54, 49)

// const check_winner = function (A_Team, B_Team) {

//     if (A_Team >= B_Team * 2) { console.log(`Dolphins wins with (D ${score_of_A_Team} vs K ${score_of_B_Team}) average Score`); }
//     else if (B_Team >= A_Team * 2) {
//         console.log(`Koalas wins with (D ${score_of_A_Team} vs K ${score_of_B_Team}) average Score`)
//     } else console.log(`No one wins.`)
// }

// check_winner(score_of_A_Team, score_of_B_Team)
// check_winner(576, 111)
// check_winner(111, 500)

// /* This is a function exercise (end) */

// const interns = ['Aaksh', 'Rahat', 'Rafat', 'Hafija']

// console.log(interns)

// const year = new Array(1, 2, 5, 8, 9, 71)
// console.log(year[1])

// const calAvg = function (birthday) {
//     return 2022 - birthday
// }

// const years = [1990, 1880, 1995, 1985, 1988]

// console.log(calAvg(years[1]))

// const ages = [calAvg(years[0]), calAvg(years[1])]

// console.log(ages[0])

// // add elements
// const friends = ['Akash', 'Zaman', 'Miraj', 'Joty']

// const newLength = friends.push('Rahat')
// console.log(newLength)
// console.log(friends)

// friends.unshift('Jhon')
// console.log(friends)

// // Remove elements
// friends.pop()
// const pop_name = friends.pop()
// console.log(pop_name)
// console.log(friends)

// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Akash'))
// console.log(friends.includes('Akash'))

// friends.push(12)
// console.log(friends)
// console.log(friends.includes('12'))

// console.log(friends.includes(12))

// if (friends.includes('Zaman')) {
//     console.log('You have a friend named Zaman')
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 30 ? bill * 0.15 : bill * 0.2
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(bills, tips)

// const givingTip = function (bill) {
//     return (bill >= 50 && bill <= 30 ? bill * 0.15 : bill * 0.2)
// }
// const bill = [125, 555, 44]

// const tip = [givingTip(bill[0]), givingTip(bill[1]), givingTip(bill[2])]

// console.log(bill, tip)

// let total = 0
// for (let i = 0; i < tip.length; i++) {
//     total += tip[i]
// }
// console.log(total)

// const akash = {
//     FistName: 'Akash',
//     LastName: 'Ahmed',
//     Age: 2022 - 1999,
//     Job: 'Intern',
//     Interns: ['Akash', 'Rafat', 'Rahat', 'Hafiza']
// };

// console.log(akash.FistName)

// console.log(akash['FistName'])

// const nameKey = 'Name'
// console.log(akash['Fist' + nameKey])
// console.log(akash['Last' + nameKey])

// akash.location = 'Dhaka'
// akash['twitter'] = '@twitter'

// console.log(akash)

// const interestedIn = prompt(" What do you want to about Akash?(FistName, LastName, Age, Job, Interns ")

// if (akash[interestedIn]) {
//     console.log(akash[interestedIn])
// } else {
//     console.log("Wrong request!")
//     const interestedIn = prompt(" What do you want to about Akash?(FistName, LastName, Age, Job, Interns ")

// }

//Akash has 3 friends his best friend is akash

// console.log(`${akash.FistName} has ${akash.Interns.length} and his best friend's name is ${akash.Interns[0]}`)

// const akash = {
//     FistName: 'Akash',
//     LastName: 'Ahmed',
//     BirthYear: 1999,
//     Age: 2022 - 1999,
//     Job: 'Intern',
//     Interns: ['Akash', 'Rafat', 'Rahat', 'Hafiza'],
//     hasDriverLicense: true,
//     // calcAge: function (birthdayYear) {
//     //     return 2022 - birthdayYear;
//     // }
//     calcAge: function () {
//         return 2022 - this.BirthYear;
//     },
//     getSummary: function () {
//         return `${this.FistName} is ${this.calcAge()} Years old ${this.Job}, and he has ${this.hasDriverLicense ? 'a' : 'No'} driving license`
//     }
// };

// console.log(akash.getSummary())

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     Height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.Height ** 2;
//         return this.bmi;
//     }
// };
// const jon = {
//     fullName: 'John Smith',
//     mass: 92,
//     Height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.Height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// jon.calcBMI();

// console.log(mark.bmi, jon.bmi);

// if (mark.bmi > jon.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jon.fullName}'s BMI (${jon.bmi})`)
// } else if (mark.bmi < jon.bmi) {
//     console.log(`${jon.fullName}'s BMI (${jon.bmi})is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// // }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 1, 110];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAvg = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAvg(totals));

// console.log(calcAvg(tips));

const data1 = [19, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log("..." + str);
};
printForecast(data1);
printForecast(data2);
