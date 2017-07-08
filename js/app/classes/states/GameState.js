/**
 * Created by sailesh on 7/8/17.
 */
define(['State', 'Assets'], function(State, Assets) {

    class GameState extends State {
        constructor() {
            super();
        }
        tick(_dt) {

        }
        render(_g) {
            _g.myDrawImage(Assets.getAssets("mario").idle, 20, 20, Assets.getAssets('mario').width, Assets.getAssets('mario').height);
        }
    }

    return GameState;
});