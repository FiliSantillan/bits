import React, { useState } from "react";

let Counter = () => {
    const [counter, setCount] = useState(0);

    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => setCount(counter + 1)}>Click Me!</button>
        </div>
    );
};

export default Counter;
