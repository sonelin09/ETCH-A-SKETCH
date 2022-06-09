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
const clearBtn = document.createElement('button');
clearBtn.innerText = '清除';
askDiv.appendChild(clearBtn);


enterBtn.onclick = getNumber;
clearBtn.onclick = clear;

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
    if(enterBox.value %1 === 0 && enterBox.value != '' && enterBox.value <= 64){
        console.log('整數');
        container.style = `grid-template-columns: repeat(${enterBox.value}, ${100/enterBox.value}%)`;
        for (i = 0; i< enterBox.value*enterBox.value; i++) {
            let cell = document.createElement('div');
            //cell.innerText = (i + 1);
            container.appendChild(cell).className = 'grid-item';
        }

        let cells = document.getElementsByClassName('grid-item');
        for (k = 0; k < cells.length; k++) {
            cells[k].addEventListener('mouseenter', changeColor)
        }

    }else if (enterBox.value > 64){
        alert('請輸入小於64的數字');
    }else{
        alert('請輸入數字');
    }
}


//改顏色的函式
function changeColor(e) {
    console.log(e);
    e.target.style.backgroundColor = 'skyblue';
}

//清除現有畫布函式
function clear() {
    let cells = document.getElementsByClassName('grid-item');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    enterBox.innerText = '';
    enterBox.value = '';
}
