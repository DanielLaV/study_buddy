import './ProfilePage.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import * as deckActions from "../../store/decks";



function ProfilePage() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id);
    const userPage = useParams().userId;
    const studyDecks = useSelector(state => state.studyDecks);

    useEffect(() => {
        dispatch(deckActions.getDecks());

    }, [dispatch]);



    return (
        <div className='profilePage'>

        </div>
    )

}

export default ProfilePage;
