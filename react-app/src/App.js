import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/Navigation';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import StudyList from './components/StudyList'
import User from './components/User';
import HomePage from './components/HomePage';
import DecksPage from './components/DecksPage';
import DeckIdPage from './components/DeckIdPage';
import Footer from './components/Footer';
import TagPage from './components/TagPage';
import { authenticate } from './store/session';
import StudyListPage from './components/StudyList/StudyListPage';
import SearchResults from './components/SearchResults';
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState('light')
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <div className={theme}>
      <BrowserRouter>
        <NavBar />
        <button className='colorButton'
          onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}
          style={{ position: "fixed", bottom: "40px", left: "15px", backgroundColor: "var(--trimmings)", color: "var(--primary)" }}
        >{theme === 'light' ? "Dark Mode" : 'Light Mode'}
        </button>
        <Switch>
          {/* <ProtectedRoute exact={true} path='/'>
          <UserPage />
        </ProtectedRoute> */}
          <Route exact={true} path='/'>
            {/* <ChangeColor/> */}
            <HomePage />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
            <h1>This is the logged in users profile page</h1>
          </ProtectedRoute>
          <ProtectedRoute path='/decks' exact={true} >
            <DecksPage />
          </ProtectedRoute>
          <ProtectedRoute path='/decks/:deckId' exact={true} >
            <DeckIdPage />
          </ProtectedRoute>
          <ProtectedRoute path='/decks/:deckId/:cardId' exact={true} >
            <h1>This is '/decks/:deckId/:cardId' page that will display the specifc card details </h1>
          </ProtectedRoute>
          <ProtectedRoute path='/user-study-decks/:userId' exact={true} >
            <StudyListPage />
          </ProtectedRoute>
          <ProtectedRoute path='/tags/:tagId' exact={true} >
            <TagPage />
          </ProtectedRoute>
          <ProtectedRoute path='/search'>
            <SearchResults />
          </ProtectedRoute>
          <ProtectedRoute path='/test' exact={true} >
          </ProtectedRoute>
          <Route>
            Page Not Found
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
