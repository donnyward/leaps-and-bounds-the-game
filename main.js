var screen = document.getElementById('screen');
var context = screen.getContext('2d');

const boxLength = 32;
var blocks = [[0, 0, 0, 1, 0, 0, 0, 1],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 1, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0],
              [1, 1, 1, 1, 0, 0, 0, 0]];
var playerX = 0;
var playerY = 6;

function draw() {
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

draw()
