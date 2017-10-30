import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  View
} from 'react-native';
import { forms, HS_UI_GREY } from '../styles/common';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applyFocusStyle: null
    };
    this.onFocusField = this.onFocusField.bind(this);
    this.onBlurField = this.onBlurField.bind(this);
  }

  onFocusField() {
    this.setState({ applyFocusStyle: forms.textInputFocus });
  }

  onBlurField() {
    this.setState({ applyFocusStyle: null });
  }

  render() {
    return (
      <View>
        <TextInput
          {...this.props}
          style={[forms.textInput, this.state.applyFocusStyle, this.props.style]}
          onFocus={this.onFocusField}
          onBlur={this.onBlurField}
          placeholderTextColor={HS_UI_GREY}
        />
      </View>
    );
  }
}

FormInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.array
};

export default FormInput;
