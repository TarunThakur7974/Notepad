import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import obj from '../features/Auth/extrareducer';
const { createData } = obj
const CreateNote = ({ userId, check }) => {
    const [formData, setFormData] = useState({ title: "", description: "" });

    const { title, description } = formData
    const dispatch = useDispatch();
    const save = (e) => {
        e.preventDefault();
        let obj = { userId: check ? check : typeof (userId) === "object" ? userId._id : userId, title, description }
        dispatch(createData(obj))
        setFormData({
            title: "",
            description: "",
        });
    };
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
