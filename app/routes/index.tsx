import { useLoaderData } from "@remix-run/react";
import Header from "~/Components/Main/Header";
import PostItem from "~/Components/posts/PostItem";

import {db} from '~/utils/db.server'

import testImage from '~/images/mian.jpg'

export const loader = async () => {
  const data = {
    posts: await db.pOST.findMany({
      take: 3,
      select: {
        id: true , title:true, createdAt: true, description: true
      },
      orderBy: {createdAt: 'desc'}
    })
  }

  return data
}

export default function Index() {
  const {posts} = useLoaderData()

  return (
    <>
      <Header />
      <div className="container postsExplore-container">
        {posts?.map((item:{id: number , title:string, description:string , image: string , createdAt:Date}) => (
          <PostItem 
          description={item.description} 
          id={item.id} 
          image={item.image || testImage} 
          title={item.title} 
          createdAt={item.createdAt}
          key={item.id}
          />
        ))}
      </div>
    </>
  );
}
