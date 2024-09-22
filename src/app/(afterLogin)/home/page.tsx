import React from 'react';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import PostForm from './_component/PostForm';

const page = () => {
  return (
    <main className="w-[600px] border-[rgb(239,243,244)] border-r border-l border-solid flex flex-col items-stretch">
      <TabProvider>
        <Tab/>
        <PostForm />
        {/* <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/> */}
      </TabProvider>
    </main>
  )
};

export default page;