import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Exerciser, Stats, Main} from './components';
import {stringValueService} from './services';
import {stringValueActions} from './store/actions';
import './styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStage: true,
      secondStage: false,
      thirdStage: false,
    };
    this.intervalId = null;
  }

  clearWindowInterval() {
    clearInterval(this.intervalId);
    this.setState({
      thirdStage: true,
      secondStage: false,
      firstStage: false,
    })
  }

  onClickStart = () => {
    this.props.dispatch(stringValueActions.beginExercise(stringValueService.genStringValue()));
    this.intervalId = setInterval(() => {
      if (this.props.stringValue.timeRemain > 0) {
        this.props.dispatch(stringValueActions.timerDecrement());
      } else {
        this.clearWindowInterval();
      }
    }, 1000);
    this.setState({
      firstStage: false,
      secondStage: true,
      thirdStage: false,
    });
  };

  pressButtonHandler = (e) => {
    if (e.keyCode < 32) return;
    if (this.props.stringValue.array[0] === e.key) {
      this.props.dispatch(stringValueActions.pressRightKey());
    } else {
      this.props.dispatch(stringValueActions.pressWrongKey());
    }
  };

  onClickFinish = () => {
    this.clearWindowInterval();
    this.setState({
      firstStage: false,
      secondStage: false,
      thirdStage: true,
    });
  };

  render() {
    const {firstStage, secondStage, thirdStage} = this.state;
    return (
      <div className='app-wrapper'>
        {firstStage && <Main onClickStart={this.onClickStart}/>}
        {secondStage && <Exerciser stringData={this.props.stringValue}
                                   pressButtonHandler={this.pressButtonHandler}
                                   onClickFinish={this.onClickFinish}
        />}
        {thirdStage && <Stats stringData={this.props.stringValue}
                              onClickRepeat={this.onClickStart}/>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {stringValue} = state;
  return {
    stringValue,
  };
}

export default connect(mapStateToProps)(App);