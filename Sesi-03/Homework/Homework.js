const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]


const makeAllCaps = (data) => {
    return new Promise((resolve) => {
      const result = data.map(item => {
        if (typeof item === "string") {
          return item.toUpperCase()
        } else {
          return item
        }
      })
        resolve(result)
    })
}

const sortWords = (data) => {
    return data.sort()
}

// result
makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))