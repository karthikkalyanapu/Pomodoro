import React from 'react';
import '../components/App.css';
import BreakInterval from './BreakInterval';
import SessionInterval from './Session';
import Timer from './Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay:false
    };
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval= this.onToggleInterval.bind(this);
    this.onUpdateTimer = this.onUpdateTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
  }
  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
       
      }
    })
  }

  onDecreaseBreakLength(){
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength(){
    this.setState((prevState) => {
      return {
       sessionLength: prevState.sessionLength + 1,
       timerMinute:prevState.sessionLength + 1
      }
    })
  }
  onDecreaseSessionLength(){
    this.setState((prevState) => {
      return {
       sessionLength: prevState.sessionLength - 1,
       timerMinute:prevState.sessionLength - 1
      }
    })
  }

  onUpdateTimer(){
    this.setState((prevState) => {
      return {
        timerMinute:prevState.timerMinute -1
      }
    })
  }
  onToggleInterval(isSession) {
    if(isSession) {
      this.setState({
        timerMinute: this.state.sessionLength
      })
    }else{
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
  }
   onResetTimer() {
     this.setState({
       timerMinute:this.state.sessionLength
     })
   }

   onPlayStopTimer(isPlay){
    this.setState({
      isPlay: isPlay
    })
   }

  render() {
    return (
      <main className="container">
        <h1 className="tag">Pomodoro Clock</h1>
        <section className="interval-container">
          <BreakInterval
          isPlay={this.state.isPlay}
           breakInterval={this.state.breakLength} 
           increaseBreak={this.onIncreaseBreakLength} 
           decreaseBreak={this.onDecreaseBreakLength}
           />
          <SessionInterval 
          isPlay={this.state.isPlay}
          sessionLength={this.state.sessionLength}
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
          />
        </section>

        <Timer timerMinute={this.state.timerMinute} 
        breakLength={this.state.breakLength}
        updateTimer={this.onUpdateTimer}
        toggleInterval={this.onToggleInterval}
        resetTimer={this.onResetTimer}
        onPlayStopTimer={this.onPlayStopTimer}
        />
      </main>
    );
  }
}

export default App;
