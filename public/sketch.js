
let value = 0;
let gameY = 400;
let maxBoxNumber = 10;
let boxSize = 0;
class Player{
    constructor(){
        this.leftMostBoxX = window.innerWidth/maxBoxNumber*4;
        this.boxArray = [];
        this.boxArray.push(new Box(this.leftMostBoxX))
    }

}

class Box{
    constructor(x){
        this.x = x;
        this.y = gameY;

    }
}

var p;

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        var newBox = new Box(p.boxArray[0].x - boxSize);
        p.boxArray.unshift(newBox);
        console.log(p.boxArray);
    } else if (keyCode === RIGHT_ARROW) {
        var newBox = new Box(p.boxArray[p.boxArray.length - 1].x + boxSize);
        p.boxArray.push(newBox);
        console.log(p.boxArray);
    }
}
          

function setup(){
    createCanvas(windowWidth, windowHeight)
    boxSize = windowWidth/maxBoxNumber
    gameY = windowHeight - boxSize
    p = new Player()
    background(220)
}

function draw() {
    fill(value);
    let display = touches.length + ' touches';
    text(display, 5, 10);
    p.boxArray.forEach(box => {
        square(box.x, gameY, boxSize);
    })

}