/**
 * Created by sailesh on 7/8/17.
 */
define([], function() {
   class SpriteSheet {
       constructor(_sheet) {
           this.sheet = _sheet;
       }
       crop(_x, _y, _width, _height) {
           return Object.assign({}, {
               sheet: this.sheet,
               x: _x,
               y: _y,
               width: _width,
               height: _height
           })
       }
   }
   return SpriteSheet;
});