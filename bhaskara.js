
//formula normal
function bhaskara (a, b, c, callbackDividir) {
    const x=b*(-1) + Math.sqrt (b**2 -4*a*c);
    const total=callbackDividir(x,(2*a));
    return total
}
function dividir (a,b) {
    return a/b
}
console.log(bhaskara(-1, 6, 7, dividir));

//formula com saída de dois valores

function bhaskara (a, b, c, callbackDividir) {
    const delta= b**2 - 4*a*c
    const x1=b*(-1) + Math.sqrt (delta);
    const x2=b*(-1) - Math.sqrt (delta);
    
    const total1=callbackDividir(x1, 2*a);
    const total2=callbackDividir(x2, 2*a);
    return [total1, total2];
}
function dividir (a,b) {
    return a/b;
}
console.log(bhaskara(-1, 6, 7, dividir));
