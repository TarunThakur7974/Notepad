import React from 'react'
import { useDispatch } from 'react-redux'
import obj from '../features/Auth/extrareducer'
import { check } from '../features/Auth/authSlice'


const Users = ({ item }) => {
  const { getUserData } = obj
  const dispatch = useDispatch()
  return (
    <div className="ok">
      <div className="cardok">
        <h5 className="card-title">{item.userName}</h5>
        <button className="card-text" onClick={() => {
          dispatch(getUserData(item._id));
          dispatch(check(item._id))
        }} >Check Notes</button>
      </div>
    </div>
  )
}

export default Users
