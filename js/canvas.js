window.addEventListener('load', init, false);

function init() {

    var canvas = undefined;
    var context = undefined;
    canvas = createCanvas();
    context = canvas.getContext('2d');

    var ball = new Ball(0, window.innerHeight / 2, 50, '#ee3344', context);

    function update() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.update();

        requestAnimationFrame(update);
    }
    update();
}


function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.style.let = '0px';
    canvas.style.top = '0px';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = '#b5e2ef';
    document.body.appendChild(canvas);
    return canvas;
}

function Ball(x, y, radius, color, context) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
}

Ball.prototype.render = function render() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
    this.context.fill();
}

Ball.prototype.update = function update() {

    this.x += 1;

    if (this.x > window.width) {
        this.x = 0;
    }

    this.render();
}