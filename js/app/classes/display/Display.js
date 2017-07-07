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
           body.innerHTML = (`<canvas id='canvas' width=${this.width} height=${this.height}></canvas>`);
           this.graphics = document.getElementById('canvas').getContext('2d');
       }

       // Getters
       get getTitle() {
           return this.title;
       }

       get getWidth() {
           return this.width;
       }

       get getHeight() {
           return this.height;
       }

       get getGraphics() {
           return this.graphics;
       }
   }

   return Display;
});