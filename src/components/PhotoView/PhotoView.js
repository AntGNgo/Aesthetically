import React from 'react'

const PhotoView = ({ image }) => {
    return(
        <div className="image">
            <img src={image} alt="" />
        </div>
    )
}

export default PhotoView