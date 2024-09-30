import React, { Component, useState } from "react";

const Test = () => {
    const [x, setX] = useState('');

    return (

        <div>

            <input
                type="text"
                value={x}
                onChange={
                    (event) => setX(event.target.value)
                }
                // event.target: This refers to the HTML element that triggered the onChange event—in this case, the <input> element.
                // event.target.value: This extracts the value property from the target element, which is the current text entered in the <input> element.
            />

        </div>
    );
}

export default Test;
