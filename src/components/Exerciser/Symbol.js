import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Symbol.scss';

export class Symbol extends Component {
  constructor(props) {
    super(props);
  }

  classes = () => {
    if (this.props.grayMarker) return 'gray-marker';
    if (this.props.redMarker) return 'red-marker';
    return '';
  };

  render() {
    const { symbol } = this.props;
    return (
      <div className='symbol'>
        <p className={this.classes()}>{symbol}</p>
      </div>
    );
  }
}

Symbol.propTypes = {
  symbol: PropTypes.string,
  redMarker: PropTypes.bool,
  grayMarker: PropTypes.bool,
};