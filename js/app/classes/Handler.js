/**
 * Created by sailesh on 7/8/17.
 */
define([], function() {
   let game;

   class Handler {
       constructor(_game) {
           game = _game;
       }

       getWidth() {
           return game.getWidth();
       }
       getHeight() {
           return game.getHeight();
       }
       getKeyManager() {
           return game.getKeyManager();
       }

   }

   return Handler;
});