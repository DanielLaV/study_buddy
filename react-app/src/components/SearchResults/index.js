import { getResults } from "../../store/search";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as studyDeckActions from "../../store/decks_studying";

function SearchResults() {
    const dispatch = useDispatch();
    const { pathname, search } = useLocation()
    const userId = useSelector(state => state.session.user.id)
    const [errors, setErrors] = useState([]);
    const studyArr = useSelector(state => Object.values(state.studyDecks))
    const [hasResults, setHasResults] = useState(false)
    const query = search.slice(1)
    useEffect(() => {
        setErrors([]);
        dispatch(studyDeckActions.getStudyDecks(userId));
        if (query) {
            return dispatch(getResults(query.toLowerCase())).then(
                (response) => {
                    if (response.errors) {
                        setHasResults(false)
                        setErrors(response.errors)
                        return
                    }
                    else setHasResults(true)
                }
            );
        }
    }, [dispatch, query, userId, search])
    const studyDecks = []
    studyArr.forEach((studyDeck) => {
        studyDecks.push(studyDeck.id)
        return studyDecks
    })

    let results
    if (!query) {
        results = <div className="">Please use the search bar to search the database!</div>
    }
    else {
        results = [results, (
            <div className="">
                <ul className="error-list">
                    {errors.map((error, idx) => (
                        <li key={idx} className="errors">{error}</li>
                    ))}
                </ul>
            </div>)]
    }
    if (hasResults) {
    }
    return results
}


export default SearchResults
