import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as tagActions from "../../store/tags";
import { NavLink, useParams } from "react-router-dom";
import './Tags.css'
import Trash from '../../assets/trash.png'

function Tags() {
    const dispatch = useDispatch();
    const { deckId } = useParams()
    const currentUserId = useSelector((state) => state.session.user.id);
    const deckUserId = useSelector((state) => state.decks[deckId].user_id);
    const tags = useSelector((state) => Object.values(state.tags));


    useEffect(() => {
        dispatch(tagActions.getTags(deckId));
    }, [dispatch, deckId])

    const submitDelete = (tagId) => {
        const payload = {
            tag_id: +tagId,
            deck_id: deckId,
            curr_user_id: currentUserId,
            deck_user_id: deckUserId
        }
        return dispatch(tagActions.removeTag(payload));
    }
    return (<>
        <div className='tag-div'>
            {tags.map((tag) => {
                return (<div key={tag.id}>
                    <NavLink className='tagLink' to={`/tags/${tag.id}`}>
                        {`#${tag.name}`}
                    </NavLink>
                    {(currentUserId === deckUserId) &&
                        (<input type="image"
                            className="tagDelete"
                            src={Trash}
                            alt="text"
                            onClick={(e) => {
                                submitDelete(e.target.value)
                            }}
                            to="#"
                            value={tag.id}>
                        </input>)}
                </div>)
            })
            }
        </div>
    </>)
}

export default Tags
