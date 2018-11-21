import React from 'react'
import PropTypes from 'prop-types'

const PostItem = ({title, body}) => {
    
    return (

        <div style={{ backgroundColor: "lightblue", margin: '10px', padding: '10px' }}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )

}
PostItem.propTypes = {

    title: PropTypes.string,
    body: PropTypes.string

}
PostItem.defaultProps = {

    title: '',
    body: ''

}


export { PostItem }
