/**
 * Created by sailesh on 7/7/17.
 */
define([], function() {

   class Display {

       constructor(_title, _width, _height) {
           this.title = _title;
           this.width = _width;
           this.height = _height;
           this.createDisplay();
       }

       createDisplay() {
           document.title = this.title;
           let body = document.body;
           body.innerHTML = (`<canvas id='canvas' width=${this.width} height=${this.height} ></canvas>`);
           this.graphics = document.getElementById('canvas').getContext('2d');
       }

       // Getters
       getTitle() {
           return this.title;
       }

       getWidth() {
           return this.width;
       }

       getHeight() {
           return this.height;
       }

       getGraphics() {
           return this.graphics;
       }
   }

   CanvasRenderingContext2D.prototype.myDrawImage = function(asset, _x, _y, _width, _height) {
       this.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, _x, _y, _width, _height)
   };

   return Display;
});