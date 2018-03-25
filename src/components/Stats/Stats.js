import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ExerciseInfo } from '../ExerciseInfo';

import './Stats.scss';

export class Stats extends Component {
  constructor(props) {
    super(props);
  }

  onClickRepeat = () => {
    this.props.onClickRepeat();
  };

  render() {
    const { stringData } = this.props;
    return (
      <div className='stats'>
        <ExerciseInfo timeRemain={stringData.timeRemain}
                      timePass={stringData.timePass}
                      mistakes={stringData.mistakes}
                      length={stringData.array.length}
                      stats={stringData.stats}
                      totalLength={stringData.strLength}
        />
        <button className='button-start-again' onClick={this.onClickRepeat}>Заново</button>
      </div>
    );
  }
}

Stats.propTypes = {
  stringData: PropTypes.shape({
    array: PropTypes.array,
    mistake: PropTypes.bool,
    mistakes: PropTypes.number,
    stats: PropTypes.number,
    strLength: PropTypes.number,
    timeRemain: PropTypes.number,
    timePass: PropTypes.number,
  }),
  onClickRepeat: PropTypes.func,
};