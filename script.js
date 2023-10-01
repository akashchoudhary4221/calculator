// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if (e.target.innerHTML == 'C') {
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target)
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })






let string = "";
let buttons = document.querySelectorAll('.button');
let clearBtn = document.querySelector('.clsBack');
Array.from(buttons).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
clearBtn.addEventListener('click', () => {
    let arr = string.split("");
    arr.pop();
    string = arr.join("");
    document.querySelector('input').value = string;
})




