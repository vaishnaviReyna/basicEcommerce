import axios from "axios";

export const getposts = () => async (dispatch) => {
  const result = await axios.get("https://fakestoreapi.com/products")
  dispatch({
    type:"GET_POSTS",
    payload:result.data
  })
}

export const getpost =(id) => async (dispatch)=>{
  const result = await axios.get(`https://fakestoreapi.com/products/${id}`)
  dispatch({
    type:"GET_POST",
    payload:result.data
  })
}
export const updatepost = (post) => async(dispatch) => {
  const result =await axios.put(`https://fakestoreapi.com/products/${post.id}`,post);
  console.log("action", result.data);
  dispatch({
    type:"UPDATE_POST",
    payload:result.data,
  })
}

export const deleteposts = (id) => async (dispatch) => {
  const results =  await axios.delete(`https://fakestoreapi.com/products/${id}`);
  dispatch({
    type:"DELETE_POSTS",
    payload:id
  })
}

// export const addtodo = (payload) => {
//   return {
//     type: "ADD_TODO",
//     payload:{
//         id:new Date().getTime().toString(),
//         data:payload
//     }
//   };
// };

// export const deletetodo = (payload) => {
//   return {
//     type: "DELETE_TODO",
//     payload
//   };
// };

// export const deletealltodo = () => {
//   return {
//     type: "DELETE_ALL_TODO",
//   };
// };
