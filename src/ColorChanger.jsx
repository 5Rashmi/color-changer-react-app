import React, {useState} from "react";

function ColorChanger(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChanger(event){
        setColor(event.target.value);
    }
    return(
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select Color: </label>
        <input type="color" value={color} onChange={handleColorChanger}></input>
    </div>
    )
}
export default ColorChanger