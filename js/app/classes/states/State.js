/**
 * Created by sailesh on 7/8/17.
 */
define([], function() {
   let currentState = null;

   class State {
       constructor(_handler) {
           this.handler = _handler;
       }

       tick(_dt) {

       }
       render() {

       }
   }

   State.getState = function() {
       return currentState;
   };
   State.setState = function(_state) {
       currentState = _state
   };

   return State;
});