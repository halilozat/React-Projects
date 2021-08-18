import React from 'react'

function TextArea() {
    return (
        <form>
            <textarea id="react" name="react" className="textArea" cols="50" rows="10" />
            <br />
            <div className="inputRadio">
                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
                <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            </div>
            <div >
                <button className="inputButton">Submit</button>
            </div>
        </form>
    )
}

export default TextArea
