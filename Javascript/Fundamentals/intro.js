const myArr = [1, 2, 3, 4, 5]

const [one, ...numbers] = myArr
console.log(one, numbers)


const [, , , four] = myArr



console.log(four)






const person = {
    name : "kyle",
    job : "coder",
    home : "Seattle",
    luckyNumbers : [11, 7, 21, 33]
}

const {...personCopy} = person
console.log(personCopy.name === person.name)




const {name : personName, ...everythingElse} = person
console.log(personName, everythingElse)



const { luckyNumbers : [,,twentyOne]} = person
console.log(twentyOne)





const {job : personJob, name, home} = person

console.log(home, personJob, name)




const add2 = function (a,b) {

    return a + b

}


const add3 = (a,b,c) => {
    return a+b+c
} 


console.log(add3(2,2,2))

console.log(add2(2,2))


function sq(x) {
    return x*x
}

console.log(sq)



const sq = x => x*x


console.log(sq(4))































