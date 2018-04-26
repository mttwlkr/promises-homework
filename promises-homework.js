const testNum = (number) => {

  const promProm = new Promise((resolve, reject) => {
    if (number >= 10) {
      resolve(`${number} is greater than 10. Success!`)
    } else {
      reject(`${number} is less than 10. Major Failure!`)
    }
  })
  promProm.then(result => console.log(result))
  promProm.catch(error => console.log(error))
}

testNum(15) // 15 is greater than 10. Success!
testNum(8) // 8 is less than 10. Major Failure!

const makeAllCaps = (array) => {
  const promProm = new Promise((resolve, reject) => {
    const allStrings = array.every( word => {return typeof word === 'string'})
    if (allStrings) {
      const cappedNSorted = array.map(word => {return word.toUpperCase()}).sort()
      resolve(cappedNSorted)
    } else {
      reject(`Major Failure! Only Strings Allowed!`)
    }
  })
  promProm.then(result => console.log(result))
  promProm.catch(error => console.log(error))
}

makeAllCaps(['wowow', 'pants', 'bird']) // [ 'BIRD', 'PANTS', 'WOWOW' ]
makeAllCaps(['wowow', 23, 'bird']) // Major Failure! Only Strings Allowed!

// What is .then() used for, and what is .catch() used for?
// .then details instructions for what to do after the promise has been resolved
// .catch details instructions for what to do after the promise has been rejected

// What are good use cases for Promises?
// any time that asynchronous code may be needed

// What other libraries/functions can you find that uses Promises?
// batteryAPI