import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css'


class Button extends Component {
  render() {
    return (
      <div className="buttons">
        <div className="btn add" onClick={this.props.onCreate}>생성</div>
        <div className="btn remove" onClick={this.props.onRemove}>제거</div>
      </div>
    );
  }
}

Button.propTypes = {
  onCreate : PropTypes.func,
  onRemove : PropTypes.func,
};

Button.defaultProps = {
  onCreate : () => console.warn('oncreate not defined'),
  onRemove : () => console.warn('onremove not defined')
}

export default Button;