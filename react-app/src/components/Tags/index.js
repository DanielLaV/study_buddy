import React from "react";
import { useDispatch } from 'react-redux';
import * as tagActions from "../../store/tags";


function Tags({tag, isOwner=false}) {
    const dispatch = useDispatch();
    const submitDelete = () => {
        dispatch(tagActions.removeTag(tag.id))
    }
    return (
        <div>
            <h4>{tag.name}</h4>
            {isOwner &&
                <button type="button" onClick={(e) => submitDelete()}>Delete</button>
            }
        </div>
    )
}

export default Tags
