//activer les fonctionnalités de chaque bouton
//activer les calcules à l'appuie du =
//récupérer le resulat et l'afficher 


//let container = document.querySelector('.calculator');
let clearBtn = document.querySelector('.clear');
let screenDefault = document.querySelector('.screen');
let buttons = document.querySelector('.buttons');
let operator = button.value;
let egal = document.querySelector('.egal');

//activer le button clear
// function clearResult() {
//     clearBtn.value = "";
//     screenDefault.textContent = "0";
// }
// clearBtn.addEventListener('click', clearResult());

buttons.forEach(button => {
    button.addEventListener('click', () => {
            // attribuer value a chaque button
            if (button.classList.contains("digit")) {
                let content = button.value;
                if (screenDefault.textContent == "0") {
                    screenDefault.textContent = content;
                  } else {
                    screenDefault.textContent += content;
                  };
            } else if (button.classList.contains("operator")) {
                // recupère la première valeur
                
              } else if (button.classList.contains("egal")) {
                let curentValue = Number(display.textContent);
                console.log(firtValue, operatorSign, curentValue);
                let res = 0;
                switch (operatorSign) {
                  case "+":
                    res = firtValue + curentValue;
                    break;
                  case "-":
                    res = firtValue - curentValue;
                    break;
                  case "/":
                    res = firtValue / curentValue;
                    break;
                  case "*":
                    res = firtValue * curentValue;
                    break;
          
                  default:
                    res = curentValue;
                    break;
                }
                operatorSign = "";
                display.textContent = res;
              };
            });
        console.log(content);
    })

// let x = button.value;
// });
//calculs
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);
    document.getElementById('result').value = y

    return y

}
egal.addEventListener('click', solve());



// let result ;
// let num ;
// switch (operator) {
//     case 'C':
//         result.innerText = "";
//         break;
        
//     case '+':
//         result += num; 
//         break;

//     case '-':
    
//         break;

//     default:
//         break;
        

//     case '*':
        
//         break;

//     default:
//         break;


//     case '/':
    
//         break;

//     default:
//         break;
// }
// });