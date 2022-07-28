import Header from "~/Components/Main/Header";
import PostItem from "~/Components/posts/PostItem";

import testImage from '~/images/mian.jpg'

export default function Index() {
  return (
    <>
      <Header />
      <div className="container postsExplore-container">
        <PostItem 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        id={1} 
        image={testImage} 
        title="test" />
         <PostItem 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        id={1} 
        image={testImage} 
        title="test" />
         <PostItem 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        id={1} 
        image={testImage} 
        title="test" />
      </div>
    </>
  );
}
