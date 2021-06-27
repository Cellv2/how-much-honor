import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import CharacterSheet from "./components/CharacterSheet";

export type SlotActivationStates = {
    shoulder: boolean;
};

const initialSlotActivationState: SlotActivationStates = {
    shoulder: false,
};

function App() {
    const [slotActivationState, setSlotActivationState] =
        useState<SlotActivationStates>(initialSlotActivationState);

    const handleSlotActivation = (event: React.MouseEvent<SVGPathElement>) => {
        const target = event.currentTarget;
        const slotToUpdate = target.dataset.slot as keyof SlotActivationStates;
        const currentState = slotActivationState[slotToUpdate];
        const newState: SlotActivationStates = {
            ...slotActivationState,
            [slotToUpdate]: !currentState,
        };
        setSlotActivationState(newState);
    };

    return (
        <div className="App">
            <CharacterSheet
                handleSlotActivation={handleSlotActivation}
                shoulderSelected={false}
                slotActivationStates={slotActivationState}
            />
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className="App-link"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className="App-link"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className="App-link"
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header> */}
        </div>
    );
}

export default App;
