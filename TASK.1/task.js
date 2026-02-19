const color = ["red", "black", "green"]

console.log(color)

color.push("purple")

console.log(color)

color.pop()

console.log(color)

color.shift()

console.log(color)

color.unshift("feri")

console.log(color)

// const numbers = [1,2,3,4,5,6,7]

// const cangednumbers = numbers.map(function (item){
//     return item * 2
// })

// console.log(cangednumbers)

const numbers = [1,2,3,4,5,6,7]
const evenNumbers = numbers.filter((num)=> {
    return num % 2 === 0
})

console.log(evenNumbers)

// color.includes("red")
console.log(color.includes("red"))

// // color.forEach(C) => {
//     console.log(c)
// }

const index0red = color.index0red("black")
console.log(index0red)

const slicedNumbers = numbers.slice(0,4)
console.log(slicedNumbers)