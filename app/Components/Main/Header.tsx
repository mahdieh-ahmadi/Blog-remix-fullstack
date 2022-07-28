import style from './Header.css'
import {Helmet} from "react-helmet";

const Header =  () => {

    return (
        <>
        <Helmet>
            <link rel='stylesheet' href={style} />
        </Helmet>
        <div className='container mainPage-container'>
            <h1 className='main-title'>
                Discover Various news, <br/> article & podcast
            </h1>
            <p className='paragraph mainPage-paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta laborum ut, consequuntur ipsum rerum quasi quod . 
            </p>
            <button className='btn mainPage-btn'>
                explore All
            </button>
        </div>
        </>
    )
}

export default Header