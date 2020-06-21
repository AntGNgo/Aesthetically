import React, { Component } from 'react'
import clipboard from './clip.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ColorView = ({ colorView }) => {
        const colorList = () => {
            return(
                colorView.map((color, index) => {
                    return(
                        <div>
                            <div key={index} className='copy'>
                                <h1>{color}</h1>
                                <CopyToClipboard text={color}>
                                    <img src={clipboard} alt=""/>
                                </CopyToClipboard>
                            </div>
                            <div style={{background:color}} className="color-bar"></div>
                        </div>
                    )
                })
            )
        }
        return (
            <div className="color">
            {colorList()}
            </div>
        )
    }

export default ColorView

