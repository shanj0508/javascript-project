import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

let _state = [];
let index = 0;

function myUseState(initialValue) {
    const currentIndex = index;
    index += 1;
    _state[currentIndex] = _state[currentIndex] || initialValue;
    const setState = newState => {
        _state[currentIndex] = newState;
        render();
    };
    return [_state[currentIndex], setState];
}

// 教学需要，不用在意 render 的实现
const render = () => {
    index = 0;
    ReactDOM.render(<App/>, rootElement);
};

function App() {
    const [n, setN] = myUseState(0);
    const [m, setM] = myUseState(0);
    console.log(_state);
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={() => setN(n + 1)}>+1</button>
            </p>
            <p>{m}</p>
            <p>
                <button onClick={() => setM(m + 1)}>+1</button>
            </p>
        </div>
    );
}

ReactDOM.render(<App/>, rootElement);