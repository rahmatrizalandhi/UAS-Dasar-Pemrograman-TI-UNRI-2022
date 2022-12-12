import React from "react";

const Popup = props => {
    return (
    <div className="Prompt-box">
        <div className="box">

            {props.content}
            <button className="btn-close" onClick={props.handleClose}>Batal</button>

        </div>
    </div>)

}

export default Popup;