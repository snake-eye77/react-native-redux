import { FETCH_POST, NEW_POST } from "./type";

const createPost = () => dispatch => {
  alert("postData");
  dispatch({
    type: NEW_POST,
    payload: postData
  });
};

const fetchpost = () => dispatch => {
  dispatch({
    type: FETCH_POST
  });
};

export { fetchpost, createPost };
