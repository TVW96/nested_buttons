import React from 'react'

function NestedButtons() {

    const handleOuterClick = (e) => {
        alert('Button has been clicked! (outer button)');
    };
    const handleInnerClick = (e) => {
        e.stopPropagation();
        console.log("Button has been alerted! (inner button)")
    };

    return (
        <div>
            <button onClick={handleOuterClick} style={{ margin: "20px" }}>
                but
                <button onClick={handleInnerClick} style={{ margin: "20px" }}>
                    ton
                </button>
            </button>
        </div>
    )
}

export default NestedButtons