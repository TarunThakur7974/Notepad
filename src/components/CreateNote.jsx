import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import obj, { editBlogData } from '../features/Auth/extrareducer';
const { createData } = obj
const CreateNote = ({ userId, check }) => {
    const {Edit} = useSelector(state=>state.auth)
    const [formData, setFormData] = useState({ title: "", description: "" });

    const { title, description } = formData
    const dispatch = useDispatch();
    const save = (e) => {
        e.preventDefault();
        let obj = { userId: check ? check : typeof (userId) === "object" ? userId._id : userId, title, description }
        if(Edit.isEdit){
            dispatch(editBlogData({
                title,description,userId : Edit.obj._id
            }))
          }else{
            dispatch(createData(obj))
          }
        setFormData({
            title: "",
            description: "",
        });
    };

    useEffect(()=>{
        if(Edit.isEdit){
            setFormData({
              title: Edit.obj.title,
              description: Edit.obj.description,
            })
          }
    },[Edit])
    return (
        <>
            <form onSubmit={save} className="my-5">
                <input
                    placeholder="Title"
                    type="text"
                    className="form-control my-2 rounded-0"
                    value={title}
                    onChange={(e) => setFormData({ title: e.target.value, description })}
                    required
                />
                <input
                    placeholder="description"
                    type="text"
                    className="form-control my-2 rounded-0"
                    value={description}
                    onChange={(e) => setFormData({ title, description: e.target.value, })}
                    required
                />
                <button className="w-100 btn btn-success rounded-0" type="Submit">
                    Create
                </button>
            </form>
        </>
    )
}

export default CreateNote
