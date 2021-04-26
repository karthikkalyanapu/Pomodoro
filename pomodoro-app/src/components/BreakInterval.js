import React from 'react';
import ReactDOM from 'react-dom';

function BreakInterval(props){
   function decrement(){
     if(props.BreakInterval === 1) {
       return;
     }
     props.decreaseBreak();
   }

   function increment(){
     if(props.BreakInterval === 60) {
      return;
    }
    props.increaseBreak();
   }
 return(
   <section>
     <h4>Break Length</h4>
   <section id="break-label">
     <button disabled={props.isPlay === true ? "disabled" : ""} onClick={decrement} id="break-decrement">Down</button>
     <p id="break-length">{props.breakInterval}</p>
     <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increment} id="break-increment">Up</button>
     </section>
   </section>
 )
}

export default BreakInterval;