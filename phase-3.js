const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  let res = []
  console.time("Timer 1");
  const start = Date.now()

  for (let i = 1; i <= 10; i++) {
    res.push(addNums(i * increment))
    console.log(Date.now() - start)
  }
  console.timeEnd("Timer 1");

  return res
  // Then, add timing code

  // Your code here

}


function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  let res = []

  console.time("Timer 2");
  const start = Date.now()

  for (let i = 1; i <= 10; i++) {
    res.push(addManyNums(i * increment))
    console.log(Date.now() - start)
  }

  console.timeEnd("Timer 2");

  return res

  // Your code here

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);