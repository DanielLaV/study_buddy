import React, { useEffect } from 'react';
import {getUser} from '../store/users'
import { useDispatch, useSelector } from 'react-redux';

function User() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getUser(user.id));
}, [dispatch, user.id]);

  return (
    <div>
        <h1>{user.username}</h1>
        <p> {user.bio} </p>
    </div>
  );
}
export default User;
