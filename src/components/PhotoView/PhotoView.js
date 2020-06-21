import React from 'react'

const PhotoView = ({ image }) => {
    return(
        <div className="image">
            <img src={image} alt="" width='600px' height='auto'/>
        </div>
    )
}

export default PhotoView