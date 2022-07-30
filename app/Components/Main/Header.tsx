import style from './Header.css'
import {Helmet} from "react-helmet";
import { Link } from '@remix-run/react';

import image from '~/images/header.jpg'

const Header =  () => {

    return (
        <>
        <Helmet>
            <link rel='stylesheet' href={style} />
        </Helmet>
        <div className='container mainPage-container'>
            <div className='mainPage-container_image'>
                <img src={image} />
            </div>
            <h1 className='main-title'>
                Discover Various news, <br/> article & podcast
            </h1>
            <p className='paragraph mainPage-paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta laborum ut, consequuntur ipsum rerum quasi quod . 
            </p>
            <Link to='/posts' >
                <button className='btn mainPage-btn'>
                    explore All
                </button>
            </Link>
        </div>
        </>
    )
}

export default Header