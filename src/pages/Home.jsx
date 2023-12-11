import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notes from "../components/Notes";
import Users from "../components/Users";
import CreateNote from "../components/CreateNote";
import obj from "../features/Auth/extrareducer";
import { allNotesData } from "../features/Auth/authSlice";

const { getUserData } = obj

const Home = () => {
  const { user, userData, isLoading, checkState } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  let dispatch = useDispatch()

  useEffect(() => {
    !user && navigate('/login')
    user && !user.admin && dispatch(getUserData(user._id))
    user && user.allNotes && dispatch(allNotesData())
  }, [user])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (user && userData && userData.length === 0) {
    return (
      <>
        <CreateNote userId={user} check={checkState} />
        <h1>No Notes</h1>
      </>
    )
  }
  if (userData && userData[0].userName) {
    return (
      <>
        {userData ? userData.map((item, i) => <Users key={i} item={item} />) : <h1>No User Found</h1>}
      </>)
  } else {
    return (
      <>
        {userData ? <> <CreateNote userId={userData[0].userId} />{userData.map((item, i) => <Notes key={i} item={item} />)}</> : <h1>No Notes Found</h1>}
      </>
    );
  }
};

export default Home;
