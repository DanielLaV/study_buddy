import React, { useEffect } from 'react';
import {getUser} from '../store/session'
import { useDispatch, useSelector } from 'react-redux';

function User() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getUser(user.id));
}, [dispatch]);

// useEffect(() => {
//     if (!userId) {
//       return;
//     }
//     (async () => {
//       const response = await fetch(`/api/users/${userId}`);
//       const user = await response.json();
//       setUser(user);
//     })();
//   }, [userId]);
  return (
    <div>
        <h1>{user.username}</h1>
        <p> {user.bio} </p>
    </div>
  );
}
export default User;
