import style from './postItem.css'
import {Helmet} from "react-helmet";
import { Link } from '@remix-run/react';

const PostItem = (props:{
    image:any,
    title:string,
    description: string,
    id:number | string
    createdAt:Date
}) => {

    return (
        <>
        <Helmet>
            <link rel='stylesheet' href={style} />
        </Helmet>
        <div className='postItem'>
            <img className='postItem__image' src={props.image} alt={props.title} />
            <h2 className='secondaryTitle postItem--title'>
                {props.title}
            </h2>
            <p className='paragraph postItem--paragraph'>
                {props.description}
            </p>
            <p className='paragraph postItem--time'>
                {new Date(props.createdAt).toLocaleString()}
            </p>
            <Link to={`/posts/${props.id}`} >
                <button className="btn postItem--btn">
                    read article
                </button>
            </Link>
        </div>
        </>
    )
}

export default PostItem