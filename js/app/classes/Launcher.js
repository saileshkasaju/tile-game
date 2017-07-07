/**
 * Created by sailesh on 7/7/17.
 */
define(['Game'], function(Game) {
    class Launcher {
        constructor(_title, _width, _height) {
            var game = new Game(_title, _width, _height);
            game.start();
            document.title = _title;
        }
    }


    return Launcher;
});