import { getResults } from "../../store/search";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function SearchResults() {
    const dispatch = useDispatch();
    const { pathname, search } = useLocation()
    const decks = useSelector(state => state.decks)
    const cards = useSelector(state => state.cards)
    const [errors, setErrors] = useState([]);
    const query = search.slice(1)
    console.log('query', query)
    useEffect(() => {
        if (query) {
            return dispatch(getResults(query)).then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                }
            );
        }
    }, [dispatch, query])
    let results
    if (!query) {
        results = <div className="">Please use the search bar to search the database!</div>
    }
    else {
        results = (
            <div className="">
                <ul className="error-list">
                    {errors.map((error, idx) => (
                        <li key={idx} className="errors">{error}</li>
                    ))}
                </ul>
                <div className="results">
                    results
                </div>
            </div>
        )

    }
    return (<>{results}</>)
}

export default SearchResults
