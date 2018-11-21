import React from 'react'
const PostItem = (props) => {

    console.log(props.title)

    return (

        <div style={{ backgroundColor: "lightblue" }}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}
export { PostItem }
