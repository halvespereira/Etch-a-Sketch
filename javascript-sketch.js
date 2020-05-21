const canvas = document.querySelector('#etch-a-sketch'); 
const ctx = canvas.getContext('2d'); 
const clearButton = document.querySelector('.shake'); 
const MOVE_AMOUNT = 13; 

const width = canvas.width; 
const height = canvas.height; 

let x = Math.floor(Math.random()*width); 
let y = Math.floor(Math.random()*height);

ctx.lineWidth = MOVE_AMOUNT; 
ctx.lineCap = 'round'; 
ctx.lineJoin = 'round'; 

ctx.beginPath(); 
ctx.moveTo(x, y); 
ctx.lineTo(x, y); 
ctx.stroke(); 

function draw({key}) {

    ctx.strokeStyle = 'rgb(0, 0, 0)';

    ctx.beginPath(); 
    ctx.moveTo(x, y); 
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT; break;
        case 'ArrowDown':
            y += MOVE_AMOUNT; break;
        case 'ArrowRight':
            x += MOVE_AMOUNT; break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT; break;
        default: break; 
    }
  
    ctx.lineTo(x, y); 
    ctx.stroke(); 

}

function arrow(e) {
if(e.key.includes('Arrow')) {
    e.preventDefault(); 
    draw({key: e.key});  
    }
}

function restart() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(x, y); 
    ctx.lineTo(x, y); 
    ctx.stroke();  
}

clearButton.addEventListener('click', restart);
window.addEventListener('keydown', arrow); 