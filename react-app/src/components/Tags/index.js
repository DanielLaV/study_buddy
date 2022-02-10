import React from "react";
import { useDispatch } from 'react-redux';
import * as tagActions from "../../store/tags";
import { NavLink } from "react-router-dom";

function Tags({tag, isOwner=false}) {
    const dispatch = useDispatch();
    const submitDelete = () => {
        dispatch(tagActions.removeTag(tag.id))
    }
    return (
        <div className='tag-div'>
            <NavLink to={`/tags/${tag.id}`}>
                {tag.name}
            </NavLink>
            {isOwner &&
                <button type="button" onClick={(e) => submitDelete()}>Delete</button>
            }
        </div>
    )
}

export default Tags
