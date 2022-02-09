import { addOneStudyDeck } from "../../store/decks_studying";
import { useDispatch, useSelector } from 'react-redux';

function AddToStudyList({deck_id, user_id}) {
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addOneStudyDeck(deck_id, user_id))
    }

    return (
    <>
        <button type="button" onClick={(e) => handleSubmit()} className="add-to-study-list">Add</button>
    </>
    )
}

export default AddToStudyList
