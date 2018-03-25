import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Symbol } from './Symbol';
import { ExerciseInfo } from '../ExerciseInfo';

import './Exerciser.scss';

export class Exerciser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.onkeydown = this.props.pressButtonHandler;
  }

  componentWillUnmount() {
    document.onkeydown = null;
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.stringData.array.length === 0) {
      this.onClickFinish();
    }
  }

  onClickFinish = () => {
    this.props.onClickFinish();
  };

  render() {
    const { stringData } = this.props;
    return (
      <div className='exerciser'>
        <ExerciseInfo timeRemain={stringData.timeRemain}
                      timePass={stringData.timePass}
                      mistakes={stringData.mistakes}
                      length={stringData.array.length}
        />
        <div className='test-phrase-wrap'>
          {stringData.array.map((symbol, index) => {
            if (stringData.mistake && index === 0) {
              return <Symbol key={index} symbol={symbol} redMarker={true}/>
            }
            if (index === 0) {
              return <Symbol key={index} symbol={symbol} grayMarker={true}/>
            }
            return <Symbol key={index} symbol={symbol}/>
          })}
        </div>
        <button className='finish-button' onClick={this.onClickFinish}>Закончить</button>
      </div>
    );
  }
}

Exerciser.propTypes = {
  stringData: PropTypes.shape({
    array: PropTypes.array,
    mistake: PropTypes.bool,
    mistakes: PropTypes.number,
    stats: PropTypes.number,
    strLength: PropTypes.number,
    timeRemain: PropTypes.number,
    timePass: PropTypes.number,
  }),
  pressButtonHandler: PropTypes.func,
  onClickFinish: PropTypes.func,
};