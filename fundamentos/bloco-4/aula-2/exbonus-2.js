let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = numbers.length-2; i>= 0; i-=1){
    for (let j = numbers.length-1; j>i; j-=1){
        if (numbers[i]<numbers[j]){
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers)