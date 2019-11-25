var screen = document.getElementById('screen');
var context = screen.getContext('2d');

const boxLength = 32;
//1 = block
//2 = goal
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
              [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
              [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
              [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]];
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
                context.fillStyle = 'grey';
                context.fillRect(boxLength * j, boxLength * i + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
                context.strokeRect(boxLength * j, boxLength * i + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
            } else if (blocks[i][j] == 2) {
                context.fillStyle = 'orange';
                context.fillRect(boxLength * j, boxLength * i + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
                context.strokeRect(boxLength * j, boxLength * i + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
            }
        }
    }

    context.fillStyle = 'lime';
    context.fillRect(boxLength * playerX, boxLength * playerY + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
    context.strokeRect(boxLength * playerX, boxLength * playerY + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
}

/*
 * Make an object at (x, y) fall straight down until it hits the bottom of the
 * map or lands on a nonzero block.
 */
function fallY(x, y) {
    while (y < blocks.length) {
        if (blocks[y][x] != 0) {
            break;
        } else {
            y++;
        }
    }
    return y - 1;
}

function leap() {
    destX = playerX + facing;
    /*
     * Leap let's the player jump forward over 1 box. If an overhead box is in
     * the way, can't leap.
     */
    if (blocks[playerY - 1][destX] == 1) {
        //cant move
    } else if (blocks[playerY][destX] == 1) {
        //move on top
        playerX = destX;
        playerY--;
    } else {
        playerX = destX;
        playerY = fallY(playerX, playerY);
    }
}

function bound() {
    var i;
    for (i = 0; i < 2; i++) {
        if (blocks[playerY][playerX + facing] == 0) {
            playerX = playerX + facing;
        } else {
            break;
        }
    }
    playerY = fallY(playerX, playerY);
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
        leap();
    } else if (event.keyCode == fKey) {
        bound();
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
