import React from 'react';
import {ReactComponent as SearchIcon} from '../Images/search.svg'
import './search_box.css';



const Search_box = () => {
    return (
    <div className="search_box">
        <input type ='text' placeholder = '  Search for username' className = 'search_text'/>
        <SearchIcon className='search_icon'/>
    </div>
    );
}
export default Search_box;