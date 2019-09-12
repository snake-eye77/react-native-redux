import { FETCH_POST, NEW_POST } from "../action/type";

const initialstate = {
  items: [
    { id: 1, name: "joker" },

    { id: 3, name: "sub-zero" },
    { id: 3, name: "scarpion" }
  ],
  item: {}
};
export default function(state = initialstate, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state
      };
    case NEW_POST:
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    case "REMOVE_CART":
      return {
        ...state,
        items: state.items.filter(post => post.name !== action.payload)
      };
    default:
      return state;
  }
}
