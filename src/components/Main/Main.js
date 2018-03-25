import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    onClickStart = () => {
      this.props.onClickStart();
    };

    render() {
        return (
            <div className='main'>
              <button onClick={this.onClickStart}>Старт</button>
            </div>
        );
    }
}

Main.propTypes = {
  onClickStart: PropTypes.func,
};