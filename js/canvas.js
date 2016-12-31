window.addEventListener('load', init, false);

function init() {
    var canvas = undefined;
    var context = undefined;
    canvas = createCanvas();
    context = canvas.getContext('2d');

    var ball = new Ball(0, 400, 5, '#ee3344', context);

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
    this.originY = y;
    this.radius = radius;
    this.color = color;
    this.angle = 1;
    this.waveLength = 0.1;
}

Ball.prototype.render = function render() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2), false);
    this.context.fill();
}

Ball.prototype.update = function update() {

    //range of values from -5 to 5
    this.movement = Math.sin(this.angle) * 5;

    this.y += this.movement;
    this.x += 2;
    this.angle += this.waveLength;

    if (this.x > window.innerWidth) {
        this.x = 0;
        this.color = 'rgb(' + myramdon(100, 255) + ',' + myramdon(0, 100) + ',' + myramdon(0, 100) + ')';
        this.waveLength = myramdon(1, 10) / 10;
    }

    this.render();
}

function myramdon(min, max) {
    return (Math.random() * (max - min + 1) | 0) + min;
}  