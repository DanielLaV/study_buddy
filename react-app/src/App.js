import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Test from './components/Test';
import DecksPage from './components/DecksPage';
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
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
          <h1>This is the logged in users profile page</h1>
        </ProtectedRoute>
        <ProtectedRoute path='/decks' exact={true} >
          <DecksPage />
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
        <ProtectedRoute path='/test' exact={true} >
          <Test />
        </ProtectedRoute>
        <Route>
            Page Not Found
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
