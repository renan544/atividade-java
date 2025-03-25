var dolar = Number(prompt("digite um valor em dolar"))
var taxaCambio = 5.30
var realConvertido = dolar * taxaCambio
alert(` o valor de US$${dolar} = R$${realConvertido.toFixed(2)}`)