var screen = document.getElementById('screen');
var context = screen.getContext('2d');

const boxLength = 32;
//1 = block
//2 = goal
//3 = player
var levels = [[[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
               [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 1, 3, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]],

              [[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
               [1, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1]],

              [[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
               [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
               [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]];
var blocks = levels[0];
var player = getPlayerStart(blocks);
//remove player start so we don't run into a phantom block there
blocks[player.y][player.x] = 0;
var goal = getGoalPos(blocks);

var facing = 1; //1 or -1 (right/left)

function findLastPos(level, val) {
    var px = 0;
    var py = 0;
    var i;
    for (i = 0; i < level.length; i++) {
        var j;
        for (j = 0; j < level[i].length; j++) {
            if (level[i][j] == val) {
                px = j;
                py = i;
            }
        }
    }
    return { x : px, y : py };
}

function getPlayerStart(level) {
    return findLastPos(level, 3);
}

function getGoalPos(level) {
    return findLastPos(level, 2);
}

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
    context.fillRect(boxLength * player.x, boxLength * player.y + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
    context.strokeRect(boxLength * player.x, boxLength * player.y + (screen.height - (boxLength * blocks.length)), boxLength, boxLength);
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
    destX = player.x + facing;
    /*
     * Leap let's the player jump forward over 1 box. If an overhead box is in
     * the way, can't leap.
     */
    if (blocks[player.y - 1][destX] == 1) {
        //cant move
    } else if (blocks[player.y][destX] == 1) {
        //move on top
        player.x = destX;
        player.y--;
    } else {
        player.x = destX;
        player.y = fallY(player.x, player.y);
    }
}

function bound() {
    var i;
    for (i = 0; i < 2; i++) {
        if (blocks[player.y][player.x + facing] == 0) {
            player.x = player.x + facing;
        } else {
            break;
        }
    }
    player.y = fallY(player.x, player.y);
}

function keyDownHandler(event) {
    const leftArrow = 37;
    const rightArrow = 39;
    const dKey = 68;
    const fKey = 70;
    var moved = false;
    if (event.keyCode == leftArrow) { //left arrow
        facing = -1;
    } else if (event.keyCode == rightArrow) { //right arrow
        facing = 1;
    } else if (event.keyCode == dKey) {
        leap();
        moved = true;
    } else if (event.keyCode == fKey) {
        bound();
        moved = true;
    }
    draw();
    if (moved) {
        if (player.x == goal.x && player.y + 1 == goal.y) {
            alert('gg');
        }
    }
}

document.addEventListener('keydown', keyDownHandler, false);
draw();
