import React, { Component } from 'react'
import clipboard from './clip.png'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class ColorView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            copied: false
        }
    }

   

    render() {
        const colorList = () => {
            return(
                this.props.colorView.map(color => {
                    return(
                        <div>
                            <div className='copy'>
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
}

export default ColorView

