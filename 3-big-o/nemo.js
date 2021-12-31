const performance = require('perf_hooks').performance;
const nemo = ["nemo"];

const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill','bloat', 'nigel', 'squirt','darla', 'hank']


function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found nemo!")
    }
  }
  let t1 = performance.now()
  console.log("Call to find nemo took: " + (t1-t0) + " miliseconds");
} 

findNemo(everyone)