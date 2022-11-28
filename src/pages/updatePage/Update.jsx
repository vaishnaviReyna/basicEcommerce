import React, { useEffect, useState } from 'react';
import { useParams,  useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getpost,updatepost} from "../../redux/action/Action";
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

function Update() {
    let navigate  =  useNavigate ();
    const dispatch = useDispatch();
    const{id} = useParams();
    const [title,setTitle] = useState("");
    const posts = useSelector((state)=>state.Reducer.posts)

    useEffect(() => {
      dispatch(getpost(id))
    }, [])

    useEffect(() => {
        if(posts){
            setTitle(posts.title)
        }
      }, [posts])
    const onUpdate =() =>{
        const update_post = {
            id:posts.id,
            title:title
        };
        dispatch(updatepost(update_post));
         navigate('/')
    }
  return (
    <div>
        <h1>update</h1>
        <Input
            label="title"
            type="text"
            names="title"
            values={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
          />
          <Button
              title="update"
              onClick={()=>onUpdate()}
            />
    </div>
  )
}

export default Update;