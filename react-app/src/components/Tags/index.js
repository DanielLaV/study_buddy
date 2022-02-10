import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as tagActions from "../../store/tags";
import { NavLink, useParams } from "react-router-dom";

function Tags({tag, isOwner=false}) {
    const dispatch = useDispatch();
    const { deckId } = useParams()
    const currentUserId = useSelector((state) => state.session.user.id);
    const deckUserId = useSelector((state) => state.decks[deckId].user_id);

    const submitDelete = () => {
        const payload = {
            tag_id: tag.id,
            deck_id: deckId,
            curr_user_id: currentUserId,
            deck_user_id: deckUserId
        }
        dispatch(tagActions.removeTag(payload))
    }
    return (<>
        <div className='tag-div'>
            <NavLink to={`/tags/${tag.id}`}>
                {tag.name}
            </NavLink>
            {isOwner &&
                <button type="button" onClick={(e) => submitDelete()}>Delete</button>
            }
        </div>
        {/* <div>{success}</div> */}
        </>
    )
}

export default Tags
