import React from 'react'


const Input = ({ onChange, imageSubmit }) => {
    return (
        <div>
            <form className="form">
                <input type="text" onChange={onChange} placeholder="Enter image url..."/>
                <button onClick={imageSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Input