import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { createPost } from "../action/postAction";
import store from "../store";
import PropTypes from "prop-types";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  add = e => {
    e.preventDefault();
    const object = {
      name: this.state.name
    };

    store.dispatch({ type: "NEW_POST", payload: object });
  };
  render() {
    return (
      <View>
        <TextInput
          onChangeText={name => this.setState({ name })}
          placeholder="name"
        />
        <Button onPress={this.add} title="ADD" />
      </View>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { createPost }
)(PostForm);
