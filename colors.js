let rows = 3;
let cols = 3;
let table = document.querySelector('#field');
let counter = document.querySelector('#counter');
let minimum = document.querySelector('#minimum');
let text = document.querySelector('#text')
let colors = ['red', 'green', 'blue'];

for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
        let td = document.createElement('td');
        td.classList.add(randomColor() )
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

function randomColor() {
    let rand = Math.floor(Math.random() * colors.length);
    
    return colors[rand];
}

function changeColor() {
    let i = 0;
    let cells = document.querySelectorAll('td');

    for (let cell of cells) {
        cell.addEventListener('click', function() {
            i++;
            counter.innerHTML = i;
            let cName = this.className;
            
            let arrColor = colors.indexOf(cName);
            if (arrColor == 2) {
                cell.classList.remove('blue');
                cell.classList.add(colors[0]);
                
                isVictory();            
            } else {
                cell.className = '';
                cell.classList.add(colors[arrColor + 1]);
                
                isVictory();
            }
        })
    }
}

function isVictory() {
    let cells = document.querySelectorAll('td');
    let firstClass = cells[0].classList[0];

    for (let i = 1; i < cells.length; i++) {
        if (cells[i].classList[0] !== firstClass) {
            return false;
        }
    }
    alert('You win!');
    text.classList.remove('hidden')
    return true;
}

function minMoves() {
    let cells = document.querySelectorAll('td')
    let red = 0;
    let green = 0;
    let blue = 0;
    
    for (let cell of cells) {
        if (cell.className == 'red') {
            red += 1;
        } else if (cell.className == 'green') {
            green += 1;
        } else if (cell.className == 'blue') {
            blue += 1;
        }
    }
    let colors = [red, green, blue];
    console.log(colors)
    let maxIndex = 0;
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] >= colors[maxIndex]) {
            maxIndex = i;
        }
    }
    let maxElement = colors[maxIndex];

    let sec; 
    let third;
    let minMove;

    for (let j = 0; j < colors.length; j++) {
        if (maxIndex == 0) {
            sec = 2;
            third = 1;
            minMove = colors[sec] + colors[third] * 2;
        } else if (maxIndex == 1) {
            sec = 0;
            third = 2;
            minMove = colors[sec] + colors[third] * 2;
        } else {
            sec = 1;
            third = 0;
            minMove = colors[sec] + colors[third] * 2;
        }
    }
    minimum.textContent = minMove;    
}

minMoves();
changeColor();