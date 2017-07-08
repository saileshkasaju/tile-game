/**
 * Created by sailesh on 7/8/17.
 */
define(['ImageLoader', 'SpriteSheet'], function(ImageLoader, SpriteSheet) {

    let DEFAULT_WIDTH = 32,
        DEFAULT_HEIGHT = 32;
    let assets = [];

    class Assets {
        constructor(_name, _path, _width, _height) {
            assets[_name] = this;
            this.name = _name;
            this.path = _path;
            this.width = _width;
            this.height = _height;
            this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        }
    }
    Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
    Assets.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
    Assets.getAssets = function(_name) {
        return assets[_name];
    };

    let ast = new Assets("mario", "res/textures/mario.png", 28, 42);
    ast.idle = ast.sheet.crop(3, 0, 28, 42);

    return Assets;
});