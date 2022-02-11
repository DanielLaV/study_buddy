const ADD_BIO = 'ADD_BIO';


export const addNewBio = newBio => {
  return {
    type: ADD_BIO,
    payload: newBio
  }
}


export const editBio = user => async (dispatch) => {
  // console.log('About to fetch')
  const res = await fetch(`/api/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)

  })
  console.log(res);

  const data = await res.json();
  if (res.ok) {
    dispatch(addNewBio(data));
  }
  return data;
}


/* ----- REDUCER ------ */
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_BIO: {
      const newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
