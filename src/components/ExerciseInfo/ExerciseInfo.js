import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ExerciseInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {timeRemain, timePass, mistakes, length, stats, totalLength} = this.props;
    return (
      <div>
        <div>Осталось времени: {timeRemain}</div>
        <div>Прошло времени: {timePass}</div>
        <div>Кол-во ошибок: {mistakes}</div>
        <div>Осталось символов: {length}</div>
        {(stats >= 0) && <div>Количество правильных: {stats} из {totalLength}</div>}
      </div>
    );
  }
}

ExerciseInfo.propTypes = {
  timeRemain: PropTypes.number,
  timePass: PropTypes.number,
  mistakes: PropTypes.number,
  length: PropTypes.number,
  stats: PropTypes.number,
  totalLength: PropTypes.number,
};