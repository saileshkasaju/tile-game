/**
 * Created by sailesh on 7/8/17.
 */
define([], function() {
    let keys = [];

    class KeyManager {
        constructor() {

        }

        tick() {
            // js key code numbers from ASCII
            this.up = keys[87];
            this.down = keys[83];
            this.left = keys[65];
            this.right = keys[68];
        }
    }
    window.onkeydown = function(e) {
        keys[e.keyCode] = true;
    };
    window.onkeyup = function(e) {
        keys[e.keyCode] = false;
    };

    return KeyManager;
});