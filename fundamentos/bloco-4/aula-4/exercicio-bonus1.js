
function romans (letters){
let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let sum = 0;
let numbers = [];

for (let index = 0; index < letters.length; index+=1){
 for (let index2 in values)
    if (letters[index] == index2){
        numbers.push(values[index2])
    } 
}

for (let index3 = 1; index3 < numbers.length; index3+=1){
    if (numbers[index3]>numbers[index3 -1]){
        sum = sum - numbers[index3 -1] 
    } else {
        sum = sum + numbers[index3 -1] 
    }
}
return numbers
}

console.log (romans('IVXLCDM'))

