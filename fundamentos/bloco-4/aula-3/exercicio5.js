let espacosInternos = " ";
let espacosExternos = "";
let n = 5;
let nLinhas = Math.trunc (n/2)
let linhaBase = "";


for (let i = 1; i <= nLinhas; i += 1) {
    espacosExternos = espacosExternos + " ";   
}
console.log (espacosExternos+ "*" + espacosExternos)
espacosExternos = "";

for (let j = nLinhas; j >= 2 ; j -=1) {
    for (let k = j; k>1; k-=1){
    espacosExternos = espacosExternos + " ";
    }
    console.log (espacosExternos + "*" + espacosInternos + "*" + espacosExternos);
    espacosInternos = espacosInternos + "  "
    espacosExternos = ""
    }
    

for (let base = 1; base<=n; base+=1) {
        linhaBase += "*"
    }
        console.log (linhaBase)

