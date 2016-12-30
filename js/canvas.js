window.addEventListener('load', init, false);

function init() {
    var canvas = undefined;
    var context = undefined;
    canvas = createCanvas();
    context = canvas.getContext('2d');

    function update() {



        //requestAnimationFrame(update);
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