import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from '../components/Search'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
// import response from '../response'
import './SearchPage.css'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const SearchPage = () => {
    const [{ term = 'tesla' }] = useStateValue()

    const { data } = useGoogleSearch(term)
    // const data = response

    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <NavLink to='/' >
                    <img className='searchPage__logo' 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                    alt="google-logo" />
                </NavLink>
                <div className="searchPage__headerBody">
                    <Search hideButton />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div>
                                <SearchIcon />
                                <NavLink to='/all' >All</NavLink>
                            </div>
                            <div>
                                <DescriptionIcon />
                                <NavLink to='/news' >News</NavLink>
                            </div>
                            <div>
                                <ImageIcon />
                                <NavLink to='/all' >Images</NavLink>
                            </div>
                            <div>
                                <LocalOfferIcon />
                                <NavLink to='/news' >Shopping</NavLink>
                            </div>
                            <div>
                                <RoomIcon />
                                <NavLink to='/all' >Map</NavLink>
                            </div>
                            <div>
                                <MoreVertIcon />
                                <NavLink to='/news' >More</NavLink>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div>
                                <NavLink to='/settings' >Settings</NavLink>
                            </div>
                            <div>
                                <NavLink to='/tools' >Tools</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                term &&
                <div className="searchPage__results">
                    <p className="searchPage__resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime} seconds) for '{term}'
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img src={item.pagemap?.cse_image[0]?.src} alt="" />
                                )}
                                {item.displayLink} 
                            </a>
                            <a href={item.link} className='searchPage__resultTitle'>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchPage
