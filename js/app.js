/**
 * Created by sailesh on 7/7/17.
 */
requirejs.config({
    "baseUrl": "js",
    "paths": {
        //Libs
        "Jquery": "libs/jquery",
        //Classes
        "Assets": "app/classes/gfx/Assets",
        "Display": "app/classes/display/Display",
        "Game": "app/classes/Game",
        "GameState": "app/classes/states/GameState",
        "Handler": "app/classes/Handler",
        "ImageLoader": "app/classes/gfx/ImageLoader",
        "KeyManager": "app/classes/input/KeyManager",
        "Launcher": "app/classes/Launcher",
        "SpriteSheet": "app/classes/gfx/SpriteSheet",
        "State": "app/classes/states/State"
    }
});

require(['app/main']);