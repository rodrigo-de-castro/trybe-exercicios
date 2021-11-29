const custo = -30;
const venda = 100;
let custoTotal = custo + 0.2*custo;
let lucro = (venda - custoTotal)*1000;

if (custo >= 0 && venda >=0){
console.log (lucro)}else{
    console.log ("Erro: o valor deve ser maior que zero")
}