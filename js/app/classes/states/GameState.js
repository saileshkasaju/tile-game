/**
 * Created by sailesh on 7/8/17.
 */
define(['State', 'Assets'], function(State, Assets) {

    let x = 0;
    let y = 0;
    class GameState extends State {
        constructor(_handler) {
            super(_handler);
        }
        tick(_dt) {
            if (this.handler.getKeyManager().up) {
                y -= 50*_dt;
            }
            if (this.handler.getKeyManager().down) {
                y += 50*_dt;
            }
            if (this.handler.getKeyManager().left) {
                x -= 50*_dt;
            }
            if (this.handler.getKeyManager().right) {
                x += 50*_dt;
            }
        }
        render(_g) {
            _g.myDrawImage(Assets.getAssets("mario").idle, x, y, Assets.getAssets('mario').width, Assets.getAssets('mario').height);
        }
    }

    return GameState;
});