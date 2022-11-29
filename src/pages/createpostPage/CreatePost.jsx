import React, { useState } from 'react'
import { useParams,  useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from '../../components/input/Input';
import slider1 from "../../assets/images/slider1.png";
import Button from '../../components/button/Button';
import shortid from "shortid";
import {createposts} from "../../redux/action/Action";

function CreatePost() {
     const[title,setTitle]= useState("");
     const[price,setPrice]=useState("");
     let navigate  =  useNavigate ();
     const dispatch = useDispatch();

     const onadd= () =>{
    const create_post = {
        // id:shortid.generate(),
        title:title,
        price:price,
        image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
    }
    dispatch(createposts(create_post))
    navigate('/')
     }
  return (
    <div className='w-50 text-center m-5 px-5'>
        <h1>Create Post</h1>
         <img
                  src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                  class="card-img-top"
                  alt="item"
                  width="100px"
                  height="100px"
                />
         <Input
            label="title"
            type="text"
            names="title"
             values={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder="Enter your title"
          />
           <Input
            label="price"
            type="text"
            names="price"
            values={price}
             onChange={(e) => setPrice(e.target.value)}
             placeholder="Enter your price"
          />
            <Button title="add" onClick={() => onadd()} />

    </div>
  )
}

export default CreatePost