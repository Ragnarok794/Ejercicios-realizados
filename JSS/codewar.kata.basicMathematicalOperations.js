function basicOp(operation, value1, value2)
{switch(operation) {
    case '+' : return value1 + value2;
    case '-' : return value1 - value2;
    case '*' : return value1 * value2;
    case '/' : return value1 / value2;
}
}
const prueba = basicOp('*',4, 7)
console.log(prueba)