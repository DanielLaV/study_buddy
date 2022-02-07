import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DeleteCardForm({ payload }) {
    const setShowModal = payload;
    // const cardId = state.cards.id
    const submitDelete = () => {
        console.log("delete buttan");
        return
    }

    return (<><h2>Are you sure you want to delete this image?</h2>
        <h3>This cannot be undone.</h3>
        <button type="button" onClick={(e) => submitDelete()} className="dark-button">Yes</button>
        <button type="button" onClick={(e) => setShowModal(false)} className="light-button">No</button>
    </>)
}

export default DeleteCardForm
