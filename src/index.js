import foods from "./foods"
import {choice,remove} from "./helpers"


const fruit = choice(foods)
const removeAndGet = remove(foods,fruit)

console.log(`I'd like one ${fruit},please`)
console.log(`Here you go: ${removeAndGet}`)
console.log(`Delicious! May i have another?`)
console.log(`I'm sorry,we're all out,We have ${foods.length} left`)