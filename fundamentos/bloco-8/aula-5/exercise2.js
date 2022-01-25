const sum = (...elements) => elements.reduce ((acc, number) => {return number + acc})

console.log (sum(1,2,3,4,10));