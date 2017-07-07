/**
 * Created by sailesh on 7/8/17.
 */
define(function() {
    let ImageLoader = {};
    ImageLoader.loadImage = function(_path) {
        let image = new Image();
        image.src = _path;
        return image
    };

    return ImageLoader;
});