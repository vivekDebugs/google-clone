import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Search.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import Button from '@material-ui/core/Button'
import { useStateValue } from '../StateProvider';
import { SET_TERM } from '../reducer';

const Search = ({ hideButton = false }) => {
    const [input, setInput] = useState('')
    const [{ term }, dispatch] = useStateValue()
    console.log(term)
    
    const history = useHistory()
    const handleSearch = e => {
        e.preventDefault()

        dispatch({
            type : SET_TERM,
            term : input
        })

        history.push('/search')
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className='search__inputIcon' />
                <input type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                spellCheck='false'
                />
                <MicIcon />
            </div>
            <div className={!hideButton ? 'search__buttons' : 'search__buttons_hidden'}>
                <Button type='submit' variant='outlined'
                onClick={e => handleSearch(e)}
                >Google Search</Button>
                <Button variant='outlined' >I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search