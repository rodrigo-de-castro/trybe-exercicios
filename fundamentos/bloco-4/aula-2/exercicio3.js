let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;
var media = 0;

for (var index = 0; index < numbers.length; index++) {
soma += numbers[index];
}

media = soma/ (numbers.length)
console.log (media);
