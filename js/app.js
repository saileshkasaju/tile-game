/**
 * Created by sailesh on 7/7/17.
 */
requirejs.config({
    "baseUrl": "js",
    "paths": {
        //Libs
        "Jquery": "libs/jquery",
        //Classes
        "Display": "app/classes/display/Display",
        "Game": "app/classes/Game",
        "Launcher": "app/classes/Launcher"
    }
});

require(['app/main']);