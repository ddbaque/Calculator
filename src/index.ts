const btn = document.querySelector(".btn") as HTMLButtonElement | null;
const containerResult = document.querySelector(
    ".result"
) as HTMLSpanElement | null;

let numberOne = "";
let numberTwo = "";
let operation = "";
let isOperation = false;

const containerButtons = document.querySelector(
    ".container__buttons"
) as HTMLDivElement | null;

containerButtons?.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const content = target?.textContent;
    let aux = "";
    if (content && content.length == 1) {
        /* numberOne += content    
        containerResult ? containerResult.textContent = numberOne : null */

        if (content == "C") {
            numberOne = "";
            numberTwo = "";
            aux = numberOne;
        } else {
            if (isNumber(content)) {
                if (!isOperation) {
                    numberOne += content;
                    aux = numberOne;
                } else {
                    numberTwo += content;
                    aux = numberTwo;
                }
            } else if (content == "=") {
                let n1 = parseFloat(numberOne);
                let n2 = parseFloat(numberTwo);
                console.log(n1, n2)
                let res = 0;
                switch (operation) {
                    case "+":
                        res = n1 + n2;
                        break;
                    case "/":
                        res = n1 / n2;
                        break;
                    case "*":
                        res = n1 * n2;
                        break;
                    case "-":
                        res = n1 - n2;
                        break;

                    default:
                        break;
                }
                aux = res.toString();
                numberOne = ""
                numberTwo = "";
                isOperation = false
            } else if (content == "%") {
                let n1 = parseInt(numberOne);
                !isOperation ? n1 = n1 : n1 = parseInt(numberTwo)

                n1 /= 100;
                aux = n1.toString();
                !isOperation ? numberOne = aux : numberTwo = aux
            } else {
                console.log("entro", numberOne)
                operation = content;
                console.log(content);
                isOperation = !isOperation;
            }
        }

        containerResult ? (containerResult.textContent = aux) : null;
    }
});

function isNumber(char: string): boolean {
    const codAscii = char.charCodeAt(0);
    if (codAscii >= 48 && codAscii <= 57) return true;
    return false;
}
