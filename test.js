function someFn(word) {
  let newWord = word.toLowerCase().split('')
  let rep = newWord[0].toUpperCase()
  newWord[0] = rep
  return newWord.join('')
}

function sayHi(name) {
  let lowerName = name.toLowerCase()
  if (lowerName == 'mark') {
    return `Hi ${someFn(lowerName)}`
  }
  return `Hello ${someFn(lowerName)}`
}

// console.log(sayHi('Mark'))

function filterString(list, len) {
  let newList = []
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    if (element.length <= len) {
      newList.push(element)
    }
  }
  return newList
}

console.log(filterString(['jo', 'fry', 'memes', 'lo', 'a'], 3))
