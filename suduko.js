// user Element
let userAndpass = document.getElementById('userDiv');
let userDiv = document.getElementById('user');
let userN = document.createElement('p');
userDiv.appendChild(userN);
// user Element End..
// password Element
let divPass = document.getElementById('password');
let userP = document.createElement('p');
divPass.appendChild(userP);
// password Element End
// user and password function start
function logIn() {
    let inpUser = document.getElementById('inputUser').value;
    let inpPass = document.getElementById('inputPass').value;
    if (inpUser != 'abcd' || inpPass != '1234') {
        userN.innerHTML = 'Invalid username';
        userP.innerHTML = 'Invalid password';
    }
    if (inpUser == '' || inpUser == 'abcd') {
        userN.innerHTML = ' ';
    }
    if (inpPass == '' || inpPass == '1234') {
        userP.innerHTML = ' ';
    }
    if (inpUser == 'abcd' && inpPass == '1234') {
        level.style.display = 'block'
        userAndpass.style.display = 'none'
    }
}
// user and password function End
// div level Elment
let level = document.getElementById('levelDiv');
// div level Elment

// func for random board 
let randomBorde = [...randomSud()];
function randomSud() {
    let num = Math.floor(Math.random() * 3);
    if (num == 1) {
        return [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];
    }
    if (num == 2) {
        return [
            [9, 1, 4, 7, 8, 2, 3, 6, 5],
            [3, 8, 5, 4, 1, 6, 7, 9, 2],
            [7, 2, 6, 5, 9, 3, 4, 1, 8],
            [8, 9, 2, 6, 3, 7, 5, 4, 1],
            [4, 6, 3, 2, 5, 1, 8, 7, 9],
            [5, 7, 1, 9, 4, 8, 2, 3, 6],
            [1, 4, 8, 3, 2, 9, 6, 5, 7],
            [2, 5, 7, 1, 6, 4, 9, 8, 3],
            [6, 3, 9, 8, 7, 5, 1, 2, 4]
        ];
    }
    else {
        return [
            [9, 5, 1, 8, 4, 3, 6, 7, 2],
            [4, 3, 8, 6, 2, 7, 1, 5, 9],
            [2, 7, 6, 1, 9, 5, 8, 3, 4],
            [1, 9, 5, 3, 8, 4, 7, 2, 6],
            [6, 2, 7, 5, 1, 9, 3, 4, 8],
            [8, 4, 3, 7, 6, 2, 5, 9, 1],
            [7, 6, 2, 9, 5, 1, 4, 8, 3],
            [3, 8, 4, 2, 7, 6, 9, 1, 5],
            [5, 1, 9, 4, 3, 8, 2, 6, 7]
        ];
    }
}
console.log('solution', randomBorde)
// func for random board end
// borde 9X9
let borde = document.getElementById('bordeGame');
let table = document.createElement('table');
function gameBorde() {
    borde.appendChild(table)
    for (let i = 0; i < 9; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr)
        for (let j = 0; j < 9; j++) {
            // td Element
            let td = document.createElement('td');
            tr.appendChild(td);
            if ((j % 9 == 2) || (j % 9 == 5)) {
                td.style.borderRightWidth = '7px';
            }
            if ((i % 9 == 2) || (i % 9 == 5)) {
                tr.style.borderBottomWidth = '7px';
            }
            // td Element
            // input Element
            let inputElement = document.createElement('input');
            td.appendChild(inputElement);
            inputElement.id = `input${[i]}${[j]}`;
            inputElement.maxLength = '1';
            inputElement.setAttribute("onkeypress", "javascript:return isNumber(event)")
            // input Element
        }
    }
}
// borde 9X9
gameBorde()
// func for random sudoku
let borde1 = [];
let matborde = [];
function lvlel(lvl) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let randomNum = Math.floor(Math.random() * (81 - 1) + 1);
            let inputElement = document.getElementById(`input${[i]}${[j]}`);
            if ((randomNum <= lvl)) {
                inputElement.value ='';
                inputElement.style.opacity = '85%';
                inputElement.style.backgroundColor = '#ddbd0a';
            }
            else {
                inputElement.value = randomBorde[i][j];
                inputElement.disabled = true;
                inputElement.style.backgroundColor = '';
            }
            borde1.push(inputElement.value);
           
        }
        console.log(borde1)
        matborde.push(borde1);
        borde1 = [];
    }
    level.style.display = 'none'
    borde.style.display = 'block'
}
// func for random sudoku

// A function that clears the board
function clearBorde() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let inputElement = document.getElementById(`input${[i]}${[j]}`);
            inputElement.value = matborde[i][j];
        }
    }
}
// End function that clears the board


// function that checks the board
function check() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (document.getElementById(`input${r}${c}`).value != randomBorde[r][c]) {
                alert('Error in filling the board --- Please try again');
                let snd = new Audio('Audio/erro.mp3');
                snd.play();
                return false;
            }
        }
    }
    let snd2 = new Audio('Audio/wowSound.mp3');
    snd2.play();
    return alert('Success, Well Done');
}
// End function that checks the board

// function A function that checks whether it is a number
function isNumber(event) {
    var charCode = event.which
    if (charCode > 32 && (charCode < 49 || charCode > 57)) {
        return false;
    }
}
//   End function A function that checks whether it is a number




// muisc
let bleep = new Audio();
bleep.src = "Audio/h3.mp3";

let bleep2 = new Audio();
bleep2.src = "Audio/h2.mp3";

let bleep3 = new Audio();
bleep3.src = "Audio/clearSound.mp3";
// End muisc

// Event for button
let logBtn = document.getElementById("logBtn");
logBtn.addEventListener('click', (() => logIn()));

let lvl1 = document.getElementById('lvl1');
lvl1.addEventListener('click', (() => lvlel(25)));

let lvl2 = document.getElementById('lvl2');
lvl2.addEventListener('click', (() => lvlel(40.5)));

let lvl3 = document.getElementById('lvl3');
lvl3.addEventListener('click', (() => lvlel(52)));

let Clear = document.getElementById('Clear');
Clear.addEventListener('click', (() => clearBorde()));

let checkB = document.getElementById('check');
checkB.addEventListener('click', (() => check()));
// End event for button...