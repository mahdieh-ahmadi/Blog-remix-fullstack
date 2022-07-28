
import {Helmet} from "react-helmet";
import style from './Footer.css'

const Footer = () => {

    return (
        <>
        <Helmet>
            <link rel='stylesheet' href={style} />
        </Helmet>
        <footer>
            &#169; Designed By Mahdie. 2022
        </footer>
        </>
    )
}

export default Footer