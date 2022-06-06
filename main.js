const askText = document.createElement('h1');
askText.innerText = '請輸入想要幾X幾的畫布：';
document.body.appendChild(askText);

//輸入框跟確定鈕
const askDiv = document.createElement('div');
document.body.appendChild(askDiv);
const enterBox = document.createElement('input');
askDiv.appendChild(enterBox);
const enterBtn = document.createElement('button');
enterBtn.innerText = '確定';
askDiv.appendChild(enterBtn);

enterBtn.onclick = getNumber;


//一個容器用來裝需要的divs
let container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

//創造divs放進容器
/*for (i = 0; i< 16*16; i++) {
    let cell = document.createElement('div');
    cell.innerText = (i + 1);
    container.appendChild(cell).className = 'grid-item';
}*/

//判斷輸入框的值
function getNumber() {
    if(enterBox.value %1 === 0 && enterBox.value != ''){
        console.log('整數');
        container.style = `grid-template-columns: repeat(${enterBox.value}, 1fr)`;
        for (i = 0; i< enterBox.value*enterBox.value; i++) {
            let cell = document.createElement('div');
            cell.innerText = (i + 1);
            container.appendChild(cell).className = 'grid-item';
        }

        let cells = document.getElementsByClassName('grid-item');
        for (k = 0; k < cells.length; k++) {
            cells[k].addEventListener('mouseenter', changeColor)
        }

    }else {
        console.log('不是整數');
    }
}


//改顏色的函式
function changeColor(e) {
    console.log(e);
    e.target.style.backgroundColor = 'skyblue';
}