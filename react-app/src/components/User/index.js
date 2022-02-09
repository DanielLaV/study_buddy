import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {
  const [user, setUser] = useState({});
  const user = useSelector(state => state.session.user)


  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <p>Biography</p> {user.bio}
      </li>
    </ul>
  );
}
export default User;
