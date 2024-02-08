import React, { useEffect } from 'react'
import obj from '../features/Auth/extrareducer'
import { useDispatch } from 'react-redux'
import { edit } from '../features/Auth/authSlice'

const Notes = ({ item }) => {
    const { deleteData } = obj
    const dispatch = useDispatch()
    return (
        <>
            <div className="ok">
                <div className="cardok">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <button className='btn btn-warning btn-sm' onClick={()=>dispatch(edit(item))}>Edit</button>
                    <button className='btn btn-danger  btn-sm' onClick={() => dispatch(deleteData(item._id))}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Notes
