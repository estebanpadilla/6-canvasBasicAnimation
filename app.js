/**
 * Learn to use the requestAnimationFrame.
 * Learn to move shapes.
 */

window.addEventListener('load', init, false);

function init() {

    let width = window.innerWidth;
    let height = window.innerHeight;
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');

    var ball = new Ball(0, height / 2, 50, 'red', context);

    function update() {

        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.update();

        if ((ball.x - ball.radius) > width) {
            ball.x = 0 - ball.radius;
        }

        requestAnimationFrame(update);
    }
    update();
}

function Ball(x, y, radius, color, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
}

Ball.prototype.render = function render() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
    this.context.fill();
}

Ball.prototype.update = function update() {
    this.x += 1;
    this.render();
}