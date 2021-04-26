import React from 'react';
import ReactDOM from 'react-dom';

function SessionInterval(props){
  function decreaseSession(){
    if(props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  function increaseSession(){
    if(props.sessionLength === 60) {
     return;
   }
   props.increaseSession();
  }
 return(
   <section>
     <h4>Session Length</h4>
   <section id="session-label">
     <button disabled={props.isPlay === true ? "disabled" : ""}  onClick={decreaseSession} id="session-decrement">Down</button>
     <p id="session-length">{props.sessionLength}</p>
     <button disabled={props.isPlay === true ? "disabled" : ""} onClick={increaseSession} id="session-increment">Up</button>
     </section> 
   </section>
 )
}

export default SessionInterval;