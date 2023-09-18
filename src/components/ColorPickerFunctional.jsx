import React from 'react';

export default function ColorPickerFunctional({ initialColor }) {
    const [color, setColor] = React.useState(initialColor);

    const updateBackground = (newColor) => {
        const [body] = document.getElementsByTagName('body');
        body.style.backgroundColor = newColor;
    }

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        updateBackground(newColor);
    }

    return(
        <>
            <div>
                <input onChange={(e) => handleColorChange(e)} type="color" id="backcolor" name="backcolor" value={color} />
                <label htmlFor="backcolor">Choose a background color</label>
            </div>
        </>
    )
}