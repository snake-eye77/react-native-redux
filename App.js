import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";
import Most from "./Most";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Posts />
        <PostForm />
        <Most />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
