/**
 * Created by sailesh on 7/7/17.
 */
define(['Display', 'Assets'], function(Display, Assets) {

    let _this;
    let running = false;
    let title, width, height, g, display;
    let ast = new Assets("test", "res/textures/mario.png", Assets.DEFAULT_WIDTH, Assets.DEFAULT_HEIGHT);
    let img = ast.sheet.crop(0, 0, 32, 45);
    let img1 = ast.sheet.crop(32, 0, 25, 40);

    class Game {

        constructor(_title, _width, _height) {
            _this = this;
            title = _title;
            width = _width;
            height = _height;
        }

        run() {
            init();
            let fps = 30;
            let timePerTick = 1000/fps;
            let delta = 0;
            let now;
            let lastTime = Date.now();
            let timer = 0;
            let ticks = 0;
            function loop() {
                if (running) {
                    now = Date.now();
                    delta = now - lastTime;
                    timer += delta;
                    lastTime = now;
                }
                if(timer >= timePerTick) {
                    let dt = timer/1000;
                    tick(dt);
                    render();
                    timer = 0;
                }
                window.requestAnimationFrame(loop);
            }
            loop();
        }

        start() {
            if(running) return;
            running = true;
            this.run();
        }
    }
    function init() {
        display = new Display(this.title, this.width, this.height);
        g = display.getGraphics();
    }
    // let img = Assets.loadImage("https://s-media-cache-ak0.pinimg.com/originals/ff/8c/e7/ff8ce7ca004f619b451bd93be3370f6e.jpg");
    function tick(_td) {

    }
    function render() {
        g.clearRect(0, 0, width, height);
        // g.drawImage(img, 20, 20);
        g.myDrawImage(img, 10, 15, 32, 32);
        g.myDrawImage(img1, 40, 15, 32, 32);
    }

    return Game;
});