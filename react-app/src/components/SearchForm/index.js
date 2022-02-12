import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Search.css'

function SearchForm() {
    const [query, setQuery] = useState("");
    const [errors, setErrors] = useState([]);
    const [searchBarVis, setSearchBarVis] = useState(true)
    const [success, setSuccess] = useState("");
    const history = useHistory()

    const enterSubmit = (e) => {
        const key = e.code;

        if (key === 'Enter' || key === 'NumpadEnter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        setErrors([]);
        if (query.length < 2 || query.length > 16) {
            setSearchBarVis(false)
            setErrors(["Query must be between 2 and 16 characters!"])
            setTimeout(() => {
                setSearchBarVis(true);
                setErrors([]);
            }, 500);
        }
        else {
            setSearchBarVis(false)
            setSuccess("Searching...!")
            setTimeout(() => {
                setSearchBarVis(true);
                setSuccess("");
            }, 500);
            history.push(`/search?${query}`)
            setQuery("")
        }
    };

    return (
        <>
            <div className="search">
                {searchBarVis ?
                    <><input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                        placeholder="SEARCH"
                        onKeyPress={(e) => enterSubmit(e)}
                    />
                        <div className="td" id="s-cover">
                            <button className="butt" type="submit" onClick={handleSubmit}>
                                <div id="s-circle"></div>
                                <span className="span"></span>
                            </button>
                        </div>
                    </> :
                    <div className="">{success}{errors}</div>}
            </div>
        </>
    )
}

export default SearchForm
