const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');
const zeroBtn = document.getElementById('calc-zero');

const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');
const displayValElement = document.getElementById('calc-display-val');
const pendingElement = document.getElementById('pending-number');

const calcNumBtns = document.getElementsByClassName('calc-btn-num');
const calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

let displayVal = '0';
let pendingVal;
let pendingArray = [];
let evalStringArray = [];

const updateDisplayVal = clickObj => {
  const btnText = clickObj.target.innerText;
  if (displayVal === '0') displayVal = '';
  displayVal += btnText;
  pendingArray.push(btnText);
  pendingElement.innerHTML = pendingArray.join('');
  displayValElement.innerText = displayVal;
};

const performOperation = clickObj => {
  let operator = clickObj.target.innerText;
  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      pendingArray.push('+');
      pendingElement.innerHTML = pendingArray.join('');
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;
    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      pendingArray.push('-');
      pendingElement.innerHTML = pendingArray.join('');
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;
    case 'x':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      pendingArray.push('*');
      pendingElement.innerHTML = pendingArray.join('');
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break;
    case '÷':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      pendingArray.push('/');
      pendingElement.innerHTML = pendingArray.join('');
      evalStringArray.push(pendingVal);
      evalStringArray.push('/');
      break;
    case '=':
      evalStringArray.push(displayVal);
      let evaluation = eval(evalStringArray.join(''));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      pendingArray = displayVal.split('');
      // pendingArray.push(displayVal.split(''));
      pendingElement.innerHTML = pendingArray.join('');
      evalStringArray = [];
      break;
    default:
      break;
  }
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation, false);
}
clearBtn.onclick = () => {
  displayVal = '0';
  pendingArray = [];
  pendingVal = undefined;
  evalStringArray = [];
  pendingElement.innerText = pendingArray;
  displayValElement.innerText = displayVal;
};
backspaceBtn.onclick = () => {
  displayVal = displayVal.slice(0, displayVal.length - 1);
  if (displayVal === '') displayVal = '0';
  pendingArray = pendingArray.slice(0, pendingArray.length - 1);
  pendingElement.innerText = pendingArray.join('');
  displayValElement.innerText = displayVal;
};
decimalBtn.onclick = () => {
  if (!displayVal.includes('.')) {
    displayVal += '.';
    pendingArray.push('.');
  }
  pendingElement.innerText = pendingArray.join('');
  displayValElement.innerText = displayVal;
};
