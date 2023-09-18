import React from 'react';

export default class ColorPickerClass extends React.Component {
    constructor() {
        super();
        this.state = {
            color: '#e66465'
        }
    }

    changeBackgroundColor = (newColor) => {
        const [body] = document.getElementsByTagName('body');
        body.style.backgroundColor = newColor;
    }

    handleColorChange = (e) => {
        const newColor = e.target.value;
        this.setState({
            color: newColor
        });
        this.changeBackgroundColor(newColor);
    }

    render() {
        return(
            <>
                <div>
                    <input onChange={(e) => this.handleColorChange(e)} type="color" id="backcolor" name="backcolor" value={this.state.color} />
                    <label htmlFor="backcolor">Choose a background color</label>
                </div>
            </>
        )
    }
}