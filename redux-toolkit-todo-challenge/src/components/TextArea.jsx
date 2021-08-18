import React from 'react'
import './textArea.scss'

function TextArea() {
    return (
        <form>
            <div className="buttonInText">
                <textarea id="react" name="react" className="textArea" cols="50" rows="10" />
                <button className="inputButton">Submit</button>
            </div>

            <div className="custom-radios">

                <div>
                    <input type="radio" id="color-1" name="color" value="color-1" checked />
                    <label htmlFor="color-1">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                    </label>
                </div>

                <div>
                    <input type="radio" id="color-2" name="color" value="color-2" />
                    <label htmlFor="color-2">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                    </label>
                </div>

                <div>
                    <input type="radio" id="color-3" name="color" value="color-3" />
                    <label htmlFor="color-3">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                    </label>
                </div>

                <div>
                    <input type="radio" id="color-4" name="color" value="color-4" />
                    <label htmlFor="color-4">
                        <span>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                        </span>
                    </label>
                </div>
            </div>
            <br />
            <br />


            <div className="box" style={{ marginTop: "10px !important" }}>
                <div className="greenBox"></div>
                <div className="blueBox"></div>
                <div className="yellowBox"></div>
                <div className="redBox"></div>
            </div>
        </form>
    )
}

export default TextArea
