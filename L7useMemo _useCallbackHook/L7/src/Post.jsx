 import React from 'react'

const Post = React.memo(({ value }) =>
{
    console.log("this is post")
   return (
    <>
    <h1>Your name is {value.name}</h1>
    <h1> age is {value.age}</h1>
    </>
   )
})

export default Post;
