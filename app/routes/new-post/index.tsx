import style from './NewPost.css'
import {Helmet} from "react-helmet";
import { redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';

import {db} from '~/utils/db.server'

export const action = async ({request}) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')
    const description = form.get('description')
    const fields = {title , body , description}
    const post = await db.pOST.create({data: fields})
    

    return redirect(`/posts/${post.id}`)
}

const NewPost = () => {

    return (
        <>
        <Helmet>
            <link rel='stylesheet' href={style} />
        </Helmet>
        <div className='container'>
        <Form method='post' className='NewPost container'>
            <input className='input' type='text' placeholder="title" name='title' />
            <input className='input' type='text' placeholder="Description" name='description' />
            <textarea className='input textarea' placeholder='Enter your text' name='body' />
            <button type='submit' className='btn btn-primary'>
                Save
            </button>
        </Form>
        </div>
        
        </>
    )
}

export default NewPost