import React from "react";
import { SlotActivationStates } from "../App";
import { getSlotFillColor } from "../utils/character-sheet.utils";

type CharacterSheetProps = {
    handleSlotActivationToggle: (
        event: React.MouseEvent<SVGPathElement>
    ) => void;
    slotActivationStates: SlotActivationStates;
};

const CharacterSheet = (props: CharacterSheetProps) => {
    const { handleSlotActivationToggle, slotActivationStates } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg8"
            width="210mm"
            height="297mm"
            version="1.1"
            viewBox="0 0 210 297"
        >
            <g id="layer1" fill="#b3b3b3" strokeWidth="0.265">
                <path id="head" d="M14.7 19.04H31.538V34.274H14.7z"></path>
                <path id="neck" d="M14.833 42.693H31.671V57.927H14.833z"></path>
                <path
                    id="shoulder"
                    d="M14.833 66.213H31.671V81.44699999999999H14.833z"
                    data-slot="shoulder"
                    fill={getSlotFillColor(slotActivationStates.shoulder)}
                    onClick={(e) => {
                        handleSlotActivationToggle(e);
                    }}
                ></path>
                <path
                    id="back"
                    d="M15.101 90.267H31.939V105.50099999999999H15.101z"
                ></path>
                <path
                    id="chest"
                    d="M15.368 114.054H32.206V129.288H15.368z"
                ></path>
                <path
                    id="rect12-1"
                    d="M15.635 137.574H32.473V152.80800000000002H15.635z"
                ></path>
                <path
                    id="mainHand"
                    d="M41.293 163.766H58.131V179H41.293z"
                ></path>
                <path
                    id="offHand"
                    d="M66.149 163.766H82.987V179H66.149z"
                ></path>
                <path
                    id="twoHand"
                    d="M91.005 164.033H107.84299999999999V179.267H91.005z"
                ></path>
                <path
                    id="ranged"
                    d="M116.396 164.033H133.234V179.267H116.396z"
                ></path>
                <path
                    id="hands"
                    d="M156.286 21.646H173.124V36.88H156.286z"
                ></path>
                <path
                    id="belt"
                    d="M156.419 45.299H173.257V60.533H156.419z"
                ></path>
                <path
                    id="legs"
                    d="M156.419 68.819H173.257V84.053H156.419z"
                ></path>
                <path
                    id="boots"
                    d="M156.687 92.873H173.525V108.107H156.687z"
                ></path>
                <path
                    id="ring1"
                    d="M156.954 116.66H173.792V131.894H156.954z"
                ></path>
                <path
                    id="ring2"
                    d="M157.221 140.18H174.059V155.41400000000002H157.221z"
                ></path>
            </g>
        </svg>
    );
};

export default CharacterSheet;
