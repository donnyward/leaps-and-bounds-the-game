var screen = document.getElementById('screen');
var context = screen.getContext('2d');

const boxLength = 32;
var blocks = [[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
var playerX = 1;
var playerY = 13;
var facing = 1; //1 or -1 (right/left)

function draw() {
    context.clearRect(0, 0, screen.width, screen.height);
    context.strokeRect(0, 0, screen.width, screen.height);

    var i;
    for (i = 0; i < blocks.length; i++) {
        var j;
        for (j = 0; j < blocks[i].length; j++) {
            if (blocks[i][j] == 1) {
                context.fillStyle = 'red';
                context.fillRect(boxLength * j, boxLength * i + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
                context.strokeRect(boxLength * j, boxLength * i + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
            }
        }
    }

    context.fillStyle = 'green';
    context.fillRect(boxLength * playerX, boxLength * playerY + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
    context.strokeRect(boxLength * playerX, boxLength * playerY + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
}

function keyDownHandler(event) {
    const leftArrow = 37;
    const rightArrow = 39;
    const dKey = 68;
    const fKey = 70;
    if (event.keyCode == leftArrow) { //left arrow
        facing = -1;
    } else if (event.keyCode == rightArrow) { //right arrow
        facing = 1;
    } else if (event.keyCode == dKey) {
        playerX = playerX + facing;
    } else if (event.keyCode == fKey) {
        playerX = playerX + (2 * facing);
    }
    draw();
}

function keyUpHandler() {
    console.log('keyUp');
    draw();
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

draw();
