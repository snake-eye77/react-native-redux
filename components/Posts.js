import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchpost } from "../action/postAction";
import store from "../store";
import { FETCH_POST } from "../action/type";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentWillMount() {
    fetchpost();
  }
  remove(post) {
    store.dispatch({ type: "REMOVE_CART", payload: post });
    console.log(this.props.posts);
  }

  render() {
    const PostItem = this.props.posts.map(post => (
      <View key={post.id} style={{ flexDirection: "row" }}>
        <Text>{post.name}</Text>
        <TouchableOpacity
          onPress={() => this.remove(post.name)}
          style={{ backgroundColor: "red", marginLeft: 60 }}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    ));
    return <View>{PostItem}</View>;
  }
}
Posts.propTypes = {
  fetchpost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  { fetchpost }
)(Posts);
