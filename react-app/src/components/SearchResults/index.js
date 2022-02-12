import { getResults } from "../../store/search";
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Deck from "../DecksPage/Deck";
import * as studyDeckActions from "../../store/decks_studying";
import CardBodyModal from "../CardModal";
import SearchCardBodyModal from "../SearchCardModal";

function SearchResults() {
    const dispatch = useDispatch();
    const { pathname, search } = useLocation()
    const userId = useSelector(state => state.session.user.id)
    const decks = useSelector(state => { if (state.search.decks) return Object.values(state.search.decks) })
    const cards = useSelector(state => { if (state.search.cards) return Object.values(state.search.cards) })
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
<<<<<<< HEAD
        results = [results, (
            <div className='browsePageContainer'>

            <div className="browseDecks" > 
                <div className="browseDecksTitleContainer">

                    <h1 className="browseDecksTitle">Decks that Contain "{`${query}`}"</h1>
                </div>
                <div className="deckDisplay" >

                    <div className='allDecks'>
                        {decks?.map(deck =>
                            <NavLink className="eachDeck" to={`/decks/${deck.id}`} key={deck.id}>
                                <Deck deck={deck} studyDecks={studyDecks} />
                            </NavLink>)}
                    </div>
                </div >
                <div className="browseDecksTitleContainer">
                        <h1 className="browseDecksTitle">Cards that Contain "{`${query}`}"</h1>
                </div>
                <div className="deckDisplay" style={{marginBottom:'55px'}}>
                    <div className='allDecks'>
                            {cards?.map((card) => {
                                return (<div className="eachDeck">
                                    <SearchCardBodyModal card={card} key={card.id} />
                                    {/* <CardBodyModal card={card} key={card.id} /> */}
                                </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            </div>
        )]

=======
        // results = [results, (
        //     <>
        //         <div className='cardPageContainer'>
        //             <div className="deckIdPage">
        //                 <div className="deckNameContainer">
        //                     <h1 className="result-title">Decks that Contain "{`${query}`}"</h1>
        //                     <div className="deckDisplay" >
        //                         {/* <div className='allDecks'>
        //                             {decks?.map(deck =>
        //                                 <NavLink className="eachDeck" to={`/decks/${deck.id}`} key={deck.id}>
        //                                     <Deck deck={deck} studyDecks={studyDecks}/>
        //                                 </NavLink>)}
        //                         </div> */}
        //                     </div>
        //                 </div>
        //             </div >
        //         </div>
        //     </>
        // )]
>>>>>>> main
    }
    return results
}


export default SearchResults

// <div className="deckDisplay">
//                     <div className='allDecks'>
//                         <h1 className="browseDecksTitle">Cards that Contain "{`${query}`}"</h1>
//                         <div>
//                             {cards?.map((card) => {
//                                 return (<div className="eachDeck">
//                                     <SearchCardBodyModal card={card} key={card.id} />
//                                     {/* <CardBodyModal card={card} key={card.id} /> */}
//                                 </div>
//                                 )
//                             })}
//                         </div>
//                     </div>
//                 </div>
