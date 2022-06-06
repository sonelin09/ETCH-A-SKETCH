const askText = document.createElement('h1');
askText.innerText = '請輸入想要幾X幾的畫布：';
document.body.appendChild(askText);

const askDiv = document.createElement('div');
document.body.appendChild(askDiv);
const enterBox = document.createElement('input');
askDiv.appendChild(enterBox);
const enterBtn = document.createElement('button');
askDiv.appendChild(enterBtn);

//一個容器用來裝需要的divs
let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

//創造divs放進容器
for (i = 0; i< 16*16; i++) {
    let cell = document.createElement('div');
    cell.innerText = (i + 1);
    container.appendChild(cell).className = 'grid-item';
}

//給divs加上事件監聽器
let cells = document.getElementsByClassName('grid-item');
for (k = 0; k < cells.length; k++) {
    cells[k].addEventListener('mouseenter', changeColor)
}

//改顏色的函式
function changeColor(e) {
    console.log(e);
    e.target.style.backgroundColor = 'skyblue';
}