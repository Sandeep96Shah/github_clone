import React from 'react';
import { FaUserTag, FaGem } from 'react-icons/fa';

const Search = () => {
    return (
        <>
        <div className="search">
            <div className="search_field">
                <p>Filter</p>
                <input 
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="search_option">
                <div className="search_label"><FaUserTag className="icon" /><p>Labels</p></div>
                <div><FaGem className="icon" /><p>Milestones</p></div>
            </div>
            <div className="new_issue"><p>New Issue</p></div>
        </div>
        <div>
            
        </div>
        </>
    )
}


export default Search;