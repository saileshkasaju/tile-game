/**
 * Created by sailesh on 7/7/17.
 */
requirejs.config({
    "baseUrl": "js",
    "paths": {
        //Libs
        "Jquery": "libs/jquery",
        //Classes
        "Launcher": "app/classes/Launcher",
        "Display": "app/classes/display/Display"
    }
});

require(['app/main']);