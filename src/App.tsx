import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import CharacterSheet from "./components/CharacterSheet";
import { SlotActivationStates } from "./types/equipment.types";

const initialSlotActivationState: SlotActivationStates = {
    head: false,
    neck: false,
    shoulders: false,
    back: false,
    chest: false,
    bracers: false,
    gloves: false,
    belt: false,
    legs: false,
    boots: false,
    ring_1: false,
    ring_2: false,
    trinket_1: false,
    trinket_2: false,
    two_hand: false,
    one_hand: false,
    off_hand: false,
    ranged: false,
    libram: false,
};

function App() {
    const [slotActivationState, setSlotActivationState] =
        useState<SlotActivationStates>(initialSlotActivationState);

    const handleSlotActivationToggle = (
        event: React.MouseEvent<SVGPathElement>
    ) => {
        const target = event.currentTarget;
        const slotToUpdate = target.dataset.slot as keyof SlotActivationStates;
        console.log(slotToUpdate);
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
                handleSlotActivationToggle={handleSlotActivationToggle}
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
