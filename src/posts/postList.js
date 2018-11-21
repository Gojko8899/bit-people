import React from 'react'
import { PostItem } from './postItem.js'

const PostList = (props) => {
    // console.log(props)

    const newArray = props.posts.map(function (post) {

        return <PostItem body={post.body} title={post.title} />

    })

    return (
        <div>

            {newArray}

        </div>
    )

}
export { PostList }