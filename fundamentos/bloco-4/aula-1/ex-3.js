const a = 5
const b = 2
const c = 7

function maior (a,b) {
if (a >= b && a>=c){
    return a
} else if (b >= c){
    return b
}else{
    return c
}
}

console.log (maior(9,11,15))