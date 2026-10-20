function bhaskara (a, b, c, callbackDividir) {
    const x=b*(-1) + Math.sqrt (b**2 -4*a*c);
    const total=callbackDividir(x,(2*a));
    return total
}
function dividir (a,b) {
    return a/b
}
console.log(bhaskara(-1, 6, 7, dividir));