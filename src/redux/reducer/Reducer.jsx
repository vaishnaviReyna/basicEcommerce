const initialState = {
    posts:[]
}
const Reducer = (state=initialState,{type,payload}) => {
    switch(type){
        case"GET_POSTS":
        return{
            ...state, posts:payload
        }

        case"GET_POST":
        return{
            ...state,posts:payload
        }
        case"UPDATE_POST":
        console.log("state.posts",state);
        console.log("payload",payload);
        // return {
        //     ...state,{...post,{post.name:}}
        // }

        case"DELETE_POSTS":
        const newPost = state.posts.filter((i)=>i.id !== payload )
        return {
            ...state,posts:newPost
        }

        // case"ADD_TODO":
        // const {id,data} = action.payload;
        // return{
        //     ...state,
        //     list:[...state.list,{id:id,data:data}]
        // }
        //  case"DELETE_TODO":
        // const newList =state.list.filter((i)=>i.id !== action.payload )

        //  return{
        //     ...state,list:newList
        //  }
        //  case "DELETE_ALL_TODO":
        //     return {
        //         ...state,list:[]
        //     }
        default:return state;
       
    }

}
export default Reducer;