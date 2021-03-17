import React from 'react';
import { Link } from 'react-scroll';
import { BiArrowToTop } from 'react-icons/bi'
import './TopScroll.css';

const TopScroll = () => {
    return (
        <div className='top-arrow'>
                <Link to='home' smooth={true} duration={200}><BiArrowToTop /></Link>
            </div>
    );
};

export default TopScroll;