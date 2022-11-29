const initialState = {
  posts: [],
};
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: payload,
      };

    case "GET_POST":
      return {
        ...state,
        posts: payload,
      };

    case "UPDATE_POST":
    let array2 =[...state.posts]
    array2.find((i)=>i.id == payload.id).title=payload.title;
      return {
        ...state, posts:array2
      };


      case "CREATE_POSTS":
        console.log("pay",payload);
        return {
            ...state, posts:[payload,...state.posts]
          };
    
    case "DELETE_POSTS":
      const newPost = state.posts.filter((i) => i.id !== payload);
      return {
        ...state,
        posts: newPost,
      };
    default:
      return state;
  }
};
export default Reducer;

//  ...state, posts:[...state.posts,{...abc,title:"fgre"}]
