
const leftDiv = document.querySelector(".sidelineLeft");
const canvasLeft = document.querySelector("#leftSide");
const contextLeft = canvasLeft.getContext("2d");
const rightDiv = document.querySelector(".sidelineRight");
const canvasRight = document.querySelector("#rightSide");
const contextRight = canvasRight.getContext("2d");

canvasLeft.width = leftDiv.width;
canvasLeft.height = leftDiv.height;
canvasRight.width = rightDiv.width;
canvasRight.height = rightDiv.height;
let brickArray = [];

class Brick{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 1;
        this.img = "redBrick.jpg";
        this.opacity = 1;
    }
    draw(){
        contextLeft.save();
        contextLeft.globalAlpha = this.opacity;
        contextLeft.translate(100,100);



        // contextLeft.restore();
    }

    update(){
        // this.size -= 0.05;
    }
}

function spawnBrick(){
    brickArray.push(new Brick());
}

function init(){
    brickArray = [];
}

function animate(){
    requestAnimationFrame(animate);
}

// function colorRect(leftX,topY,width,height,drawColor) {
// 	contextRight.fillStyle = drawColor;
// 	contextRight.fillRect(leftX,topY,width,height);
// }

document.addEventListener("mousedown", spawnBrick);
init();
animate();