import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as tagActions from "../../store/tags";
import { NavLink, useParams } from "react-router-dom";
import './Tags.css'

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
    <div>

        <div className='tag-div'>
            <NavLink className='tagLink' to={`/tags/${tag.id}`}>
                {`#${tag.name}`}
            </NavLink>
            {isOwner &&

                <input type="image" className="tagDelete" src="/trash.png" alt="text" onClick={(e) => submitDelete()} to="#" ></input>

            }
        </div>
    </div>
        {/* <div>{success}</div> */}
        </>
    )
}

export default Tags
