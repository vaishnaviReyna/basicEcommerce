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
  dispatch({
    type:"UPDATE_POST",
    payload:result.data,
  })
}

export const createposts = (post)=>async (dispatch) => {
  const results =  await axios.post(`https://fakestoreapi.com/products`,post);
  dispatch({
    type:"CREATE_POSTS",
    payload:results.data
  })
}

export const deleteposts = (id) => async (dispatch) => {
  const results =  await axios.delete(`https://fakestoreapi.com/products/${id}`);
  dispatch({
    type:"DELETE_POSTS",
    payload:id
  })
}

