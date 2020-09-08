// Ussing a class

import React, { Component } from "react";

class Counter extends Component {
    state = { counter: 0 };

    render() {
        const { counter } = this.state;

        return (
            <div>
                <span>{counter}</span>
                <button onClick={() => this.setState({ counter: counter + 1 })}>
                    Click +1
                </button>
                <button onClick={() => this.setState({ counter: counter - 1 })}>
                    Click -1
                </button>
            </div>
        );
    }
}

// Using hooks

import React, { useState } from "react";

function Counter() {
    const [counter, setCount] = useState(0);

    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => setCount(counter + 1)}>Click +1</button>
            <button onClick={() => setCount(counter - 1)}>Click -1</button>
        </div>
    );
}
