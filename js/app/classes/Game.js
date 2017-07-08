/**
 * Created by sailesh on 7/7/17.
 */
define(['Display', 'State', 'GameState', 'KeyManager', 'Handler'], function(Display, State, GameState, KeyManager, Handler) {

    let _this;
    let running = false;
    let title, width, height, g, display, keyManager, handler;
    let gameState, menuState, settingsState;
    class Game {

        constructor(_title, _width, _height) {
            _this = this;
            title = _title;
            width = _width;
            height = _height;
            keyManager = new KeyManager();
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
        getKeyManager() {
            return keyManager;
        }
        getWidth() {
            return width;
        }
        getHeight() {
            return height;
        }
    }
    function init() {
        display = new Display(title, width, height);
        g = display.getGraphics();
        handler = new Handler(_this);
        gameState = new GameState(handler);
        State.setState(gameState);
    }
    function tick(_dt) {
        keyManager.tick();
        if (State.getState() !== null) {
            State.getState().tick(_dt);
        }
    }
    function render() {
        g.clearRect(0, 0, width, height);
        if (State.getState() !== null) {
            State.getState().render(g);
        }
    }

    return Game;
});