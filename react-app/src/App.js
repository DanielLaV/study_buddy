import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <h1>This is the logged in users profile page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/decks' exact={true} >
          <h1>This '/decks' page that will display all of the decks</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/decks/:deckId' exact={true} >
          <h1>This is the '/decks/:deckId' page that will display the specifc deck details</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/decks/:deckId/:cardId' exact={true} >
          <h1>This is '/decks/:deckId/:cardId' page that will display the specifc card details </h1>
        </ProtectedRoute>
        <ProtectedRoute path='/user-study-deck/:deckId' exact={true} >
          <h1>This is '/user-study-deck/:deckId' page that will display the user's Study List </h1>
        </ProtectedRoute>
        <ProtectedRoute path='/tags/:tagId' exact={true} >
          <h1>This is '/tags/:tagId' page that will display the tag search results </h1>
        </ProtectedRoute>
        <ProtectedRoute path='/search-results' exact={true} >
          <h1>This is '/search-results' page that will display the search results </h1>
        </ProtectedRoute>
        <Route>
            Page Not Found
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
